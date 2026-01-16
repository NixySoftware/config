import next from '@next/eslint-plugin-next';
import react from '@nixysoftware/eslint-config-react';
import { defineConfig } from 'eslint/config';

export default defineConfig(
    {
        ignores: ['.next/', 'build/', 'out/', 'next-env.d.ts'],
    },

    react,

    next.configs['core-web-vitals'],
);
