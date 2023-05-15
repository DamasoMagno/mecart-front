import { styled } from "@stitches/react";
import { SwiperSlide } from "swiper/react";

export const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  margin: "2rem auto",
  maxWidth: "900px",

  ".resume": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    zIndex: 0,
    paddingLeft: "1rem",
  },

  ".products": {
    margin: "2rem 0 3rem",
    display: "flex",
    flexDirection: "column",
    padding: "0 1rem",

    ".quantityProducts": {
      color: "#E1E1E6",
      marginBottom: "1rem",
      fontWeight: "bold",
      fontSize: "1.125rem",

      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      span: {
        fontSize: "1rem",
      },
    },
  },
});

export const Resume = styled(SwiperSlide, {
  background: "$green700",
  padding: "1.5rem 1rem",
  borderRadius: ".5rem",
  color: "$white",
  display: "flex",
  zIndex: 0,
  flexDirection: "column",

  header: {
    fontSize: ".875rem",
    color: "rgba(255, 255, 255, .85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  strong: {
    marginTop: ".75rem",
    display: "block",
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: 1.7,
  },

  variants: {
    completed: {
      true: {
        background: "#FE5C5C",
      },
    },
  },
});

export const Navigation = styled("footer", {
  position: "fixed",
  width: "100%",
  bottom: 0,
  background: "#29292E",
  display: "flex",
  alignItems: "center",

  "button:not(.newCart)": {
    width: "100%",
    background: "transparent",
    border: 0,
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
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
    margin: ".5rem",
    maxWidth: "50px",
    height: "50px",
  }
});
