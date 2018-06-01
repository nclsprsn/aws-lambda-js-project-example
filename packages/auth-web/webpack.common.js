const path = require('path');
const fs = require('fs');

const config = {
    entry:
        fs.readdirSync(path.join(__dirname, "src"))
            .filter(filename => /\.ts$/.test(filename) && filename.indexOf("spec.ts") === -1)
            .map(filename => {
                var entry = {};
                entry[filename.replace(".ts", "")] = path.join(
                    __dirname,
                    "src",
                    filename
                );
                return entry;
            })
            .reduce((finalObject, entry) => Object.assign(finalObject, entry), {}),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: "node",
    watchOptions: {
        ignored: /node_modules/
    }
};

module.exports = config;
