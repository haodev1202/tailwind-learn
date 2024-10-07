/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        merri: "Merriweather",
      },
      backgroundImage: {
        "custom-image": "url(./src/assets/1.png)",
      },
      backgroundPosition: {
        "custom-pos": "-74.691px 1.037px",
      },
      backgroundSize: {
        "custom-size": "214.035% 298.365%",
      },
    },
  },
  plugins: [],
};
