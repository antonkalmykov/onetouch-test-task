import styled from "styled-components";

import { ReactComponent as CloseIcon } from "../../assets/images/icon-close.svg";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

export const StyledCloseButton = styled(CloseIcon)`
  position: absolute;
  height: 42px;
  width: 42px;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  height: 75%;
  width: 95%;
  justify-content: center;
  align-items: center;
`;
