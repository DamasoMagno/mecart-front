import { styled } from "../../../../../config/stitches.config";

export const Container = styled("li", {
  borderRadius: "4px",
  textDecoration: "none",
  overflow: "hidden",
  border: "1px solid transparent",
  position: "relative",
  marginBottom: ".5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "3.25rem",
  wordBreak: "break-all",

  div: {
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    padding: "0 .5rem",
    background: "#121214",
    flex: 1,
    height: "100%",

    strong: {
      color: "#FFF",
      fontSize: ".95rem",
    },
  },

  button: {
    background: "$red700",
    border: 0,
    padding: ".85rem",
    borderRadius: "4px",
    color: "#FFF",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    marginLeft: ".3rem",
    cursor: "pointer",
    height: "100%",
    transition: "filter .25s",

    "&:hover": {
      filter: "brightness(.7)"
    }
  }
});
