import { styled } from "../../config/stitches.config";

export const Container = styled("button", {
  background: "green",
  color: "#FFF",
  border: 0,
  outline: 0,
  borderRadius: 4,
  height: "3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 1rem",
  width: "100%",
  fontSize: "1rem",
  transition: "filter .25s",
  fontWeight: "bold",

  "&:hover": {
    filter: "brightness(.8)"
  }
})