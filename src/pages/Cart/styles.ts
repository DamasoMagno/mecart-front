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
  background: "#29292E",
  display: "flex",
  alignItems: "center",

  "button:not(.newCart)": {
    width: "100%",
    background: "transparent",
    border: 0,
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    gap: ".5rem",
    cursor: "pointer",
    height: "3.5rem",
    transition: "background .25s",

    "&.finish": {
      color: "$green700",

      "&:hover, &:focus": {
        background: "rgba(0, 135, 95, .1)",
      },
    },

    "&.remove": {
      color: "$red700",

      "&:hover, &:focus": {
        background: "rgba(252, 75, 75, .1)",
      },
    },
  },

  ".newCart": {
    margin: ".5rem",
    maxWidth: "50px",
    height: "50px",
  }
});
