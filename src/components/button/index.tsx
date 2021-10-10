import React from "react";

import { StyledButton } from "./styled";

type ButtonProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ children, style = {}, onClick }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} style={style}>
      {children}
    </StyledButton>
  );
}

export default Button;
