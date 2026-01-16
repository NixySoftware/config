import i18next from 'eslint-plugin-i18next';
import { defineConfig } from 'eslint/config';

export default defineConfig(
    /// i18next
    // @ts-expect-error: `ConfigData<RulesRecord>` is not assignable to type `ConfigWithExtends`.
    i18next.configs['flat/recommended'],

    // Disable some rules for tests
    {
        files: ['**/*.test.*'],
        rules: {
            'i18next/no-literal-string': 'off',
        },
    },
);
