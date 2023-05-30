import { styled } from "@stitches/react";

export const Container = styled("li", {
  listStyle: "none",
  background: "#121214",
  padding: "1.25rem 1rem",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  gap: ".75rem",

  "& + li": {
    marginTop: ".5rem"
  },

  strong: {
    color: "$white",
    fontSize: "1.125rem",
  },

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "$white",
    height: "1rem",

    ".productData": {
      display: "flex",
      gap: ".5rem",

      span: {
        display: "flex",
        alignItems: "center",
        gap: ".25rem",
        fontSize: "1rem",
        color: "rgba(255, 255, 255, .5)",
      },
    },

    ".productEdit": {
      display: "flex",
      gap: "8px",

      "button, a": {
        border: 0,
        borderRadius: "8px",
        padding: ".3125rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.125rem",
        background: "transparent",
        cursor: "pointer",
        transition: "filter .25s",

        "&:hover": {
          filter: "brightness(.8)",
        },

        "&:first-child": {
          background: "rgba(0, 255, 0, .10)",
          color: "green",
        },

        "&:last-child": {
          background: "rgba(255, 0, 0, .10)",
          color: "red",
        },
      },
    },
  },
});
