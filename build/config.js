/* Чтобы задать имя тэстового хоста нужно запустить `gulp config` */

module.exports = () => { return {

	styles: {
		separate: [
			'node_modules/@glidejs/glide/src/assets/sass/glide.core.scss',
			'node_modules/basiclightbox/src/styles/main.scss',
			'styles/components/_popup.scss',
			'styles/specific/settings.scss',
		],
		// will processed with concatenating to `styles/min/common.css`
		concat: [
			'styles/specific/test.css',
			'styles/common.scss',
		],
		beginningsToRemove: [
			'node_modules/',
			'styles/',
		],
		// prepend @imports for overriding scss variables of separate components
		prependImports: [
			'styles/base/_variables.scss',
			'styles/base/_mixins.scss',
			'styles/base/_mediaqueries.scss',
		],
	},

	scripts: {
		separate: [
			'node_modules/@glidejs/glide/dist/glide.min.js',
			'node_modules/basiclightbox/dist/basicLightbox.min.js',
			'scripts/components/Editor.js',
		],
		// will processed with concatenating to `scripts/min/common.js`
		concat: [

			// NOT ES6
			'scripts/components/Editor.js',

			// ES6
			'scripts/common.js',
		],
		beginningsToRemove: [
			'node_modules/',
			'scripts/',
		],
	}

}}
