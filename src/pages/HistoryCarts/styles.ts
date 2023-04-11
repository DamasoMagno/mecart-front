import { styled } from "../../config/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const Content = styled("main", {
  padding: "0 1.5rem 1rem",
  display: "flex",
  flexDirection: "column",

  nav: {
    margin: "2rem 0 1.5rem",
    display: "flex",
    overflow: "scroll",
    width: "100%",
    gap: ".5rem",
    height: "2.5rem",

    "&::-webkit-scrollbar": {
      display: "none",
    },

    button: {
      background: "$black",
      border: "1px solid transparent",
      outline: 0,
      whiteSpace: "nowrap",
      color: "#7C7C8A",
      borderRadius: "8px",
      padding: "0 .75rem",
      fontSize: ".75rem",
      textTransform: "uppercase",
      transition: "all .25s",
      cursor: "pointer",

      "&:hover, &:focus": {
        border: "1px solid $green700",
        outline: "$green700",
        color: "$green700",
      },
    },
  },

  ul: {
    display: "flex",
    flexDirection: "column",
    gap: ".25rem",

    ".resume": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "$white",
      margin: "0 0 .75rem",

      span: {
        fontSize: ".875rem",
        color: "rgba(255, 255, 255, .75)",
      },
    },
  },

  footer: {
    position: "fixed",
    bottom: "2%",
    width: "100%",
    left: 0,
    padding: "0 2rem",
  },
});
