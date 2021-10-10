export enum FeaturedEnum {
  Featured = "featured",
}

export type GameCategory = "featured" | "slot games" | "arcade" | "table games";

export enum AllFilterKeyEnum {
  All = "all",
}

export type FilterKeys = "all" | "slot games" | "arcade" | "table games";

export enum SortKeysEnum {
  AZ = "a-z",
  ZA = "z-a",
  NEWEST = "newest",
  OLDEST = "oldest",
}

export type SortKeys = "a-z" | "z-a" | "newest" | "oldest";

export type GameTag = "new" | "popular" | "coming soon";

export type GameType = "slot games" | "arcade" | "table games";

export type GameData = {
  name: string;
  description: string;
  type: GameType;
  releaseDate: string;
  thumbnail: string;
  link: string;
  tags: Array<GameTag>;
  featured: boolean;
};

export type GameList = Array<GameData>;

export type SortOption<T> = {
  title: string;
  key: T;
};
