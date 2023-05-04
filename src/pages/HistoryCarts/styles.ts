import { styled } from "../../config/stitches.config";

export const Header = styled("header", {
  background: "$black",
  padding: "2rem 1.5rem 1.5rem",
  color: "$white",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  ".logo": {
    display: "flex",
    alignItems: "center",
    gap: 6,

    svg: {
      color: "$green700",
      fontSize: "2rem",
    },

    strong: {
      fontSize: "1.5rem",

      span: {
        color: "$green700",
      },
    },
  },

  button: {
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#7C7C8A",
    fontSize: "1.5rem",
    cursor: "pointer",
    border: 0,
    transition: "color .25s",

    "&:hover": {
      color: "$green700",
    },
  },
});

export const Content = styled("main", {
  padding: "0 1.5rem 1rem",
  display: "flex",
  flexDirection: "column",
  maxWidth: "1200px",
  width: "100%",
  margin: "2rem auto",

  nav: {
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
      borderRadius: "4px ",
      padding: "0 1.125rem",
      fontSize: ".75rem",
      textTransform: "uppercase",
      transition: "all .25s",
      cursor: "pointer",

      "&:hover, &:focus, &.selected": {
        border: "1px solid $green300",
        outline: "$green300",
        color: "$green300",
      },
    },
  },

  ".carts": {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: ".25rem",

    ".cartQuantity": {
      color: "$white",
      marginBottom: ".75rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      span: {
        fontSize: ".875rem",
        color: "rgba(255, 255, 255, .75)",
      },
    },
  },

  footer: {
    position: "fixed",
    bottom: "5%",
    left: 0,
    width: "100%",
    padding: "0 2rem",
    transition: "all 1s", 

    "@lg": {
      width: "300px",
      left: "auto"
    }
  },
});