/**
 * External dependencies
 */
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Main CSS loader for everything but blocks..
const cssExtractTextPlugin = new ExtractTextPlugin({
	filename: "./blocks/[name]/build/style.css"
});

// Configuration for the ExtractTextPlugin.
const extractConfig = {
	use: [
		{ loader: "raw-loader" },
		{
			loader: "postcss-loader",
			options: {
				plugins: [require("autoprefixer")]
			}
		},
		{
			loader: "sass-loader",
			query: {
				outputStyle:
					"production" === process.env.NODE_ENV ? "compressed" : "nested"
			}
		}
	]
};

const entryPointNames = ["call-to-action", "call-to-action-editable", "i18n"];

const externals = {
	react: "React",
	lodash: "lodash"
};
entryPointNames.forEach(entryPointName => {
	externals["@cl/" + entryPointName] = {
		this: ["cl", entryPointName]
	};
});

const wpDependencies = [
	"components",
	"element",
	"blocks",
	"editor",
	"utils",
	"date",
	"data",
	"compose"
];
wpDependencies.forEach(wpDependency => {
	externals["@wordpress/" + wpDependency] = {
		this: ["wp", wpDependency]
	};
});

const config = {
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	entry: entryPointNames.reduce((memo, entryPointName) => {
		memo[entryPointName] = "./blocks/" + entryPointName + "/index.js";
		return memo;
	}, {}),
	externals,
	output: {
		filename: "blocks/[name]/build/index.js",
		path: __dirname,
		library: ["cl", "[name]"],
		libraryTarget: "this"
	},
	resolve: {
		modules: [__dirname, "node_modules"]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.s?css$/,
				use: cssExtractTextPlugin.extract(extractConfig)
			}
		]
	},
	plugins: [cssExtractTextPlugin],
	stats: {
		children: false
	}
};

module.exports = config;
