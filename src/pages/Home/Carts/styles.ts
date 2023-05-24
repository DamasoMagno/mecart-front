import { styled } from "../../../config/stitches.config";

export const Content = styled("main", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "900px",
  margin: "2rem auto",
  padding: "0 1rem",
  position: "relative",

  ".filters": {
    display: "flex",
    overflow: "scroll",
    width: "100%",
    gap: ".5rem",
    height: "3rem",

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

  ".no-content": {
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255, 255, 255, .35)",
    gap: "1rem",

    "p": {
      width: "180px",
      textAlign: "center",
      lineHeight: 1.7,
      fontSize: "1rem"
    }
  }
});
