import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { throttle } from "../utils";

export const useWindowSize = (currentWidth?: number) => {
  const [width, setWidth] = useState<number>(currentWidth || 0);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", throttle(handleResize, 200));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
