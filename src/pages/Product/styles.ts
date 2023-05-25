import { styled } from "../../config/stitches.config";

export const Content = styled("form", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "900px",
  margin: "2rem auto 0",
  gap: ".75rem",
  padding: "0 1rem",

  footer: {
    marginBottom: "auto",
    position: "fixed",
    width: "100%",
    left: 0,
    bottom: 0,
    padding: "0 1rem 1rem",

    "@lg": {
      left: "50%",
      width: "300px",
      transform: "translate(-50%)"
    },
  },
});
