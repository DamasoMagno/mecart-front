import * as Modal from "@radix-ui/react-dialog";
import { styled } from "../../config/stitches.config";

export const Overlay = styled(Modal.Overlay, {
  position: "fixed",
  inset: 0,
  width: "100%",
  background: "rgba(0, 0, 0, .75)",
});

export const Content = styled(Modal.Content, {
  borderRadius: "20px 20px 0 0",
  position: "fixed",
  background: "$black",
  bottom: 0,
  backgroundColor: "#202024",
  width: "100%",
  padding: "5rem 1rem 2rem",

  "@lg": {
    bottom: "50%",
    right: "50%",
    transform: "translate(50%, 50%)",
    width: "400px",
    borderRadius: "8px",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "$white",
    fontSize: "1.25rem",
    fontWeight: "bold",

    button: {
      border: 0,
      color: "#7C7C8A",
      background: "transparent",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.5rem",
    },
  },

  form: {
    marginTop: "2.25rem",
    display: "flex",
    flexDirection: "column",
    gap: ".75rem",
    width: "100%",

    button: {
      marginTop: "2.25rem",
      width: "100%",
    },

    ".fields": {
      display: "flex",
      flexDirection: "column",
      marginBottom: ".5rem",
      flex: 1,

      label: {
        marginBottom: ".5rem",
        color: "rgba(255, 255, 255, .5)",
        fontSize: ".85rem",
      },
    },
  },
});
