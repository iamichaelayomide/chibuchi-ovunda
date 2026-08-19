/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fff5f7",
          100: "#feedf1",
          200: "#fcd6de",
          300: "#f4c8d1",
          400: "#e899aa",
          500: "#d96580",
          600: "#c84f70",
          700: "#a83254",
          800: "#8c2a45",
          900: "#75273d",
        },
        cream: {
          50: "#ffffff",
          100: "#fffdfb",
          200: "#fffaf7",
          300: "#fbf3ee",
          400: "#f5e8e0",
          500: "#ecd9ce",
        },
        obsidian: {
          DEFAULT: "#0b0b0b",
          pure: "#050505",
          muted: "#171717",
          card: "#121212",
          border: "#262626",
        }
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Cambria", "serif"],
        display: ["Cinzel", "Playfair Display", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        }
      }
    },
  },
  plugins: [],
}
