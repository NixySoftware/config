import react from '@nixysoftware/eslint-config-react';
import { defineConfig } from 'eslint/config';

export default defineConfig(
    {
        ignores: ['.react-router/', 'build/'],
    },

    react,
);
