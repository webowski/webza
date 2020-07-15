module.exports = (gulp, tools) => {

	const uglifyify = require('uglifyify');

	// make a destination folder
	const makeDest = vinyl => {

		vinyl.path = tools.path.relative(vinyl.cwd, vinyl.path)

		let file = {
			name:    tools.path.parse(vinyl.path).name,
			ext:     tools.path.parse(vinyl.path).ext,
			dir:     tools.path.dirname(vinyl.path)
		}

		let beginningsToRemove = tools.config.scripts.beginningsToRemove

		beginningsToRemove.forEach(function(part) {
			let regexp = new RegExp('^' + part)
			file.dir = file.dir.replace(regexp, '')
		})

		file.dest = './scripts/min/' + file.dir + '/'

		tools.fs.mkdirsSync( file.dest )

		return file.dest
	}


	return () => {


	//
	var browserified = tools.transform(function(filename) {
		// filename = './source/scripts/app.js' in this case
		return tools.browserify(filename)
			.bundle();
	});

		let scripts = tools.config.scripts

		let streamScripts = gulp.src(scripts.separate, {
				cwd: './',
				nosort: true,
			})
			// .pipe(tools.concat('common.js'))
			.pipe(tools.uglify({
				output: {
					comments: false,
				}
			}))
			.on('error', () => {
				console.log.bind(console, '\007')
			})
			.pipe(tools.through.obj( (vinyl, encoding, callback) => {

				let dest = makeDest(vinyl)
				let scriptsPath = dest + vinyl.relative
				let content = vinyl.contents.toString(encoding)

				tools.fs.outputFileSync( scriptsPath, content, err => {
					console.log( err );
				})

				callback(null, vinyl);
			}))
			// .pipe(gulp.dest('./scripts/min/'))

		// let streamScriptsConcat = gulp.src(scripts.concat, {
		// 		cwd: './',
		// 		nosort: true,
		// 	})
		// 	.pipe(

		// 	)

		let streamScriptsConcat = gulp.src(scripts.concat, {
				cwd: './',
				nosort: true,
			})
			// .pipe(tools.through.obj( (vinyl, encoding, callback) => {

			// 	// vinyl = prependScss(vinyl);

			// 	vinyl.path = tools.path.relative(vinyl.cwd, vinyl.path)

			// 	console.dir( vinyl.path );

			// 	var vinylNew = tools.browserify([
			// 		// './scripts/common.js',
			// 		'./' + vinyl.path
			// 	])
			// 	.transform(tools.babelify.configure({
			// 		presets: [
			// 			[
			// 				'@babel/preset-env',
			// 				{
			// 					"targets": {
			// 						"ie": "11",
			// 						// "esmodules": true,
			// 					},
			// 					"corejs": "^3.6.4",
			// 					"useBuiltIns": "usage",
			// 					// "modules": "commonjs",
			// 				}
			// 			],
			// 		],
			// 		// tools: ['transform-runtime']
			// 		// babel/preset-flow
			// 	}))
			// 	.bundle()
			// 	// .pipe(tools.source(vinyl.basename))
			// 	.pipe(tools.buffer())
			// 	// .pipe(tools.streamify(
			// 	// 	tools.concat('common.js'))
			// 	// )
			// 	// .pipe(tools.streamify(tools.uglify({
			// 	// 	output: {
			// 	// 		comments: false,
			// 	// 	}
			// 	// })))
			// 	// .pipe(tools.uglify({
			// 	// 	output: {
			// 	// 		comments: false,
			// 	// 	}
			// 	// }))
			// 	// .pipe(gulp.dest('./scripts/min/'))

			// 	// console.dir( vinyl );

			// 	callback(null, vinylNew);
			// }))
			// .pipe(browserified)
			.pipe(
				tools.streamify(
				tools.concat('commonn.js')
			)
				)
			// .pipe(tools.source('common.js'))
			.pipe(gulp.dest('./scripts/min/'))
			// .pipe(tools.browserSync.stream())
			// .pipe(buffer())     // to continue using the stream

		// return tools.browserify([
		// 		'./scripts/app.js',
		// 	])
		// 	.transform(tools.babelify.configure({
		// 		presets: [
		// 			[
		// 				'@babel/preset-env',
		// 				{
		// 					"targets": {
		// 						"ie": "11",
		// 						// "esmodules": true,
		// 					},
		// 					"corejs": "^3.6.4",
		// 					"useBuiltIns": "usage",
		// 					// "modules": "commonjs",
		// 				}
		// 			],
		// 		],
		// 		// tools: ['transform-runtime']
		// 		// babel/preset-flow
		// 	}))
		// 	.bundle()
		// 	.pipe(tools.source('app.min.js'))
		// 	.pipe(tools.streamify(tools.uglify({
		// 		output: {
		// 			comments: false,
		// 		}
		// 	})))
		// 	.pipe(gulp.dest('./scripts/'))
		// 	.pipe(tools.browserSync.stream())
		// 	// .pipe(buffer())     // to continue using the stream

		return streamScripts

	}
}
