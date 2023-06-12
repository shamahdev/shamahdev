/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      neutral: {
        DEFAULT: '#131313',
        100: '#131313',
        90: '#2B2B2B',
        20: '#C7C7C7',
        10: '#F4F4F4',
      },
    }
  },
  plugins: [],
}
