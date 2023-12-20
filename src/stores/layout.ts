import { debounce } from "lodash";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLayoutStore = defineStore("layout", () => {
  const layoutAsideLeftWidth = ref(250); // 左侧宽度
  const layoutAsideRightWidth = ref(250); // 右侧宽度
  const layoutAsideLeftVisible = ref(true); // 左侧显示状态
  const layoutAsideRightVisible = ref(true); // 右侧显示状态
  const windowInnerWidth = ref(window.innerWidth); // 总窗口大小
  const layoutContainerWidth = computed(
    () =>
      windowInnerWidth.value -
      layoutAsideLeftWidth.value -
      layoutAsideRightWidth.value
  ); // 中间主内容宽度

  // 隐藏侧边栏
  const HidenAside = (type?: "left" | "right") => {
    if (type === "left") {
      layoutAsideLeftVisible.value = false;
    } else if (type === "right") {
      layoutAsideRightVisible.value = false;
    } else {
      layoutAsideLeftVisible.value = false;
      layoutAsideRightVisible.value = false;
    }
  };

  // 显示侧边栏
  const ShowAside = (type?: "left" | "right") => {
    if (type === "left") {
      layoutAsideLeftVisible.value = true;
    } else if (type === "right") {
      layoutAsideRightVisible.value = true;
    } else {
      layoutAsideLeftVisible.value = true;
      layoutAsideRightVisible.value = true;
    }
  };

  // 窗口尺寸变化
  const handleResize = debounce(() => {
    windowInnerWidth.value = window.innerWidth;
  }, 50);
  window.addEventListener("resize", handleResize);

  return {
    layoutAsideLeftVisible,
    layoutAsideRightVisible,
    layoutAsideLeftWidth,
    layoutAsideRightWidth,
    layoutContainerWidth,
    HidenAside,
    ShowAside,
  };
});
