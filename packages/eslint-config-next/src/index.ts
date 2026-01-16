import next from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';

export default defineConfig(
    {
        ignores: ['.next/', 'build/', 'out/', 'next-env.d.ts'],
    },

    next.configs['core-web-vitals'],
);
