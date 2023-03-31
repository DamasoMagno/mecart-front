import { globalCss } from "../config/stitches.config"

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box'
  },

  'body': {
    background: '#333',
    height: '100vh'
  }
})