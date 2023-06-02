module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // eslint defaults
    'no-useless-concat': 'warn',
    'prefer-template': 'warn',
    quotes: 'off', // covered by prettier

    // typescript
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        // used for omit object props (rest spread)
        ignoreRestSiblings: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.gql', '*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      parserOptions: {
        skipGraphQLConfig: true,
        schema: './tmp/schema.graphql',
        operations: ['./src/domain/**/*.{ts,tsx,js,jsx}'],
      },
      rules: {
        '@graphql-eslint/require-id-when-available': 'error',
        '@graphql-eslint/no-scalar-result-type-on-mutation': 'error',
      },
    },
    {
      files: ['*.js', '*.tsx', '*.ts'],
      processor: '@graphql-eslint/graphql',
      parserOptions: {
        skipGraphQLConfig: true,
      },
    },
  ],
  env: {
    es6: true,
    browser: true,
  },
};
