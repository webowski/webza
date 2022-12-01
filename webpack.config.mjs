import path, { resolve } from 'path'
import SVGSpritemapPlugin from 'svg-spritemap-webpack-plugin'
import PugPlugin from 'pug-plugin'
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin'

const __dirname = resolve()
const mode = process.env.NODE_ENV || 'development'
const target = mode === 'development' ? 'web' : 'browserslist'

const templates = {
	index: './src/templates/index.pug',
	components: './src/templates/components.pug',
}

export default {
	mode: mode,
	target: target,

	entry: {
		...templates,
	},

	output: {
		path: path.join(__dirname, 'dist/'),
		// publicPath: '/',
		filename: 'scripts/[name].js',
		clean: true,
	},

	module: {
		rules: [
			// Styles
			{
				test: /\.(scss|css)$/i,
				use: [
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [['postcss-preset-env']],
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: ['node_modules'],
							},
						},
					},
				],
			},

			// Scripts
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						// cacheDirectory: true,
					},
				},
			},

			// Images
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: (pathData) => {
						let relativePath = pathData.module.resourceResolveData.relativePath
						let dirName = path.dirname(relativePath).replace('./src/', '')
						return dirName + '/[name][ext]'
					},
				},
			},

			// Fonts
			{
				test: /\.(woff|woff2)$/i,
				type: 'asset/resource',
				generator: {
					filename: (pathData) => {
						let relativePath = pathData.module.resourceResolveData.relativePath
						let dirName = path.dirname(relativePath).replace('./src/', '')
						return dirName + '/[name][ext]'
					},
				},
			},

			// Templates
			{
				test: /\.pug$/,
				loader: PugPlugin.loader,
				options: {
					method: 'render',
					embedFilters: {
						markdown: {
							highlight: {
								verbose: true,
								use: 'prismjs',
							},
						},
					},
				},
			},
		],
	},

	plugins: [
		new SVGSpritemapPlugin(resolve('./src/images/icons/*.svg'), {
			output: {
				filename: 'images/icons.min.svg',
				svgo: false,
			},
			sprite: {
				prefix: 'icon-',
				generate: {
					title: false,
				},
			},
		}),

		new PugPlugin({
			pretty: true,
			extractCss: {
				filename: 'styles/[name].css',
			},
		}),
	],

	optimization: {
		minimizer: [
			'...',
			new ImageMinimizerPlugin({
				deleteOriginalAssets: true,
				minimizer: {
					implementation: ImageMinimizerPlugin.squooshMinify,
					options: {
						encodeOptions: {
							mozjpeg: {
								quality: 84,
							},
							webp: {
								quality: 90,
							},
							oxipng: {
								level: 4,
								interlace: true,
								// strip: 'all'
							},
						},
					},
				},
			}),

			new ImageMinimizerPlugin({
				generator: [
					{
						preset: 'jpg1024',
						implementation: ImageMinimizerPlugin.squooshGenerate,
						filename: (pathData) => {
							const ext = path.extname(pathData.filename)
							const name = path
								.basename(pathData.filename, ext)
								.replace('@2x', '')
							return name + '[ext]'
						},
						options: {
							resize: {
								enabled: true,
								width: 1024,
							},
							encodeOptions: {
								mozjpeg: {
									quality: 84,
								},
							},
						},
					},
					{
						preset: 'jpg2048',
						implementation: ImageMinimizerPlugin.squooshGenerate,
						options: {
							resize: {
								enabled: true,
								width: 2048,
							},
							encodeOptions: {
								mozjpeg: {
									quality: 84,
								},
							},
						},
					},
					{
						preset: 'webp1024',
						implementation: ImageMinimizerPlugin.squooshGenerate,
						filename: (pathData) => {
							const ext = path.extname(pathData.filename)
							const name = path
								.basename(pathData.filename, ext)
								.replace('@2x', '')
							return name + '[ext]'
						},
						options: {
							resize: {
								enabled: true,
								width: 1024,
							},
							encodeOptions: {
								webp: {
									quality: 80,
								},
							},
						},
					},
					{
						preset: 'webp2048',
						implementation: ImageMinimizerPlugin.squooshGenerate,
						options: {
							resize: {
								enabled: true,
								width: 2048,
							},
							encodeOptions: {
								webp: {
									quality: 80,
								},
							},
						},
					},
				],
			}),
		],
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'~': path.join(__dirname, 'src/'),
		},
	},

	// stats: {
	// 	children: true
	// },

	devtool: mode === 'development' ? 'source-map' : false,
	performance: {
		// hints: 'warning',
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},

	watchOptions: {
		ignored: '**/node_modules',
	},

	devServer: {
		open: true,
		liveReload: true,
		hot: false,
		// watchFiles: [
		// 	resolve('src/templates/*.pug')
		// ],
		port: 3000,
		static: {
			directory: resolve(__dirname, 'dist'),
			staticOptions: {},
			publicPath: resolve(__dirname, 'dist'),
			serveIndex: true,
			watch: false,
		},
	},
}
