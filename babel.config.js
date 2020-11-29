module.exports = {
  presets: [['@babel/env', { modules: false }], '@babel/react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'babel-plugin-import',
      {
        libraryName: 'szfe-tools',
        camel2DashComponentName: false,
      },
    ],
    './babel',
  ],
}
