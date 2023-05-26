import { styled } from "../../../config/stitches.config";

export const Content = styled("main", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "900px",
  margin: "2rem auto",
  padding: "0 1rem",
  position: "relative",

  ".find": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",

    "> div": {
      flex: 1,
    },

    button: {
      height: "3rem",
      width: "50px",
    },
  },

  ".products": {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: ".25rem",

    ".productQuantity": {
      color: "$white",
      marginBottom: ".75rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      span: {
        fontSize: ".875rem",
        color: "rgba(255, 255, 255, .75)",
      },
    },
  },
});
