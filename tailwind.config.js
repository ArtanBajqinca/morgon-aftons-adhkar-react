module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'avenir-black': ['Avenir-Black'],
        'avenir-book': ['Avenir-Book'],
        'avenir-heavy': ['Avenir-Heavy'],
        'avenir-medium': ['Avenir-Medium'],
        'avenir-roman': ['Avenir-Roman'],
        'avenir-light': ['Avenir-Light'],
        'lora-bold': ['Lora-Bold'],
        'lora-regular': ['Lora-Regular'],
        'me-quran': ['Me-Quran'],
        'noto-sans-arabic': ['Noto-Sans-Arabic'],
      },
      colors: {
        white: '#FFFFFF',
        gray: {
          500: '#363636',
        },
        beige: {
          500: '#F5E8B0',
          550: '#E9DBA3',
          600: '#BEB283',
          700: '#9E9674',
          800: '#847D61',
        },
        orange: {
          500: '#F0981E',
          600: '#BE6001',
        },
        blue: {
          500: '#4A96CA',
        },
      },
    },
  },
};
