import styled, { css } from "styled-components";

const defaultStyle = css`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  ${defaultStyle}
  min-width: 100px;
  padding: 11px 18px 9px;
  font-size: 10px;
  font-weight: 600;
  color: #0037ae;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid #0037ae;
  border-radius: 7px;
  transition: all 0.1s ease;

  &:hover {
    color: #fff;
    border-color: #f4a600;
    background-color: #f4a600;
  }
`;
