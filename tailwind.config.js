module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1172px',
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      display: ['Poppins', 'sans-serif'],
      body: ['Raleway', 'sans-serif'],
    },

    extend: {
      colors: {
        brightBlue5: '#3b82f6',
        brightBlue6: '#2563eb',
        brightBlue7: '#1d4ed8',
        brightBlue8: '#1e40af',
        brightBlue9: '#1e3a8a',
        'newBlack': 'rgb(39 39 39)',
        green: 'rgb(62 195 12)',
        'new-blue': 'rgb(79 152 202)',
        'darkLight' : 'rgb(125 125 125)'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/img/home-bg.jpg')",
      },
    },
  },
  plugins: [],
}
