import { RouteRecordRaw } from "vue-router";

const home: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../../views/home/HomePage.vue"),
    meta: {
      title: "主页",
    },
  },
  {
    path: "/second",
    name: "SecondPage",
    component: () => import("/@/views/home/SecondPage.vue"),
    meta: {
      title: "第二个页面",
    },
  },
];

export default home;
