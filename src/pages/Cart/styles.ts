import { styled } from "@stitches/react";
import { SwiperSlide } from "swiper/react";

export const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  margin: "2rem auto",
  maxWidth: "1200px",

  ".resume": {
    width: "100%",
    padding: "0 0 0 1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },

  ".products": {
    marginTop: "2rem",
    padding: "0 1.5rem 2rem",

    display: "flex",
    flexDirection: "column",

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
  display: "flex",
  flexDirection: "column",
  minWidth: "250px",
  color: "$white",

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
