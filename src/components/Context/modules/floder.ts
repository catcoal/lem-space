const folder: NewContextItemType[] = [
  {
    key: "folder-new",
    label: "新建文件夹",
    event: () => {},
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
];

export default folder;
