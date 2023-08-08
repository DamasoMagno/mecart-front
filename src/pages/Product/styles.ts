import { Link } from "react-router-dom";
import { styled } from "../../config/stitches.config";

export const Content = styled("form", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "720px",
  margin: "2rem auto 0",
  gap: ".75rem",
  padding: "0 1rem",

  ".total": {
    display: "flex",
    alignItems: "center",
    marginTop: "1.125rem",
    fontSize: "1.25rem",
    color: "$white",
    justifyContent: "space-between",
  },

  footer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2rem",
  },
});

export const Navigation = styled(Link, {
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
  textDecoration: "none",

  svg: {
    fontSize: "1.25rem",
    color: "#FFF",
  },

  strong: {
    fontSize: "1.25rem",
    color: "$white",

    span: {
      color: "$green700",
    },
  },
});

export const ProductNameContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  position: "relative",

  label: {
    color: "rgba(255, 255, 255, .5)",
    fontSize: ".85rem",
  },
});

