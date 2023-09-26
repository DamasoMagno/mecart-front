import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      green700: '#00875F',
      green500: '#00B37E',
      green300: '#04D361',
      red700: '#FC4C4C',
      red600: '#FE5C5C',
      gray700: '#121214',
      gray300: '7C7C8A',
      white: '#FFF',
      black: '#000',
    },
    fonts: {
      body: 'Roboto, sans serif',
    },
  },

  media: {
    lg: '(min-width: 1024px)',
  },
})
