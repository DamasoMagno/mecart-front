import { styled } from "../../config/stitches.config";

export const Header = styled("header", {
  background: "$black",

  ".content": {
    padding: "2rem 1rem 1.5rem",
    maxWidth: "900px",
    margin: "0 auto",
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
        color: "$white",

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
  },
});

export const Content = styled("main", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "900px",
  margin: "2rem auto",
  padding: "0 1rem",
  position: "relative",

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
    marginBottom: "auto",
    position: "fixed",
    bottom: 10,
    width: "100%",
    left: 0,
    padding: "0 1rem",

    "@lg": {
      left: "unset",
      width: "300px",
      padding: "0",
    },
  },
});
