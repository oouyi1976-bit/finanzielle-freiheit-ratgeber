/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef4fb",
          100: "#d9e8f6",
          700: "#123b63",
          800: "#0b2d4f",
          900: "#071f38"
        },
        gold: {
          100: "#fff1c7",
          300: "#f4ce73",
          500: "#c8932e",
          600: "#a87721"
        },
        ink: "#142033"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(7, 31, 56, 0.10)"
      }
    }
  },
  plugins: []
};
