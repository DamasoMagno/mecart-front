import { styled } from "../../config/stitches.config";

export const Container = styled("button", {
  background: "$green700",
  color: "$white",
  border: 0,
  outline: 0,
  borderRadius: 4,
  height: "3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: ".5rem",
  padding: "0 1rem",
  width: "100%",
  fontSize: "1rem",
  transition: "filter .25s",
  fontWeight: "bold",
  position: "relative",

  "svg": {
    position: "absolute",
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)"
  },

  "&:hover": {
    filter: "brightness(.8)"
  }
})