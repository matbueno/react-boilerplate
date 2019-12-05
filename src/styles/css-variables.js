const styles = {}

const colors = {
  'color-dark-blue': 'hsl(209, 23%, 22%)',
  'color-very-dark-blue-1': 'hsl(207, 26%, 17%)',
  'color-very-dark-blue-2': 'hsl(207, 26%, 17%)',
  'dark-gray': 'hsl(0, 0%, 52%)',
  'very-light-gray': 'hsl(0, 0%, 98%)',
  white: 'hsl(0, 0%, 100%)',
}

// Typography

styles['font-default'] = "'Nunito Sans', sans-serif"

// Colors

styles['dark-mode-elements'] = colors['color-dark-blue']
styles['dark-mode-background'] = colors['color-very-dark-blue-1']
styles['light-mode-text'] = colors['color-very-dark-blue-2']
styles['light-mode-input'] = colors['dark-gray']
styles['light-mode-background'] = colors['very-light-gray']
styles['dark-mode-text'] = colors.white
styles['light-mode-elements'] = colors.white

module.exports = styles
