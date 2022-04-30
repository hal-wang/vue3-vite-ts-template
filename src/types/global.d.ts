interface ViteEnv {
  readonly VITE_GLOB_API_PROXY_PREFIX: string;
  readonly VITE_GLOB_API_URL: string;
  readonly VITE_GLOB_PROXY_API_URL: string;
  readonly VITE_PORT: number;
  readonly VITE_GLOB_APP_TITLE: string;
  readonly VITE_PUBLIC_PATH: string;
  readonly VITE_DROP_CONSOLE: boolean;
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
