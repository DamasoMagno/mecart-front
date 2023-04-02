import { createStitches } from "@stitches/react"

export const { 
  styled, 
  css, 
  globalCss, 
  keyframes 
} = createStitches({
  theme: {
    colors: {
      "green900": "#04D361",
      "green700": "#00875F",
      "yellow600": "#FBA94C",
      "white": "#FFF",
      "black": "#000"
    },
    fonts: {
      "body": "Roboto, sans serif"
    }
  }
})