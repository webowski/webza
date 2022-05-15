const Handlebars = require('handlebars')

class Paths {
	initial
	srcset
	srcsetWebp

	constructor(src) {

		this.initial = src.replace('@2x', '')
		this.srcset = this.initial

		let pathWebp = this.initial.replace(/\.jpg|\.png/, '.webp')
		this.srcsetWebp = pathWebp

		let is2x = src.match(/@2x/)

		if (is2x) {
			let pathWebp2x = src.replace(/\.jpg|\.png/, '.webp 2x')
			let path2x = src + ' 2x'
			this.srcsetWebp = `${pathWebp}, ${pathWebp2x}`
			this.srcset = `${this.initial}, ${path2x}`
		}

	}
}

const picture = (options) => {

	let src = options.hash.src
	delete options.hash.src

	let altText = ''
	if (options.hash.hasOwnProperty('alt')) {
		altText = options.hash.alt
		delete options.hash.alt
	}

	let attributes = makeAttributesString(options.hash)

	let paths = new Paths(src)

	let output = `<picture ${attributes}>
		<source srcset="${paths.srcsetWebp}" type="image/webp">
		<img src="${paths.initial}" srcset="${paths.srcset}" alt="${altText}">
	</picture>`

  return new Handlebars.SafeString(output)
}

function makeAttributesString(obj) {
	let attributes = []

	Object.keys(obj).forEach(key => {
		let escapedKey = Handlebars.escapeExpression(key)
		let escapedValue = Handlebars.escapeExpression(obj[key])
		attributes.unshift(escapedKey + '="' + escapedValue + '"')
	})

	attributes = attributes.join(' ')
	return attributes
}

module.exports = picture
