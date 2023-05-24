import { styled } from "../../../../../config/stitches.config";

export const Container = styled("li", {
  background: "#121214",
  borderRadius: "4px",
  textDecoration: "none",
  overflow: "hidden",
  height: "5rem",
  border: "1px solid transparent",
  position: "relative",
  padding: "1.125rem 1.25rem",
  marginBottom: ".5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: ".25rem",
  color: "#FFF",

  button: {
    background: "$red700",
    border: 0,
    padding: ".5rem",
    borderRadius: "4px",
    color: "#FFF",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "filter .25s",

    "&:hover": {
      filter: "brightness(.7)"
    }
  }
});
