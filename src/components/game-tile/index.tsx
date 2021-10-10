import React from "react";

import Button from "../button";
import {
  StyledTile,
  StyledHeader,
  StyledContent,
  StyledName,
  StyledDetails,
  StyledDetailsColumn,
  StyledDetailsDescription,
  StyledPlatformList,
  StyledPlatformItem,
  StyledTagsWrapper,
  StyledTag,
  StyledDetailsLabel,
} from "./styled";
import { GameTag, GameType } from "../../types";
import { platforms } from "./settings";
import { formatDate } from "../../helpers";

type GameTileProps = {
  name: string;
  thumbnailUrl: string;
  type: GameType;
  releaseDate: string;
  tags: Array<GameTag>;
  onGameTry: (event: React.MouseEvent) => void;
};

function GameTile({
  name,
  thumbnailUrl,
  type,
  releaseDate,
  tags,
  onGameTry,
}: GameTileProps) {
  return (
    <StyledTile>
      <StyledTagsWrapper>
        {tags.map((tag) => (
          <StyledTag key={tag} tag={tag}>
            {tag}
          </StyledTag>
        ))}
      </StyledTagsWrapper>
      <StyledHeader url={thumbnailUrl} />
      <StyledContent>
        <StyledName>{name}</StyledName>
        <StyledDetails>
          <StyledDetailsColumn>
            <StyledDetailsDescription>
              <StyledDetailsLabel>Game type: </StyledDetailsLabel>
              {type}
            </StyledDetailsDescription>
            <StyledDetailsDescription>
              <StyledDetailsLabel>Release: </StyledDetailsLabel>
              {formatDate(releaseDate)}
            </StyledDetailsDescription>
            <StyledPlatformList>
              {platforms.map((url) => (
                <StyledPlatformItem key={url} url={url} />
              ))}
            </StyledPlatformList>
          </StyledDetailsColumn>
          <StyledDetailsColumn style={{ alignItems: "flex-end" }}>
            <Button onClick={() => null} style={{ marginBottom: "8px" }}>
              View mode
            </Button>
            <Button onClick={onGameTry}>Try it</Button>
          </StyledDetailsColumn>
        </StyledDetails>
      </StyledContent>
    </StyledTile>
  );
}

export default GameTile;
