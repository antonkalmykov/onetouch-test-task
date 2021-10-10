import { useState, useCallback } from "react";

import { GameList, GameData, SortKeys } from "../types";
import { sortGames } from "../helpers";

type CategorizedGames = {
  [key: string]: Array<GameData>;
};

const splitByCategory = (gamesList: GameList | []): CategorizedGames => {
  // @ts-ignore
  return gamesList.reduce((acc: CategorizedGames, game: GameData) => {
    if (game.type in acc) {
      return { ...acc, [game.type]: [...acc[game.type], game] };
    }

    return { ...acc, [game.type]: [game] };
  }, {});
};

const filterFeatured = (gamesList: GameList | []) =>
  gamesList.filter((game) => game.featured);

function useGamesByCategory() {
  const [data, setData] = useState<CategorizedGames | {}>({});

  const splitGamesAndSort = useCallback(
    (gamesList: GameList | [], sortBy: SortKeys) => {
      const sortedGames = sortGames(gamesList, sortBy);
      const gamesByType = splitByCategory(sortedGames);
      const featured = filterFeatured(sortedGames);

      if (featured.length) {
        return setData({ featured, ...gamesByType });
      }

      setData(gamesByType);
    },
    []
  );

  return { gamesByCategory: data, splitGamesAndSort };
}

export default useGamesByCategory;
