import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import testingLibrary from 'eslint-plugin-testing-library';
import { defineConfig } from 'eslint/config';

export default defineConfig(
    {
        ignores: ['**/*.snap'],
    },

    // React
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    {
        settings: {
            react: {
                version: 'detect',
            },
            formComponents: ['Form'],
            linkComponents: [
                { name: 'Link', linkAttribute: 'to' },
                { name: 'NavLink', linkAttribute: 'to' },
            ],
        },
    },

    // React Hooks
    reactHooks.configs.flat.recommended,

    // JSX Accessibility
    jsxA11y.flatConfigs.recommended,
    {
        rules: {
            // TODO: Consider introducing an accessibility setting for autofocus.
            'jsx-a11y/no-autofocus': 'off',
        },
    },

    // Testing Library
    {
        files: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/*.test.{js,jsx,ts,tsx}'],
        ...testingLibrary.configs['flat/react'],
    },
    {
        files: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/*.test.{js,jsx,ts,tsx}'],
        rules: {
            'testing-library/prefer-explicit-assert': 'error',
            'testing-library/prefer-user-event': 'error',
        },
    },
);
