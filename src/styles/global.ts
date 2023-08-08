import { globalCss } from "../config/stitches.config";

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },

  body: {
    background: "#202024",
  },

  "body, input, textarea, button": {
    fontWeight: "400",
    fontFamily: "$body",
    fontSize: "1rem"
  },

  ".no-content": {
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255, 255, 255, .35)",
    gap: "1rem",

    p: {
      width: "180px",
      textAlign: "center",
      lineHeight: 1.7,
      fontSize: "1rem",
    },
  },

  ".alertError": {
    background: "#FC4C4C",
    color: "#FFF",
    display: "flex",
    alignItems: "center",
  },

  ".alertSuccess": {
    background: "#00B37E",
    color: "#FFF",
    display: "flex",
    alignItems: "center",
  },
});
