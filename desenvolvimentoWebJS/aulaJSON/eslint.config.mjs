import globals from 'globals';
import pluginJs from '@eslint/js';


/** @type {import('eslint').Linter.Config[]} */
export default {
  languageOptions: { globals: globals.browser },
  ...pluginJs.configs.recommended,
    rules : {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
  }
};