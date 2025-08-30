import * as basicLightbox from 'basiclightbox'

let popupOpeners = document.querySelectorAll('[href^="#popup"]')

popupOpeners.forEach((popupOpener) => {
	let className = popupOpener.dataset.class || ''
	let content = document.querySelector(popupOpener.getAttribute('href'))

	let popupCloser = content.querySelector('.Popup__closer')

	let instance = basicLightbox.create(content, {
		className: className,
		onShow: (instance) => {
			// console.log('onShow')
		},
		onClose: (instance) => {
			// console.log('onClose')
		}
	})

	popupOpener.addEventListener('click', (e) => {
		e.preventDefault()
		instance.show()
	})

	popupCloser.addEventListener('click', (e) => {
		e.preventDefault()
		instance.close()
	})
})
