import { ItemType } from "ant-design-vue";
import { NewFolder } from "./context-event";

export type ContextKey = "Folder" | "File";
export interface EventHandler {
  event: (data: any) => void;
}
export const context: Record<ContextKey, (ItemType | EventHandler)[]> = {
  Folder: [
    {
      key: "folder-new",
      label: "新建文件夹",
      event: NewFolder,
    },
    {
      key: "folder-new-child",
      label: "新建子文件夹",
      event: () => {},
    },
    {
      key: "folder-rename",
      label: "重命名",
      event: () => {},
    },
    {
      type: "divider",
    },
    {
      danger: true,
      key: "folder-delete",
      label: "删除文件夹",
      event: () => {},
    },
  ],
  File: [],
};
