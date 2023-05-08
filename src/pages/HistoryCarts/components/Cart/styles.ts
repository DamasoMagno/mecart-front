import { Link } from "react-router-dom";
import { styled } from "../../../../config/stitches.config";

export const Container = styled(Link, {
  background: "#121214",
  borderRadius: "4px",
  textDecoration: "none",
  overflow: "hidden",
  height: "5rem",
  border: "1px solid transparent",
  position: "relative",
  padding: "1.15rem 1.25rem",
  marginBottom: ".5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: ".25rem",

  ".info": {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",

    strong: {
      fontSize: "1rem",
      color: "rgba(255, 255, 255, .75)",
      transition: "all .25s",
    },

    div: {
      display: "flex",
      alignItems: "center",
      gap: "0.912rem",

      "svg, time, span": {
        display: "flex",
        alignItems: "center",
        gap: ".25rem",
        fontSize: ".75rem",
        color: "rgba(255, 255, 255, .65)",
       transition: "all .25s",
      },
    },
  },

  "> svg": {
    color: "#FFF",
  },

  "&:hover, &:focus": {
    strong: {
      color: "$white",
    },

    "div": {
      "svg, time, span": {
        color: "rgba(255, 255, 255, .85)",
      },
    }
  },
});
