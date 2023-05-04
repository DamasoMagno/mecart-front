import { styled } from "../../config/stitches.config";

export const Container = styled("button", {
  background: "$green500",
  color: "$white",
  border: 0,
  outline: 0,
  borderRadius: 4,
  height: "3.5rem",
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

  "&:disabled": {
    background: "rgba(9, 126, 89, .85)",
    cursor: "not-allowed"
  },

  "&:hover": {
    filter: "brightness(.8)",
  },

  variants: {
    outline: {
      true: {
        border: "1px solid $green700",
        background: "transparent",
        color: "$green500",
      },
    },
    float: {
      true: {
        width: "50px",
        height: "50px",
        borderRadius: "100%",

        "span": {
          display: "none"
        }
      },
    },
  },
});
