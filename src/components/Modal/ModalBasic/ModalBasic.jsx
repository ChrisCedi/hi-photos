import React from "react";
import { useStyles } from "./ModalBasicStyles";
import { Modal } from "semantic-ui-react";

export const ModalBasic = (props) => {
  const { open, setOpen, title, children } = props;
  const classes = useStyles();

  return (
    <Modal open={open} onClose={setOpen} className="modal-basic">
      {title && <Modal.Header>{title}</Modal.Header>}

      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};
