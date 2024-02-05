//const AssetsPlugin = require("./plugins/assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
//const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const path = require('path');

console.log("[" + String(new Date().getHours()).padStart(2, '0') + 
                ":" + String(new Date().getMinutes()).padStart(2, '0') + 
                ":" + String(new Date().getSeconds()).padStart(2, '0') + "] " + 
                "Running webpack...\n");

module.exports = function (outputPath, prod) {
  return {
    entry: {
      "theme": ["./javascript/theme.js"],
      styleguide: ["./javascript/start.js", "./scss/styleguide.scss"],
      styleguide_display: ["./scss/styleguide-display.scss"],
      styleguide_borgerdk: ["./scss/styleguide-borgerdk.scss"],
      styleguide_virkdk: ["./scss/styleguide-virkdk.scss"],
      test_neutral: ["./scss/test-neutral.scss"],
      test_borger: ["./scss/test-borger.scss"],
      test_virk: ["./scss/test-virk.scss"],
      test_normalization: ["./scss/test-normalization.scss"],
      "requirements-tool": ["./javascript/requirements-tool.js"],
      "search": ["./javascript/search.js"],
      "spinner": ["./javascript/components/spinner.js"],
      "table": ["./javascript/components/table.js"],
      "toast": ["./javascript/components/toast.js"],
      "modal": ["./javascript/components/modal.js"],
      "toggleswitch": ["./javascript/components/toggleswitch.js"],
      "languageswitcher": ["./javascript/components/languageswitcher.js"],
      "demo-return-to-prev-page": ["./javascript/demo-return-to-prev-page.js"],
      "newsletter": ["./javascript/newsletter.js"],
      "pagination": ["./javascript/components/pagination.js"],
      "session-timeout": ["./javascript/components/session-timeout.js"],
      "url-tabs": ["./javascript/components/url-tabs.js"],
      "test-modal-javascript": ["./examples/testfiles/modals/modal-javascript.js"],
      "test-tooltip-javascript": ["./examples/testfiles/tooltips/tooltip-javascript.js"]
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
                sourceMap: true,
                url: false
              }
            },
            {
              loader: "postcss-loader", // postcss loader so we can use autoprefixer
              options: {
                postcssOptions: {
                  config: "postcss.config.js"
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
            outputPath: "fonts/",
            useRelativePath: true,              
            esModule: false,
          },
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "img/",
                useRelativePath: true,              
                esModule: false,
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
                outputPath: "svg/",
                useRelativePath: true,         
                esModule: false,
              }
            }
          ]
        }
      ],
    },
    //devtool: "source-map",
    output: {
      path: path.resolve(__dirname, 'assets'), //dist folder is /assets
      publicPath: "/assets/", // written in front of urls in scss
      filename: "js/[name].js"
    },
    resolve: {
      modules: ["node_modules"],
    },
    stats: 'minimal',
    plugins: [
      new CopyWebpackPlugin(
            {//copies all content from /img to /assets/img
              patterns: [
                { from: "./img/**/*", to: "" },
                { from: "./node_modules/dkfds/dist/img/svg-icons", to: "svg" },
              ]
            }
          ),
      new RemoveEmptyScriptsPlugin(),
      new MiniCssExtractPlugin(
        {
          filename: 'style/[name].css',
          chunkFilename: 'style/[id].css'
        })
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            format: {
              comments: false,
            },
          },
        }),
      ],
    },
    performance: {
      hints: false
    }
  }
}