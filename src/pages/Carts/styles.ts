import { styled } from "../../config/stitches.config";

export const Logo = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: ".5rem",

  svg: {
    color: "$green700",
    fontSize: "2rem",
  },

  strong: {
    fontSize: "1rem",
    color: "$white",

    span: {
      color: "$green700",
    },
  },
});

export const Actions = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",

  ".logout": {
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
  margin: "2rem auto 0",
  padding: "0 1rem",
  maxWidth: "728px",

  ".cartQuantity": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#E1E1E6",

    strong: {
      fontSize: "1.125rem",
    },

    span: {
      fontSize: ".875rem",
    },
  },

  ".filter": {
    margin: "1rem 0 1.5rem",
    display: "flex",
    alignItems: "center",
    gap: ".5rem",

    "> div": {
      flex: 1,
    },

    button: {
      width: "48px",
      height: "48px",
    },
  },
});
