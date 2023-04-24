import * as Modal from "@radix-ui/react-dialog";
import { styled } from "../../../../config/stitches.config";

export const Overlay = styled(Modal.Overlay, {
  position: "fixed",
  inset: 0,
  width: "100%",
  background: "rgba(0, 0, 0, .75)",
});

export const Content = styled(Modal.Content, {
  padding: "0 1.25rem",
  borderRadius: "20px 20px 0 0",
  position: "fixed",
  background: "$black",
  bottom: 0,
  backgroundColor: "#202024",
  width: "100%",
  height: "60vh",

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "$white",
    marginTop: "6rem",
    fontSize: "1.25rem",
    fontWeight: "bold",

    button: {
      border: 0,
      color: "#7C7C8A",
      background: "transparent",
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

    button: {
      marginTop: "2.25rem",
    },
  },
});
