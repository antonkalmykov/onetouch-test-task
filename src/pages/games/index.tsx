import React, { useState, useEffect, useLayoutEffect } from "react";

import PageWrapper from "../../components/page-wrapper";
import Select from "../../components/select";
import GameTile from "../../components/game-tile";
import Modal from "../../components/modal";
import Iframe from "../../components/iframe";
import GameCategory from "../../components/game-category";
import useFetch from "../../hooks/useFetch";
import useGamesByCategory from "../../hooks/useGamesByCategory";
import { StyledHeader, StyledPageTitle, StyledFiltersWrapper } from "./styled";
import {
  SortOption,
  SortKeys,
  GameCategory as GameCategoryType,
  GameList,
  AllFilterKeyEnum,
  FilterKeys,
  FeaturedEnum,
} from "../../types";
import { sortOptions, staticFilterOptions } from "./settings";
import { capitalize } from "../../helpers";
import Loader from "../../components/loader/loader";

const getGames = (
  sortedGames: {
    [key: string]: GameList;
  },
  category: GameCategoryType
) => {
  return sortedGames[category] ?? [];
};

const getCategories = (sortedGames: { [key: string]: GameList }) =>
  Object.keys(sortedGames) as Array<GameCategoryType>;

const getFilterOptions = (categories: Array<GameCategoryType>) =>
  categories
    .filter((category) => category !== FeaturedEnum.Featured)
    .reduce(
      (acc: Array<SortOption<FilterKeys>>, category: string) => [
        ...acc,
        {
          title: capitalize(category),
          key: category as FilterKeys,
        },
      ],
      [...staticFilterOptions]
    );

const countGames = (
  sortedGames: {
    [key: string]: GameList;
  },
  key: FilterKeys
) => {
  return sortedGames[key] ? `(${sortedGames[key].length})` : "";
};

function GamesPage() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [gameUrl, setGameUrl] = useState<string>("");
  const { data, loading, fetchData } = useFetch();
  const { gamesByCategory, splitGamesAndSort } = useGamesByCategory();
  const [selectedSortOption, setSelectedSortOption] = useState<
    SortOption<SortKeys>
  >(sortOptions[0]);
  const [selectedFilterOption, setSelectedFilterOption] = useState<
    SortOption<FilterKeys>
  >(staticFilterOptions[0]);

  useEffect(() => {
    fetchData(process.env.REACT_APP_SERVER_URL as string);
  }, [fetchData]);

  useEffect(() => {
    if (data.length) {
      splitGamesAndSort(data, selectedSortOption.key);
    }
  }, [data, splitGamesAndSort, selectedSortOption.key]);

  useLayoutEffect(() => {
    const body = document.getElementsByTagName("body");

    if (gameUrl) {
      body[0].style.overflow = "hidden";
    } else {
      body[0].style.overflow = "visible";
    }
  }, [gameUrl]);

  const onModalClose = () => {
    setModalOpen(false);
    setGameUrl("");
  };
  const onGameTry = (gameUrl: string) => () => {
    setGameUrl(gameUrl);
    setModalOpen(true);
  };
  const onSortSelect = (option: SortOption<SortKeys>) =>
    setSelectedSortOption(option);
  const onFilterSelect = (option: SortOption<FilterKeys>) =>
    setSelectedFilterOption(option);

  const canShowAllCategories =
    selectedFilterOption.key === AllFilterKeyEnum.All;
  const gameCategories = getCategories(gamesByCategory);

  return (
    <PageWrapper>
      <Loader loading={loading} />
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <Iframe src={gameUrl} />
      </Modal>
      <StyledHeader>
        <StyledPageTitle>Games</StyledPageTitle>
        <StyledFiltersWrapper>
          <Select
            style={{ marginRight: "12px" }}
            label="sort"
            selectedOption={selectedSortOption.title}
          >
            {sortOptions.map((option) => (
              <Select.Option<SortOption<SortKeys>>
                key={option.key}
                title={option.title}
                value={option}
                selected={option.key === selectedSortOption.key}
                onClick={onSortSelect}
              />
            ))}
          </Select>
          <Select label="game type" selectedOption={selectedFilterOption.title}>
            {getFilterOptions(gameCategories).map((option) => (
              <Select.Option<SortOption<FilterKeys>>
                key={option.key}
                title={`${option.title} ${countGames(
                  gamesByCategory,
                  option.key
                )}`}
                value={option}
                selected={option.key === selectedFilterOption.key}
                onClick={onFilterSelect}
              />
            ))}
          </Select>
        </StyledFiltersWrapper>
      </StyledHeader>
      {gameCategories.map((category) => (
        <GameCategory
          key={category}
          isShown={
            canShowAllCategories || selectedFilterOption.key === category
          }
        >
          <GameCategory.Title>{category}:</GameCategory.Title>
          <GameCategory.Content>
            {getGames(gamesByCategory, category).map((game) => (
              <GameTile
                key={game.name}
                name={game.name}
                thumbnailUrl={game.thumbnail}
                type={game.type}
                releaseDate={game.releaseDate}
                tags={game.tags}
                onGameTry={onGameTry(game.link)}
              />
            ))}
          </GameCategory.Content>
        </GameCategory>
      ))}
    </PageWrapper>
  );
}

export default GamesPage;
