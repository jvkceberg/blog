import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import eslintPluginReact from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    ignores: ["dist/", ".astro/", "node_modules/", "tailwind.config.mjs"]
  },
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{ts,tsx,astro}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react': eslintPluginReact,
    },
    rules: {
      ...tsPlugin.configs['recommended-requiring-type-checking'].rules,
      ...tsPlugin.configs['strict'].rules,
      '@typescript-eslint/no-explicit-any': "error",
      '@typescript-eslint/consistent-type-imports': "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    }
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      }
    }
  }
]