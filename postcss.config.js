const autoprefixer = require('autoprefixer')
const postCSSImport = require('postcss-import')()
const postCSSNested = require('postcss-nested')
const postCSSCssVariables = require('postcss-css-variables')
const postCSSCustomMedia = require('postcss-custom-media')
const colorFunction = require('postcss-color-function')

const cssVariables = require('./src/styles/css-variables')

const postCSSAutoprefixer = autoprefixer()

const gridBreakpoints = {
  mobile: '375px',
  desktop: '1440px',
  retina: {
    minPixelRatio: 1.25,
    minResolution: '120dpi',
  },
}

module.exports = {
  plugins: [
    postCSSImport,
    postCSSAutoprefixer,
    postCSSNested,
    postCSSCssVariables({
      variables: cssVariables,
    }),
    postCSSCustomMedia({
      importFrom: {
        customMedia: {
          '--s-viewport': `(max-width: ${gridBreakpoints.mobile})`,
          '--m-viewport': `(max-width: ${gridBreakpoints.desktop})`,
          '--retina-display': `
          (-webkit-min-device-pixel-ratio: ${gridBreakpoints.retina.minPixelRatio}),
          (min-resolution: ${gridBreakpoints.retina.minResolution})
          `,
        },
      },
    }),
    colorFunction,
  ],
}
