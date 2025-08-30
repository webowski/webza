import ScrollSpy from '@sidsbrmnn/scrollspy'

const nav = document.querySelector('.NavMain.do-spy .menu')
let scrollSpyInstance = null

function initScrollSpy() {
	if (nav) {
		scrollSpyInstance = new ScrollSpy(nav, {
			sectionSelector: '.Section[id]',
			targetSelector: 'a',
			activeClass: 'is-active',
			offset: 150,
		})
	}
}

function destroyScrollSpy() {
	if (scrollSpyInstance) {
		const activeLinks = nav.querySelectorAll('.is-active');
		activeLinks.forEach(link => link.classList.remove('is-active'))
		scrollSpyInstance = null;
	}
}

setTimeout(() => {
	initScrollSpy()
}, 555)

window.addEventListener('resize', handleScrollSpyOnResize)

function handleScrollSpyOnResize() {
	destroyScrollSpy()
	initScrollSpy()
}

// Header visibility
const headerEl = document.querySelector('body.g-headerHidden .Header')

if (headerEl) {
	setTimeout(() => {
		initHeaderVis()
	}, 555)

	document.addEventListener('scroll', () => {
		setHeaderVis(computeThreshold())
	})

	window.addEventListener('resize', handleHeaderVisOnResize)

	function handleHeaderVisOnResize() {
		initHeaderVis()
	}

	function initHeaderVis() {
		setHeaderVis(computeThreshold())
	}

	function computeThreshold() {
		let headerHeight = getComputedStyle(document.documentElement).getPropertyValue('--header-height')
		let headerThreshold = getComputedStyle(document.documentElement).getPropertyValue('--header-threshold')
		return threshold = window.innerHeight - parseInt(headerHeight)
		return threshold = window.innerHeight - parseInt(headerHeight) - parseInt(headerThreshold)
	}

	function setHeaderVis(threshold) {
		if (window.scrollY > threshold) {
			headerEl.classList.add('is-shown')
		} else {
			headerEl.classList.remove('is-shown')
		}
	}
}

