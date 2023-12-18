import {
  Squares2X2Icon,
  CodeBracketIcon,
  ExclamationCircleIcon,
} from "@heroicons/vue/24/outline";
import { VNode, h, defineAsyncComponent, Component } from "vue";

export interface Menu {
  name: string;
  title: string;
  icon: VNode;
  component?: Component;
}

export const menus: Menu[] = [
  {
    name: "preferences",
    title: "偏好设置",
    icon: h(Squares2X2Icon),
    component: defineAsyncComponent(
      () => import("@/views/settings/preferences/index.vue")
    ),
  },
  {
    name: "about",
    title: "关于",
    icon: h(ExclamationCircleIcon),
  },
  {
    name: "developer",
    title: "开发者选项",
    icon: h(CodeBracketIcon),
    component: defineAsyncComponent(
      () => import("@/views/settings/developer/index.vue")
    ),
  },
];
