import { styled } from "../../../../config/stitches.config";

export const NavBar = styled("footer", {
  position: "fixed",
  width: "100%",
  bottom: 0,
  background: "#29292E",
  display: "flex",

  ".actions": {
    width: "100%",
    background: "transparent",
    border: 0,
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: ".5rem",
    cursor: "pointer",
    height: "3.5rem",

    "&:first-child": {
      color: "$green700",
    },

    "&:last-child": {
      color: "#FC4C4C",
    },
  },

  ".newCart": {
    position: "absolute",
    top: "-50%",
    right: "50%",
    transform: "translate(50%)",
  },
});
