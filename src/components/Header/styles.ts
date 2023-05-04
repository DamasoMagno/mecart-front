import { styled } from "../../config/stitches.config";

export const Container = styled("header", {
  background: "$black",
  padding: "2rem 1rem 1.5rem",
  color: "$white",
  fontWeight: "bold",
  fontSize: "1.25rem",
  display: "flex",
  alignItems: "center",

  a: {
    textDecoration: "none",
    color: "$white",
  },

  h3: {
    margin: "auto",
  }
});
