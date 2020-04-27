const path = require('path');

module.exports = {
  stories: ["../src/**/*.stories.(ts|tsx|js|jsx|mdx)"],
  rules: [
    {
      test: /\.css/,
      loaders: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.tsx?$/,
      include: path.resolve(__dirname, '../src'),
      loader: 'react-docgen-typescript-loader',
    }
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],
};
