import { RouteRecordRaw } from "vue-router";

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: "/:path(.*)*",
  name: "PageNotFound",
  component: () => import("/@/views/error/Page404.vue"),
  meta: {
    title: "404 Not Found",
  },
};
