/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Mona Sans', 'sans-serif'],
        'body': ['"IBM Plex Mono"', 'monospace']
      },
      colors: {
        'primary': '#ff3b22'
      },
      dropShadow: {
        'normal': '0px 4px 8px 0px rgba(255, 59, 34, 0.50)'
      },
      lineHeight: {
        'heading': '120px',
        'body': '30px'
      },
      blur: {
        template: '400px'
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px'
      }
    },
  },
  plugins: [],
};
