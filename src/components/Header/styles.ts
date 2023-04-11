import { styled } from "../../config/stitches.config";

export const Container = styled("header", {
  background: "$black",
  padding: "3rem 1.5rem 1.5rem",
  color: "$white",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  div: {
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
