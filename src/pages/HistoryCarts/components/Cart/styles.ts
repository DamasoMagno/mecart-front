import { Link } from "react-router-dom";
import { styled } from "../../../../config/stitches.config";

export const Container = styled(Link, {
  background: "#121214",
  borderRadius: 5,
  textDecoration: "none",
  height: "5rem",
  color: "rgba(255, 255, 230, 0.75)",
  border: "1px solid transparent",
  position: "relative",
  transition: "all .25s",
  padding: "1.15rem 1.25rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: ".25rem",
  marginBottom: ".5rem",

  ".info": {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",

    strong: {
      fontSize: "1rem",
      color: "$white",
    },

    div: {
      display: "flex",
      alignItems: "center",
      gap: "0.912rem",

      "time, span": {
        display: "flex",
        alignItems: "center",
        gap: ".25rem",
        fontSize: ".75rem",
        color: "rgba(255, 255, 230, 0.65)",
      },
    },
  },

  "&:hover, &:focus": {
    strong: {
      color: "$white",
    },

    "svg, time": {
      color: "rgba(255, 255, 230, 0.85)",
    },
  },
});
