/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "light",
      "cupcake",
      "lofi",
      "pastel",
      "luxury",
      "wireframe",
      "night",
      "valentine",
      "retro",
      {
        black: {
          ...require("daisyui/src/theming/themes")["[data-theme=black]"],
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--btn-text-case": "uppercase",
        },
      },
      {
        lofi: {
          ...require("daisyui/src/theming/themes")["[data-theme=lofi]"],
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
        },
      },
    ],
    darkTheme: "night",
  },
};
