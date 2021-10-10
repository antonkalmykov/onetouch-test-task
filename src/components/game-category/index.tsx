import React from "react";

import { StyledCategory, StyledTitle, StyledContent } from "./styled";

type GameCategoryProps = {
  isShown: boolean;
  children: React.ReactNode;
};

type TitleProps = {
  children: React.ReactNode;
};

type ContentProps = {
  children: Array<React.ReactNode>;
};

function GameCategory({ isShown, children }: GameCategoryProps) {
  if (!isShown) return null;

  return <StyledCategory>{children}</StyledCategory>;
}

function Title({ children }: TitleProps) {
  return <StyledTitle>{children}</StyledTitle>;
}

function Content({ children }: ContentProps) {
  return <StyledContent>{children}</StyledContent>;
}

GameCategory.Title = Title;

GameCategory.Content = Content;

export default GameCategory;
