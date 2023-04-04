import { styled } from "../../config/stitches.config"

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "$white",
  height: "100vh",

  "header": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: ".5rem",

    "strong": {
      color: "$white",
      fontSize: "1.5rem",

      "span": {
        color: "$green700"
      }
    }
  },

  "form": {
    maxWidth: "600px",
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    width: "80%",
    gap: ".75rem",
    textAlign: "center",

    "h3": {
      marginBottom: "2rem"
    },

    "button": {
      marginTop: "1.5rem",
      marginBottom: ".25rem"
    },

    "a": {
      color: "$green700",
      display: "flex",
      alignItems: "center",
      gap: ".5rem",
      fontSize: ".875rem",
      textDecoration: "none",
      alignSelf: "start",
      height: "3rem"
    }
  }
})
