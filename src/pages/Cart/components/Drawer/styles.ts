import { styled } from "../../../../config/stitches.config";

export const Container = styled("div", {
  top: 0,
  position: "fixed",
  right: 0,
  height: "100%",
  transition: "transform .25s",
  zIndex: 1,
  background: "#000",
  overflow: "hidden",
  maxWidth: "540px",
  width: "100%",

  variants: {
    closed: {
      true: {
        transform: "translateX(100%)",
      }
    }
  },

  header: {
    padding: "2rem 0 1.5rem",
    display: "flex",
    justifyContent: "flex-end",

    "> button": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50px",
      fontSize: "1.25rem",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      color: "white",
      height: "50px",
    }
  }
});

export const Form = styled("form", {
  display: "flex",
  padding: "2rem 1.5rem 0",
  width: "100%",
  maxWidth: "540px",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "85%",

  ".inputs": {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "1rem",

    "button": {
      background: "transparent",
      color: "#FFF",
      marginTop: ".5rem",
      border: 0,
      width: "100%",
      textAlign: "left",
      cursor: "pointer",
      padding: "1rem .75rem",
      borderRadius: 4,
      fontSize: "1rem",
      transition: "background 0.25s",

      "&:hover":{
        background: "rgba(255, 255, 255, .05)"
      }
    }
  },

  "> button": {
    color: "$green700",
  }
});
