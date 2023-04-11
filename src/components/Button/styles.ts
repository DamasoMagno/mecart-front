import { styled } from "../../config/stitches.config";

export const Container = styled("button", {
  background: "$green700",
  color: "$white",
  border: 0,
  outline: 0,
  borderRadius: 4,
  height: "3rem",
  cursor: "pointer",
  width: "100%",
  maxWidth: "600px",
  fontSize: "1rem",
  transition: "filter .25s",
  fontWeight: "bold",
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: ".5rem",

  "&:hover": {
    filter: "brightness(.8)",
  },

  variants: {
    outline: {
      true: {
        border: "1px solid $green700",
        background: "transparent",
        color: "$green700",
      },
    },
  },
});
