import { keyframes, styled } from "../../config/stitches.config";

export const alternateSizeIcon = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.1)" },
});

export const Container = styled("div", {
  height: "100vh",
  color: "$white",
  display: "flex",
  alignItems: "flex-end",
});

export const Content = styled("div", {
  height: "65vh",
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto 3rem",
  padding: "0 1.125rem",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "space-between",

  ".logo": {
    animation: `${alternateSizeIcon} 1.5s infinite`,
    fontSize: "5rem",
  },

  ".description": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",

    strong: {
      fontSize: "2rem",

      span: {
        color: "$green700",
      },
    },

    p: {
      lineHeight: 1.7,
      maxWidth: "200px",
      fontSize: "1rem",
    },
  },

  ".signInMethods": {
    display: "flex",
    flexDirection: "column",
    gap: ".75rem",
    width: "100%",
  },
});
