import { Link } from "react-router-dom";
import { styled } from "../../config/stitches.config";

export const Container = styled(Link, {
  background: "#121214",
  borderRadius: 5,
  textDecoration: "none",
  height: "5rem",
  color: "$white",
  border: "1px solid transparent",
  position: "relative",
  transition: "all .25s",
  padding: "1.15rem 1.25rem",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: ".25rem",

  "&:hover, &:focus": {
    border: "1px solid $green700",
    outline: "$green700",

    "svg, strong, time": {
      color: "$green700",
    },
  },

  strong: {
    fontSize: "1rem",
  },

  time: {
    marginTop: ".5rem",
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontSize: ".75rem",
    color: "rgba(255, 255, 255, .5)",
  },
});
