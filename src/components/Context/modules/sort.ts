import { computed } from "vue";
import { useResourceViewStore } from "@/stores/resourceView";

const ResourceViewStore = useResourceViewStore();
// 显示布局类型
const displayLayoutType = computed(() => ResourceViewStore.displayLayoutType);
const sort: NewContextItemType[] = [
  {
    // class: displayLayoutType.value === "grid" ? "context-selected" : "",
    key: "grid",
    label: "网格",
    event: () => {
      ResourceViewStore.$patch({
        displayLayoutType: "grid",
      });
    },
  },
  {
    // class: displayLayoutType.value === "waterfall" ? "context-selected" : "",
    key: "waterfall",
    label: "瀑布流",
    event: () => {
      ResourceViewStore.$patch({
        displayLayoutType: "waterfall",
      });
    },
  },
  {
    type: "divider",
  },
  {
    key: "aside-left",
    label: "左侧栏",
    event: () => {},
  },
  {
    key: "aside-right",
    label: "右侧栏",
    event: () => {},
  },
  {
    type: "divider",
  },
  {
    key: "refresh",
    label: "刷新",
    event: () => {},
  },
];

export default sort;
