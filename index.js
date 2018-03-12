const chromatism = require('chromatism')
const postcss = require('postcss')
const util = require('postcss-plugin-utilities')

function sepia (object, color) {
  color = util.getRGB(color)
  if (!color.r && !color.g && !color.b) return color
  color = Object.assign(color, chromatism.sepia(color).rgb)
  return color.a ? `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` : chromatism.convert(color).hex
}

module.exports = postcss.plugin('sepia', opt => css => {
  util.parseFunction(css, 'sepia', sepia)
})
