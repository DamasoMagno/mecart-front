import { styled } from "../../config/stitches.config"

export const Container = styled("div", {
  backgroundColor: "#121214",
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: ".5rem",

  "input": {
    background: "transparent",
    border: 0,
    outline: 0,
    color: "#FFF",
    padding: ".25rem 0",
    flex: 1,
  },
})