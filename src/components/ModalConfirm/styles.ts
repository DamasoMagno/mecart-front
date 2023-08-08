import { styled } from "../../config/stitches.config";
import * as ConfirmModal from "@radix-ui/react-alert-dialog";

export const Overlay = styled(ConfirmModal.Overlay, {
  background: "rgba(0, 0, 0, .85)",
  inset: 0,
  position: "fixed",
});

export const Content = styled(ConfirmModal.Content, {
  position: "fixed",
  background: "$gray700",
  top: "50%",
  left: "50%",
  width: "80vw",
  maxWidth: "350px",
  height: "300px",
  transform: "translate(-50%, -50%)",
  color: "$white",
  padding: "3rem",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  justifyContent: "space-between",

  ".description": {
    display: "flex",
    flexDirection: "column",
    gap: "1.125rem",

    p: {
      lineHeight: 1.5,
    },
  },

  ".actions": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    "button:last-child": {
      color: "#FE5C5C",
    },
  },
});
