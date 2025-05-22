"use client";

import React, { useEffect, useRef, useCallback } from "react";

// Interface for the pointer object
interface PointerState {
  x: number;
  y: number;
  tX: number;
  tY: number;
}

// Interface for the uniforms object
interface ShaderUniforms {
  u_time?: WebGLUniformLocation | null;
  u_ratio?: WebGLUniformLocation | null;
  u_pointer_position?: WebGLUniformLocation | null;
  u_scroll_progress?: WebGLUniformLocation | null;
  [key: string]: WebGLUniformLocation | null | undefined;
}

const NeuralNoiseShader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const shaderProgramRef = useRef<WebGLProgram | null>(null);
  const uniformsRef = useRef<ShaderUniforms>({});
  const pointerRef = useRef<PointerState>({ x: 0, y: 0, tX: 0, tY: 0 });
  const animationFrameIdRef = useRef<number | null>(null);
  const scrollProgressRef = useRef<number>(0);
  const devicePixelRatioRef = useRef<number>(1);
  const vertexBufferRef = useRef<WebGLBuffer | null>(null); // For cleanup

  // Vertex Shader Source
  const vertShaderSource: string = `
        precision mediump float;
        varying vec2 vUv;
        attribute vec2 a_position;
        void main() {
            vUv = .5 * (a_position + 1.);
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `;

  // Fragment Shader Source
  const fragShaderSource: string = `
        precision mediump float;
        varying vec2 vUv;
        uniform float u_time;
        uniform float u_ratio;
        uniform vec2 u_pointer_position;
        uniform float u_scroll_progress;

        vec2 rotate(vec2 uv, float th) {
            return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
        }

        float neuro_shape(vec2 uv, float t, float p) {
            vec2 sine_acc = vec2(0.);
            vec2 res = vec2(0.);
            float scale = 8.;

            for (int j = 0; j < 15; j++) {
                uv = rotate(uv, 1.);
                sine_acc = rotate(sine_acc, 1.);
                vec2 layer = uv * scale + float(j) + sine_acc - t;
                sine_acc += sin(layer) + 2.4 * p;
                res += (.5 + .5 * cos(layer)) / scale;
                scale *= (1.2);
            }
            return res.x + res.y;
        }

        void main() {
            vec2 uv = .5 * vUv;
            uv.x *= u_ratio;

            vec2 pointer = vUv - u_pointer_position;
            pointer.x *= u_ratio;
            float p = clamp(length(pointer), 0., 1.);
            p = .5 * pow(1. - p, 2.);

            float t = .001 * u_time;
            vec3 color = vec3(0.);

            float noise = neuro_shape(uv, t, p);

            noise = 1.2 * pow(noise, 3.);
            noise += pow(noise, 10.);
            noise = max(.0, noise - .5);
            noise *= (1. - length(vUv - .5));

            color = normalize(vec3(.2, .5 + .4 * cos(3. * u_scroll_progress), .5 + .5 * sin(3. * u_scroll_progress)));
            color = color * noise;

            gl_FragColor = vec4(color, noise);
        }
    `;

  const createShader = useCallback(
    (
      gl: WebGLRenderingContext,
      sourceCode: string,
      type: number
    ): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) {
        console.error("Unable to create shader.");
        return null;
      }
      gl.shaderSource(shader, sourceCode);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(
          "An error occurred compiling the shaders: " +
            gl.getShaderInfoLog(shader)
        );
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    },
    []
  );

  const createShaderProgram = useCallback(
    (
      gl: WebGLRenderingContext,
      vertexShader: WebGLShader,
      fragmentShader: WebGLShader
    ): WebGLProgram | null => {
      const program = gl.createProgram();
      if (!program) {
        console.error("Unable to create shader program.");
        return null;
      }
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(
          "Unable to initialize the shader program: " +
            gl.getProgramInfoLog(program)
        );
        gl.deleteProgram(program); // Clean up the program if linking fails
        return null;
      }
      return program;
    },
    []
  );

  const getUniforms = useCallback(
    (gl: WebGLRenderingContext, program: WebGLProgram): ShaderUniforms => {
      const activeUniforms: ShaderUniforms = {};
      const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < uniformCount; i++) {
        const uniformInfo = gl.getActiveUniform(program, i);
        if (uniformInfo) {
          activeUniforms[uniformInfo.name] = gl.getUniformLocation(
            program,
            uniformInfo.name
          );
        }
      }
      return activeUniforms;
    },
    []
  );

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const gl = glRef.current;
    const u_ratio = uniformsRef.current.u_ratio;

    if (!canvas || !gl || !u_ratio) return;

    canvas.width = window.innerWidth * devicePixelRatioRef.current;
    canvas.height = window.innerHeight * devicePixelRatioRef.current;

    gl.uniform1f(u_ratio, canvas.width / canvas.height);
    gl.viewport(0, 0, canvas.width, canvas.height);
  }, []); // devicePixelRatioRef is stable, others are refs

  const renderLoop = useCallback((currentTime: number) => {
    const gl = glRef.current;
    const program = shaderProgramRef.current;
    const uniforms = uniformsRef.current;

    if (
      !gl ||
      !program ||
      !uniforms.u_time ||
      !uniforms.u_pointer_position ||
      !uniforms.u_scroll_progress
    ) {
      animationFrameIdRef.current = requestAnimationFrame(renderLoop);
      return;
    }

    pointerRef.current.x +=
      (pointerRef.current.tX - pointerRef.current.x) * 0.2;
    pointerRef.current.y +=
      (pointerRef.current.tY - pointerRef.current.y) * 0.2;

    gl.uniform1f(uniforms.u_time, currentTime);
    gl.uniform2f(
      uniforms.u_pointer_position,
      pointerRef.current.x / window.innerWidth,
      1 - pointerRef.current.y / window.innerHeight
    );
    gl.uniform1f(uniforms.u_scroll_progress, scrollProgressRef.current);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    animationFrameIdRef.current = requestAnimationFrame(renderLoop);
  }, []); // Refs are stable dependencies

  useEffect(() => {
    // This effect runs once on component mount
    if (typeof window !== "undefined") {
      // Ensure window is defined (for SSR safety, though 'use client' helps)
      devicePixelRatioRef.current = Math.min(window.devicePixelRatio || 1, 2);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) {
      console.error("WebGL is not supported by your browser.");
      return;
    }
    glRef.current = gl;

    const vertexShader = createShader(gl, vertShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = createShader(
      gl,
      fragShaderSource,
      gl.FRAGMENT_SHADER
    );
    if (!vertexShader || !fragmentShader) return;

    const program = createShaderProgram(gl, vertexShader, fragmentShader);
    if (!program) return;
    shaderProgramRef.current = program;

    uniformsRef.current = getUniforms(gl, program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const localVertexBuffer = gl.createBuffer();
    if (!localVertexBuffer) {
      console.error("Failed to create vertex buffer");
      // Clean up created shaders and program if buffer creation fails
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteProgram(program);
      return;
    }
    vertexBufferRef.current = localVertexBuffer; // Store for cleanup

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferRef.current);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    gl.useProgram(program);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    if (positionLocation === -1) {
      console.error("Failed to get attribute location for a_position");
      // Clean up created shaders, program and buffer if attribute location fails
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteProgram(program);
      gl.deleteBuffer(vertexBufferRef.current);
      return;
    }
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferRef.current); // Bind again before vertexAttribPointer
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    resizeCanvas();
    animationFrameIdRef.current = requestAnimationFrame(renderLoop);

    // Event listeners setup
    const updateMousePosition = (eX: number, eY: number) => {
      pointerRef.current.tX = eX;
      pointerRef.current.tY = eY;
    };

    const handlePointerMove = (e: PointerEvent) =>
      updateMousePosition(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.targetTouches && e.targetTouches.length > 0) {
        updateMousePosition(
          e.targetTouches[0].clientX,
          e.targetTouches[0].clientY
        );
      }
    };
    // Using PointerEvent for click as well for consistency, or MouseEvent if preferred
    const handleClick = (e: MouseEvent) =>
      updateMousePosition(e.clientX, e.clientY);

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollableHeight =
          document.body.scrollHeight - window.innerHeight;
        let progress =
          scrollableHeight > 0 ? window.pageYOffset / scrollableHeight : 0;
        if (isNaN(progress) || !isFinite(progress)) {
          progress = 0;
        }
        scrollProgressRef.current = progress;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("click", handleClick);
      window.addEventListener("resize", resizeCanvas);
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initialize scroll progress
    }

    return () => {
      // Cleanup
      if (typeof window !== "undefined") {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("click", handleClick);
        window.removeEventListener("resize", resizeCanvas);
        window.removeEventListener("scroll", handleScroll);
      }

      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }

      const currentGl = glRef.current;
      if (currentGl) {
        if (shaderProgramRef.current) {
          currentGl.deleteProgram(shaderProgramRef.current);
        }
        // Shaders are deleted in createShader if compilation fails,
        // or if createShaderProgram fails after successful shader compilation.
        // If they were successfully attached to a program, deleting the program is usually enough.
        // However, explicit deletion is safer if they are stored.
        if (vertexShader) currentGl.deleteShader(vertexShader); // vertexShader is in scope
        if (fragmentShader) currentGl.deleteShader(fragmentShader); // fragmentShader is in scope

        if (vertexBufferRef.current) {
          currentGl.deleteBuffer(vertexBufferRef.current);
        }
      }
    };
  }, [
    vertShaderSource,
    fragShaderSource,
    createShader,
    createShaderProgram,
    getUniforms,
    resizeCanvas,
    renderLoop,
  ]);

  return (
    <div className="absolute min-h-screen overflow-x-hidden">
      <canvas
        ref={canvasRef}
        id="neuro-shader-canvas"
        className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-95 z-0"
      />
    </div>
  );
};

export default NeuralNoiseShader;
