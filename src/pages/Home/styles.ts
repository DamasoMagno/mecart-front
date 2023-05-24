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

export const Navigation = styled("footer", {
  position: "fixed",
  width: "100%",
  bottom: 0,
  left: 0,
  background: "#29292E",
  display: "flex",
  alignItems: "center",

  button: {
    width: "100%",
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
    color: "$white",

    "&:not(.action)": {
      background: "transparent",

      "&.current": {
        color: "$green700",
      },
    },
  },
});
