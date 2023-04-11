import { keyframes, styled } from "../../config/stitches.config";

export const alternateSizeIcon = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.1)" },
});

export const Container = styled("div", {
  height: "100vh",
  textAlign: "center",
  color: "$white",
  display: "flex",
  alignItems: "flex-end",
});

export const Content = styled("div", {
  height: "65vh",
  width: "100%",
  maxWidth: "600px",
  display: "flex",
  margin: "0 auto 3rem",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",

  ".logo": {
    animation: `${alternateSizeIcon} 1.5s infinite`,
    fontSize: "5rem",
    color: "rgba(0, 135, 95, 0.6)",
  },

  ".description": {
    width: "100%",
    padding: "0 1.125rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    strong: {
      fontSize: "2rem",

      span: {
        color: "$green700",
      },
    },

    p: {
      lineHeight: 1.7,
      margin: "1rem 0 4rem",
      maxWidth: "200px",
      fontSize: "1rem",
      display: "block",
      fontFamily: "$body",
    },

    ".loginOptions": {
      display: "flex",
      flexDirection: "column",
      gap: ".75rem",
      width: "100%",
    },
  },
});
