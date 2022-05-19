import fs                from 'fs-extra'
import path, { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// import chalk                    from 'chalk'
// import chokidar                 from 'chokidar'
// import BeforeBuildPlugin        from 'before-build-webpack'
import MiniCssExtractPlugin     from 'mini-css-extract-plugin'
// import HandlebarsPlugin         from 'handlebars-webpack-plugin'
// import pretty                   from 'pretty'
// import SVGSpritemapPlugin       from 'svg-spritemap-webpack-plugin'
// import { VueLoaderPlugin }      from 'vue-loader'
// import FileManagerPlugin        from 'filemanager-webpack-plugin'

const __dirname = resolve()
const mode = process.env.NODE_ENV || 'development'
const target = mode === 'development' ? 'web' : 'browserslist'

const templates = fs
	.readdirSync(resolve(__dirname, 'src/templates/'))
	.filter(filename => {
		return filename.match(/\.hbs/)
	})
const templatesPlugins = []

templates.forEach(templateName => {
	templatesPlugins.push(
		new HtmlWebpackPlugin({
			template: 'templates/' + templateName,
			filename: templateName.replace('.hbs', '.html'),
			minify: false,
			inject: false,
			templateParameters: JSON.parse(
				fs.readFileSync(resolve('src/templates/base/data.json'))
			),
			cache: false
		})
	)
})

export default {
	mode: mode,
	context: __dirname + '/src',
	entry: {
		styles: {
			import: resolve('./src/styles/index.scss'),
			filename: './styles/[name].min.js'
		},
    bundle: {
			import: resolve('./src/scripts/index.js'),
			filename: './scripts/[name].min.js'
		},
	},
	// output: {
	// 	path: path.resolve('dist/scripts'),
	// },

	module: {
		rules: [

			// Styles
			{
				test: /\.(scss|css)$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: resolve(__dirname, '/src/styles'),
							esModule: false,
						}
					},
					{
						loader: 'css-loader',
						options: {
							url: false,
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									['postcss-preset-env'],
									// ['flex-gap-polyfill', ],
								]
							}
						}
					},
					'sass-loader',
				]
			},

			// Templates
			{
				test: /\.hbs$/,
				use: [{
					loader: 'handlebars-loader',
					options: {
						helperDirs: [
							resolve('src/templates/base/helpers'),
						],
						partialDirs: [
							resolve('src/templates/layouts'),
							resolve('src/templates/partials'),
							resolve('src/templates/components'),
						],
						// debug: true,
					}
				}]
			}

		]
	},

	plugins: [

		...templatesPlugins,

		new MiniCssExtractPlugin({
			filename: 'styles/[name].min.css',
		}),

	],

	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			handlebars: 'handlebars/dist/handlebars.js',
		}
	},
	target: target,
	// stats: {
	// 	children: true
	// },

	devtool: mode === 'development' ? 'source-map' : false,
	performance: {
		// hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},

	watchOptions: {
		ignored: '**/node_modules',
	},

	devServer: {
		open: true,
    liveReload: true,
		hot: false,
    watchFiles: [
			resolve('src/templates/*.hbs')
		],
		port: 3000,
		static: {
			directory: resolve(__dirname, '/dist/'),
			staticOptions: {},
			publicPath: '/dist/',
			serveIndex: true,
			watch: false,
		}
	}
}
