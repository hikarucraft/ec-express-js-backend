//@ts-check
import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
