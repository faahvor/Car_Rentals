/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "fig":["Figtree", "sans-serif"]
      },
      backgroundImage: {
        'custom-car-image': 'url("https://res.cloudinary.com/dhvwthnzq/image/upload/v1724926825/car-rental/image_23_1_oqmd2f.png")',
      },
    },
  },
  plugins: [],
}