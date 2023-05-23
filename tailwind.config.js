module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1172px',
      
    },
    container : false,

    extend: {
      colors : {
        brightBlue5 : '#3b82f6',
        brightBlue6 : '#2563eb',
        brightBlue7 : '#1d4ed8',
        brightBlue8 : '#1e40af',
        brightBlue9 : '#1e3a8a',
        brightBlack : '#171717'
      },
      
    },
  },
  plugins: [],
}
