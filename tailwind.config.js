/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    colors: {
      white: '#fff',
      blue: '#2F2E41',
      red: {
        100: '#EBEBEB',
      },
      grey: {
        200: '#F5F5F5',
        300: '#7B7B7B',
        400: '#E3E3E3',
        500: '#FF5A55',
        700: '#8F8D8D',
        800: '#7B7B7B',
        900: '#464646',
      }
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
