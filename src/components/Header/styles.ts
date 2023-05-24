import { styled } from "../../config/stitches.config";

export const Container = styled("header", {
  background: "$black",
  color: "$white",
  fontWeight: "bold",
  fontSize: "1.25rem",

  ".content": {
    padding: "2rem 1rem 1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    maxWidth: "900px",
    margin: "0 auto",

    div: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",

      a: {
        textDecoration: "none",
        color: "$white",
      },
    },
  },
});
