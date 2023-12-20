interface Tool {
  name: ToolType;
  label: string;
  icon: VNode;
}

type ToolType =
  | "zoom-1"
  | "fullscreen"
  | "rotate-right"
  | "flip-h"
  | "flip-v"
  | "reset";
type PreviewType = "image" | "ppt";
type Tools = {
  [key in PreviewType]: Tool[];
};
