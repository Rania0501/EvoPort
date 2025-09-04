/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- ajouté pour activer le dark mode via la classe "dark"
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      colors: {
        'blue-muted': '#87A3B5',
        'blue-steel': '#618AA4',
        'peach-cream': '#FFE7D6',
        'midnight-slate': '#364C63',
        'ocean-slate': '#3F6E8C',
        'steel-sky': '#c9d8e1e7',
        'frosted-blue': 'rgba(159, 183, 198, 0.87)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
