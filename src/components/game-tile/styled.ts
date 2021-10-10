import styled from "styled-components";

import { GameTag } from "../../types";

type TileHeaderProps = {
  url: string;
};

type PlatformItemProps = {
  url: string;
};

type TagProps = {
  tag: GameTag;
};

const tagColorMap = {
  new: "#00bcf4",
  "coming soon": "#780f74",
  popular: "#f4a600",
};

export const StyledTile = styled.div`
  position: relative;
  display: flex;
  height: 396px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  transition: transform 0.2s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

export const StyledHeader = styled.div<TileHeaderProps>`
  height: 60%;
  background: #ecebeb url("${({ url }) => url}") 50% no-repeat;
  background-size: cover;
`;

export const StyledContent = styled.div`
  display: flex;
  padding: 22px 28px 32px;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid #0037ae;
  border-top: 0;
  border-radius: 0 0 10px 10px;
`;

export const StyledName = styled.h1`
  width: fit-content;
  margin-top: 0;
  margin-bottom: 14px;
  padding-bottom: 8px;
  font-size: 24px;
  font-weight: 600;
  color: #0037ae;
  font-family: "DIN Condensed", monospace;
  text-transform: uppercase;
  border-bottom: 1px solid #0037ae;
`;

export const StyledDetails = styled.div`
  display: flex;
`;

export const StyledDetailsColumn = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;

export const StyledDetailsDescription = styled.p`
  margin: 0 0 5px;
  font-size: 12px;
  color: #555;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const StyledDetailsLabel = styled.span`
  @media only screen and (max-width: 380px) {
    display: none;
  }
`;

export const StyledPlatformList = styled.ul`
  display: flex;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
`;

export const StyledPlatformItem = styled.li<PlatformItemProps>`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  background: transparent url("${({ url }) => url}") 50% no-repeat;

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledTagsWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
`;

export const StyledTag = styled.span<TagProps>`
  display: inline-block;
  margin-right: 6px;
  padding: 12px;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${({ tag }) => tagColorMap[tag]};
  border-radius: 5px;

  &:last-child {
    margin-right: 0;
  }
`;
