import { GameData, GameList, SortKeys, SortKeysEnum } from "../types";

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const sortAZ = (a: GameData, b: GameData) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
};

const sortZA = (a: GameData, b: GameData) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA > nameB) return -1;
  if (nameA < nameB) return 1;
  return 0;
};

const sortNewest = (a: GameData, b: GameData) => {
  const dateA = new Date(a.releaseDate);
  const dateB = new Date(b.releaseDate);

  return dateB.getTime() - dateA.getTime();
};

const sortOldest = (a: GameData, b: GameData) => {
  const dateA = new Date(a.releaseDate);
  const dateB = new Date(b.releaseDate);

  return dateA.getTime() - dateB.getTime();
};

export const sortGames = (gamesList: GameList | [], sortBy: SortKeys) => {
  switch (sortBy) {
    case SortKeysEnum.AZ: {
      return gamesList.sort(sortAZ);
    }
    case SortKeysEnum.ZA: {
      return gamesList.sort(sortZA);
    }
    case SortKeysEnum.NEWEST: {
      return gamesList.sort(sortNewest);
    }
    case SortKeysEnum.OLDEST: {
      return gamesList.sort(sortOldest);
    }
    default: {
      return gamesList;
    }
  }
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const rawDay = date.getDate();
  const day = rawDay < 10 ? `0${rawDay}` : rawDay;
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
