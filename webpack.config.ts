import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from 'copy-webpack-plugin';
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";

const SRC_DIR = path.resolve(__dirname, "..", "src");
const BUILD_DIR = path.resolve(__dirname, "..", "build");
const PUBLIC_DIR = path.resolve(__dirname, "..", "public");
const ENV_FILE = process.env.ENV_FILE;

module.exports.default = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "build.js",
        publicPath: '/',
        sourceMapFilename: "[file].map",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        plugins: [new TsconfigPathsPlugin()]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "public",
                    to: path.join(__dirname, "/build"),
                },
            ],
        }),
    ],
};

module.exports.SRC_DIR = SRC_DIR;
module.exports.BUILD_DIR = BUILD_DIR;
module.exports.PUBLIC_DIR = PUBLIC_DIR;
