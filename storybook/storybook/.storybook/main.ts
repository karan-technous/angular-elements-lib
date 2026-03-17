module.exports = {
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {},
  },
  stories: ['../stories/**/*.stories.@(ts|js)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config: any) => {
    // Enable TypeScript in Storybook
    config.module.rules.push({
      test: /\.ts$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
      exclude: /node_modules/,
    });
    config.resolve.extensions.push('.ts');
    return config;
  },
};
