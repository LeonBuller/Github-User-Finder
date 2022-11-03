/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        happytheme: {
          primary: "#7fa8db",

          secondary: "#44e80d",

          accent: "#f9bffc",

          neutral: "#181A25",

          "base-100": "#f3f4f6",

          info: "#B1D7E7",

          success: "#1A7564",

          warning: "#FCC727",

          error: "#F6625A",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
