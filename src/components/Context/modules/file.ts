const file: NewContextItemType[] = [
  {
    key: "file-open",
    label: "打开文件",
    event: () => {},
  },
  {
    type: "divider",
  },
  {
    key: "file-copy",
    label: "复制文件",
    event: () => {},
  },
  {
    key: "file-copy-path",
    label: "复制文件路径",
    event: () => {},
  },
  {
    key: "file-rename",
    label: "重命名",
    event: () => {},
  },
  {
    type: "divider",
  },
  {
    danger: true,
    key: "file-to-recycle",
    label: "丢进回收站",
    event: () => {},
  },
];

export default file;
