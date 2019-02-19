const npmPackage = require('./package.json')

// noinspection WebpackConfigHighlighting
module.exports = {
  resolve: {
    root: __dirname,
    alias: npmPackage._moduleAliases || {},
    modules: npmPackage._moduleDirectories || [] // eg: ["node_modules", "node_modules_custom", "src"]
  }
}
