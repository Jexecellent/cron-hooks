
export default {
  entry: '/src/index',
  doc: {
    themeConfig: { mode: 'light' },
    base: '/cron-hooks/',
  },
  esm: 'rollup',
  cjs: 'rollup',
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }],
  ],
  extractCSS: true,
}
