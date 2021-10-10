import React from "react";

import { StyledModal, StyledContent, StyledCloseButton } from "./styled";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: (event: React.MouseEvent) => void;
};

function Modal({ isOpen, children, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <StyledModal onClick={onClose}>
      <StyledCloseButton onClick={onClose} />
      <StyledContent>{children}</StyledContent>
    </StyledModal>
  );
}

export default Modal;
