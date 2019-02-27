module.exports = {
  target: 'serverless',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    let {node} = config

    node = {
      fs: 'empty',
    }

    return config
  },
}
