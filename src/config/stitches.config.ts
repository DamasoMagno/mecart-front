import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      green700: "#00875F",
      green500: "#00B37E",
      green300: "#04D361",
      red700: "#996DFF",
      red600: "#FBA94C",
      white: "#FFF",
      black: "#000",
      cyan200: "#121214",
    },
    fonts: {
      body: "Roboto, sans serif",
    },
  },
});
