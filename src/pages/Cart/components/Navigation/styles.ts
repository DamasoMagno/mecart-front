import { styled } from "../../../../config/stitches.config";

export const NavBar = styled("footer", {
  position: "fixed",
  width: "100%",
  bottom: 0,
  background: "#29292E",
  display: "flex",

  "button:not(.newCart)": {
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
    transition: "background .25s",

    "&.finish": {
      color: "$green700",

      "&:hover, &:focus": {
        background: "rgba(0, 135, 95, .1)",
      },
    },

    "&.remove": {
      color: "#FC4C4C",

      "&:hover, &:focus": {
        background: "rgba(252, 75, 75, .1)",
      },
    },
  },

  ".newCart": {
    position: "absolute",
    top: "-50%",
    right: "50%",
    transform: "translate(50%)",
  },
});
