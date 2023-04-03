import { keyframes, styled } from "../../config/stitches.config";

export const alternateSizeIcon = keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.1)' },
});

export const Container = styled("div", {
  height: "100vh",
  textAlign: "center",
  color: "$white",
  display: "flex",
  alignItems: "flex-end",
})

export const Content = styled("div", {
  height: "60vh",
  width: "100%",
  marginBottom: "1.13rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",

  ".logoIcon": {
    animation: `${alternateSizeIcon} 1.5s infinite`,
  },

  ".description": {
    width: "100%",
    padding: "0 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "strong": {
      fontSize: "2rem",
  
      "span": {
        color: "$green700",
      }
    },
  
    "p": {
      lineHeight: 1.7,
      margin: "1rem 0 4rem",
      maxWidth: "200px",
      fontSize: "1rem",
      display: "block",
      fontFamily: "$body"
    }
  }
})