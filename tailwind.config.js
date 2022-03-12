module.exports = {
  purge: {
    content: ['./src/**/*.js',],
    options: {
      whitelist: ['is-active'],
    }
  },
  theme: {
    fontFamily: {
      sans: [ 'Inter' ]
    },
    extend: {
      colors: {
        'black': '#000',
        'grey': '#616674',
        'white': '#FFF',
        'bleu': '#03152D',
        'yello': '#FFD748',
      },
      fontFamily: {
        sans: [ 'Inter' ]
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
  plugins: [],
  corePlugins: {
    container: false,
  }
}