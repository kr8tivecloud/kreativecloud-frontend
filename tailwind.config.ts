import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "2rem",
      },
    },
    extend: {
      colors: {},
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"], // Add Helvetica as the primary font
        encodeRegular: [
          "encode-sans-regular",
          "Helvetica",
          "Arial",
          "sans-serif",
        ], // Add Helvetica as the primary font
        encodeMedium: [
          "encode-sans-medium",
          "Helvetica",
          "Arial",
          "sans-serif",
        ], // Add Helvetica as the primary font
      },
      animation: {
        blink: "blink 1.5s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },

      screens: {
        "3xs": "320px",
        "2xs": "480px",
        xs: "576px",
      },
    },
  },
  plugins: [],
} satisfies Config;
