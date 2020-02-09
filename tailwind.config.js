module.exports = {
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'DIN'
        ],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      height: {
        heroxl: '500px',
      },
      inset: {
        '-16': '-4rem',
      },
      maxWidth: {
        'herologo': '360px',
      },
    },
  },
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .3s ease',
      transitions: {
        'slow': 'all 0.7s ease',
      }  
    })
  ],
  corePlugins: {
    container: false,
  }
}