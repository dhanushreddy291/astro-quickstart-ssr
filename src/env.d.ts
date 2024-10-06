/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly NEON_DATABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
