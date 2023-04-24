import { styled } from "../../config/stitches.config";

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

export const Content = styled("form", {
  padding: "0 1.5rem 1rem",
  display: "flex",
  flexDirection: "column",
  maxWidth: "1200px",
  width: "100%",
  margin: "2rem auto 0",
  gap: ".75rem",

  button: {
    position: "fixed",
    bottom: 10,
  },
});
