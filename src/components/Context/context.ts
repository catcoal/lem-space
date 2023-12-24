import Folder from "./modules/floder";
import File from "./modules/file";
import Sort from "./modules/sort";

export const useContext = (): Record<ContextKey, NewContextItemType[]> => {
  return {
    Folder,
    File,
    Sort,
  };
};
