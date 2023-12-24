declare type ContextKey = "Folder" | "File" | "Sort";

declare interface EventHandler {
  event: (data: any) => void;
}

declare type NewContextItemType =
  | import("ant-design-vue").ItemType
  | EventHandler;
