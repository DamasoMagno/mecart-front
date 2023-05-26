import { FileX } from "@phosphor-icons/react";
import { styled } from "../../config/stitches.config";
import * as ConfirmModal from "@radix-ui/react-alert-dialog";

export const Overlay = styled(ConfirmModal.Overlay, {
  background: "rgba(0, 0, 0, .5)",
  inset: 0,
  position: "fixed",
});

export const Content = styled(ConfirmModal.Content, {
  position: "fixed",
  background: "$gray700",
  top: "50%",
  left: "50%",
  width: "80vw",
  maxWidth: "400px",
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
    gap: "16px",

    p: {
      lineHeight: 1.8,
    },
  },

  ".actions": {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    alignItems: "center",

    span: {
      display: "block",
      height: "50%",
      bordeRadius: "8px",
      width: "2.5px",
      background: "rgba(255, 255, 255, .1)",
    },

    "button:last-child": {
      color: "#FE5C5C",
    },
  },
});
