module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    ['react-native-reanimated/plugin', {relativeSourceLocation: true}],
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@redux': './src/redux',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@types': './src/types',
          '@utilities': './src/utilities',
        },
      },
    ],
  ],
};
