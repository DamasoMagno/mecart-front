import { styled } from "../../config/stitches.config";

export const Content = styled("form", {
  padding: "0 1.5rem 1rem",
  display: "flex",
  flexDirection: "column",
  maxWidth: "1200px",
  width: "100%",
  margin: "2rem auto 0",
  gap: ".75rem",

  footer: {
    position: "fixed",
    bottom: 20,
    left: 0,
    width: "100%",
    padding: "0 1rem"
  },
});
