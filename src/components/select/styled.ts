import styled from "styled-components";

type OptionProps = {
  selected?: boolean;
};

export const StyledSelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLabel = styled.p`
  margin: 0 8px 0 0;
  font-size: 12px;
  color: #555;
  text-transform: uppercase;

  @media only screen and (max-width: 380px) {
    display: none;
  }
`;

export const StyledSelect = styled.div`
  position: relative;
`;

export const StyledSelectedOption = styled.div`
  display: flex;
  margin: 0;
  min-width: 120px;
  padding: 10px 20px 10px 16px;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  color: #0037ae;
  border: 1px solid #0037ae;
  border-radius: 8px;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    color: #fff;
    border-color: #f4a600;
    background-color: #f4a600;
  }

  &:hover:after {
    border-top-color: #fff;
  }

  &:after {
    width: 0;
    height: 0;
    margin-left: 10px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #0037ae;
    transition: all 0.1s ease;
    content: "";
  }
`;

export const StyledOptionList = styled.ul`
  position: absolute;
  top: 46px;
  min-width: 100%;
  margin: 0;
  padding: 16px;
  list-style: none;
  background-color: #231f20;
  z-index: 10;

  &::before {
    position: absolute;
    top: -5px;
    right: 5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
    content: "";
  }
`;

export const StyledOption = styled.li<OptionProps>`
  margin-bottom: 12px;
  font-size: 10px;
  color: ${({ selected }) => (selected ? "#f4a600" : "#fff")};
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    color: #f4a600;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
