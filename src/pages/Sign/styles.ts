import { styled } from "../../config/stitches.config"

export const Container = styled('div', {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  color: "#FFF",

  ".content": {
    height: "100%",

    "h1": {},
    "p": {},
    "button": {
      background: "green",
      border: 0,
      outline: 0,
      padding: ".5rem 1rem",
      height: "2.5rem",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      color: "#FFF",
      fontSize: "1rem",
      marginTop: "3rem"
    }
  }
})

