import { AllFilterKeyEnum, SortKeysEnum } from "../../types";

export const sortOptions = [
  {
    title: "Title (a-z)",
    key: SortKeysEnum.AZ,
  },
  {
    title: "Title (z-a)",
    key: SortKeysEnum.ZA,
  },
  {
    title: "Date (newest)",
    key: SortKeysEnum.NEWEST,
  },
  {
    title: "Date (oldest)",
    key: SortKeysEnum.OLDEST,
  },
];

export const staticFilterOptions = [
  {
    title: "All games",
    key: AllFilterKeyEnum.All,
  },
];
