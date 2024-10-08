import type { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { PAGE_NOT_FOUND_ROUTE } from "./basic";
import { createProgressGuard } from "./guard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modules: Record<string, any> = import.meta.glob("./modules/**/*.ts", {
  eager: true,
});
const routeModuleList: RouteRecordRaw[] = [PAGE_NOT_FOUND_ROUTE];
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// app router
export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: routeModuleList,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);

  createProgressGuard(router);
}
