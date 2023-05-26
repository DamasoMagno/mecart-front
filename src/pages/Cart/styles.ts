import { styled } from "@stitches/react";

export const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  margin: "2rem auto",
  maxWidth: "900px",

  ".resume": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    zIndex: 0,
    paddingLeft: "1rem",
  },

  ".products": {
    margin: "2rem 0 3rem",
    display: "flex",
    flexDirection: "column",
    padding: "0 1rem",

    ".quantityProducts": {
      color: "#E1E1E6",
      marginBottom: "1rem",
      fontWeight: "bold",
      fontSize: "1.125rem",

      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      span: {
        fontSize: "1rem",
      },
    },
  },
});

export const Navigation = styled("footer", {
  position: "fixed",
  width: "100%",
  bottom: 0,
  display: "flex",
  alignItems: "center",
  maxWidth: "900px",
  padding: ".5rem 0",
  left: "50%",
  transform: "translate(-50%)",
  zIndex: 0,

  "button:not(.newCart)": {
    width: "100%",
    border: 0,
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    gap: ".5rem",
    cursor: "pointer",
    height: "3rem",

    color: "$white",
    background: "transparent",
    transition: "filter .25s",

    "&.finish": {
      color: "$green700",
    },

    "&.remove": {
      color: "$red700",
    },

    "&:hover": {
      filter: "brightness(.55)",
    },
  },

  ".newCart": {
    maxWidth: "50px",
    maxHeight: "50px",
  },
});
