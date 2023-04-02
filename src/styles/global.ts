import { globalCss } from "../config/stitches.config"

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },

  "body": {
    background: '#202024',
  },

  "body, input, textarea, button": {
    fontWeight: "400",
    fontFamily: "$body"
  }
})