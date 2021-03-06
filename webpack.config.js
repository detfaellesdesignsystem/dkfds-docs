//const AssetsPlugin = require("./plugins/assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const path = require('path');

module.exports = function (outputPath, prod) {
  return {
    entry: {
      "theme": ["./javascript/theme.js"],
      styleguide: ["./javascript/start.js", "./scss/styleguide.scss"],
      styleguide_display: ["./scss/styleguide-display.scss"],
      styleguide_borgerdk: ["./scss/styleguide-borgerdk.scss"],
      styleguide_virkdk: ["./scss/styleguide-virkdk.scss"],
      "requirements-tool": ["./javascript/requirements-tool.js"],
      "search": ["./javascript/search.js"]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules\/(?!(micromodal)\/).*/, /vendor/],
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env'],
              }
            }
          ]
        },
        {
          test: /\.(scss)/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                minimize: prod,
                sourceMap: true,
              }
            },
            {
              loader: "postcss-loader", // postcss loader so we can use autoprefixer
              options: {
                config: {
                  path: "postcss.config.js"
                },
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/"
          },
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "img/"
              }
            }
          ]
        },
        {
          test: /\.(svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "svg/"
              }
            }
          ]
        }
      ],
    },
    output: {
      path: path.resolve(__dirname, 'assets'), //dist folder is /assets
      publicPath: "/assets/", // written in front of urls in scss
      filename: "js/[name].js"
    },
    resolve: {
      modules: ["node_modules"]
    },
    plugins: [
      new CopyWebpackPlugin(
          [
            {//copies all content from /img to /assets/img
                from: "./img/**/*",
                to: "" // i assets
            }
          ]),
      new MiniCssExtractPlugin(
        {
          filename: 'style/[name].css',
          chunkFilename: 'style/[id].css'
        })
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /node_modules|vendor/,
            chunks: "initial",
            name: "vendor",
            priority: 10,
            enforce: true
          }
        }
      }
    }
  }
}
