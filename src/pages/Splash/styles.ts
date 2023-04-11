import { styled, keyframes } from "../../config/stitches.config";

export const alternateSizeIcon = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.05)" },
});

export const Container = styled("div", {
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,

  ".logo": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: ".5rem",
    animation: `${alternateSizeIcon} 1.5s infinite`,

    strong: {
      color: "$white",
      fontSize: "2.5rem",

      span: {
        color: "$green700",
      },
    },
  },
});
