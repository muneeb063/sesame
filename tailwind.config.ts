import type { Config } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sesame: {
          950: "#061712",
          900: "#0B241D",
          800: "#0F2F26",
          700: "#154136",
          600: "#1B5647",
        },
        cream: {
          50: "#FFFCF5",
          100: "#F7F1E4",
          200: "#EFE6D2",
        },
        gold: {
          500: "#B79A54",
          600: "#A78946",
        },
        ink: {
          900: "#0B0F0E",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.12)",
        lift: "0 18px 60px rgba(0,0,0,0.18)",
      },
      keyframes: {
        "float-slow": {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-10px,0)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        "float-slow": "float-slow 8s ease-in-out infinite",
        shine: "shine 1.25s ease-in-out",
      },
    },
  },
  plugins: [lineClamp],
} satisfies Config;
