import { styled } from "../../config/stitches.config";

export const Container = styled("header", {
  background: "$black",

  ".content": {
    fontSize: "1.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "728px",
    padding: "2rem 1rem 1.5rem",
    margin: "0 auto"
  },
});
