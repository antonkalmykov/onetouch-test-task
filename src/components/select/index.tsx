import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import {
  StyledSelectWrapper,
  StyledLabel,
  StyledSelect,
  StyledSelectedOption,
  StyledOptionList,
  StyledOption,
} from "./styled";

type SelectProps = {
  label: string;
  selectedOption: string;
  style?: React.CSSProperties;
  children: Array<React.ReactNode>;
};

type OptionProps<T> = {
  title: string;
  value: T;
  selected: boolean;
  onClick: (option: T) => void;
};

function Select({ label, selectedOption, style, children }: SelectProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const onClick = () => setOpen((prev) => !prev);
  const onOutsideClick = () => setOpen(false);

  return (
    <StyledSelectWrapper style={style}>
      <StyledLabel>{label}:</StyledLabel>
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <StyledSelect onClick={onClick}>
          <StyledSelectedOption>{selectedOption}</StyledSelectedOption>
          {isOpen ? <StyledOptionList>{children}</StyledOptionList> : null}
        </StyledSelect>
      </OutsideClickHandler>
    </StyledSelectWrapper>
  );
}

function Option<T>({ title, value, selected, onClick }: OptionProps<T>) {
  const onOptionClick = () => onClick(value);

  return (
    <StyledOption selected={selected} onClick={onOptionClick}>
      {title}
    </StyledOption>
  );
}

Select.Option = Option;

export default Select;
