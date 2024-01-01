/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-green': '#025A4E',
        'primary-yellow': '#EDE7DE'
      },
      flex: {
        '1.5': '1.5 1.5 0%',
        '1.75': '1.75 1.75 0%',
        '2': '1.8 1.8 0%',
        '3': '3 3 0%',
        '2.5': '2.5 2.5 0%',
      }

    },
  },
  plugins: [],
}
