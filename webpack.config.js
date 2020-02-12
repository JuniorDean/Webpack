const path = require("path");

const config = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    mode: "development",
    devServer : {
        contentBase: path.resolve(__dirname, "public"),
        port: 3000,
        publicPath: "/assets/",
        watchContentBase: true
    }
};


module.exports = config;