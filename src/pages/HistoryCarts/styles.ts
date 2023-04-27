import { styled } from "../../config/stitches.config";

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
