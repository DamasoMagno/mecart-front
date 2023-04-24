import { styled } from "@stitches/react";

export const Header = styled("header", {
  background: "$black",
  padding: "2rem 1rem 1.5rem",
  color: "$white",
  fontWeight: "bold",
  fontSize: "1.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  a: {
    textDecoration: "none",
    color: "$white",
  },
});

export const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  margin: "2rem auto",
  maxWidth: "1200px",

  ".resume": {
    width: "100%",
    padding: "0 0 0 1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",

    ".resumeTopic": {
      background: "$green700",
      padding: "1rem 1rem",
      borderRadius: ".5rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "100%",
      color: "$white",

      header: {
        fontSize: ".875rem",
        color: "rgba(255, 255, 255, .85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },

      strong: {
        fontSize: "1rem",
        fontWeight: 700,
        lineHeight: 1.7,
      },
    },
  },

  ".products": {
    marginTop: "2rem",
    padding: "0 1.5rem",

    display: "flex",
    flexDirection: "column",

    ".quantityResume": {
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
