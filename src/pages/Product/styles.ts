import { styled } from "../../config/stitches.config";

export const Content = styled("form", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "900px",
  margin: "2rem auto 0",
  gap: ".5rem",
  padding: "0 1rem",

  ".fields": {
    display: "flex",
    flexDirection: "column",
    marginBottom: ".5rem",
    flex: 1,

    label: {
      marginBottom: ".5rem",
      color: "rgba(255, 255, 255, .5)",
      fontSize: ".85rem",
    },
  },

  footer: {
    marginBottom: "auto",
    position: "fixed",
    width: "100%",
    left: 0,
    bottom: 0,
    padding: "0 1rem 1rem",

    "@lg": {
      left: "unset",
      width: "300px",
      padding: "0",
    },
  },
});
