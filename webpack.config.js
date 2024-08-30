const path = require('path')
const glob = require('glob')

module.exports = {
	entry: glob
		.sync(path.resolve(__dirname, './src/!(*utils|*core*|types)/*.ts'))
		.reduce((entries, file) => {
			const entryName = path.basename(file, '.ts')
			entries[entryName] = file
			return entries
		}, {}),
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
					'ts-loader',
				],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
}
