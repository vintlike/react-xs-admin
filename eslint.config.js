import jsxiaosi from '@jsxiaosi/eslint-config';

export default jsxiaosi({
  typescript: true,
  react: true,
  // prettier: {
  //   usePrettierrc: true,
  // },
  rules: {
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react-refresh/only-export-components': 'off',
    '@typescript-eslint/consistent-type-imports': ['warn'],
    // 关闭定义变量未使用提示/报错
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prefer-spread': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    'no-var': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-constant-condition': 'warn',
    'no-unsafe-finally': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'prefer-const': 'off',
    'ts/no-unused-vars': 'off',
  },
});
