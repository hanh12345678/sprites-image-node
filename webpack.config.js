const path = require('path');
const SpritesmithPlugin = require('webpack-spritesmith');
const spritesPlugin = new SpritesmithPlugin({
  src: {
    cwd: path.resolve(__dirname, 'images'),
    glob: '*.png'
  },
  target: {
    image: path.resolve(
      __dirname, 'dist/sprites.png'
    ),
    css: [[path.resolve(__dirname, 'dist/sprites.css'), { format: 'css' }]]
  },
  retina: '@2x',
  apiOptions: {
    cssImageRef: '/public/next-desktop/images/car-detail-sprites.png?v=1'
  }
})

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [spritesPlugin]
};