import { debounce } from "lodash";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLayoutStore = defineStore("layout", () => {
  const layoutAsideLeftWidth = ref(250); // 左侧宽度
  const layoutAsideRightWidth = ref(250); // 右侧宽度
  const windowInnerWidth = ref(window.innerWidth);
  const layoutContainerWidth = computed(
    () =>
      windowInnerWidth.value -
      layoutAsideLeftWidth.value -
      layoutAsideRightWidth.value
  ); // 中间主内容宽度

  // 窗口尺寸变化
  const handleResize = debounce(() => {
    windowInnerWidth.value = window.innerWidth;
  }, 50);

  window.addEventListener("resize", handleResize);

  return {
    layoutAsideLeftWidth,
    layoutAsideRightWidth,
    layoutContainerWidth,
  };
});
