/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      colors: {
        primary: '#B4D429',
        dark: "#171923",
        light: "#fff",
        body: "#1D1E28"
      },
    },
  },
  plugins: [],
}

