import React from "react";
import ReactContentLoader from "react-content-loader";

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

type ContentLoaderProps = {
  loading: boolean;
};

function GameTile({
  name,
  thumbnailUrl,
  type,
  releaseDate,
  tags,
  onGameTry,
}: GameTileProps) {
  console.log("TILE");
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

function ContentLoader({ loading }: ContentLoaderProps) {
  if (!loading) return null;

  return (
    <StyledTile>
      <StyledHeader url="" />
      <StyledContent>
        <ReactContentLoader
          speed={2}
          width={300}
          height={132}
          viewBox="0 0 300 132"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="8" y="5" rx="3" ry="3" width="168" height="34" />
          <rect x="8" y="55" rx="3" ry="3" width="178" height="18" />
          <rect x="8" y="80" rx="3" ry="3" width="178" height="18" />
          <rect x="8" y="110" rx="3" ry="3" width="178" height="18" />
          <rect x="208" y="55" rx="3" ry="3" width="103" height="29" />
          <rect x="208" y="92" rx="3" ry="3" width="103" height="29" />
        </ReactContentLoader>
      </StyledContent>
    </StyledTile>
  );
}

GameTile.ContentLoader = ContentLoader;

export default GameTile;
