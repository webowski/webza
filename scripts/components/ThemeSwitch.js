document.addEventListener('DOMContentLoaded', function() {

	let themeSwitchers = document.querySelectorAll('.ThemeSwitch')

	function turnSwitch(theme) {
		themeSwitchers.forEach(themeSwitch => {
			let checkbox = themeSwitch.querySelector('input')
			if (theme === 'dark') {
				themeSwitch.classList.add('is-switched')
				checkbox.checked = true
			} else {
				themeSwitch.classList.remove('is-switched')
				checkbox.checked = false
			}
		})
	}

	themeSwitchers.forEach(themeSwitch => {
		const currentTheme = localStorage.getItem('theme')
		let checkbox = themeSwitch.querySelector('input')

		if (currentTheme) {
			document.documentElement.setAttribute('data-theme', currentTheme)
			turnSwitch(currentTheme)
		}

		themeSwitch.addEventListener('click', e => {
			e.stopPropagation()
			if (themeSwitch.classList.contains('is-switched')) {
				document.documentElement.setAttribute('data-theme', 'light')
				localStorage.setItem('theme', 'light')
				turnSwitch('light')
			} else {
				document.documentElement.setAttribute('data-theme', 'dark')
				localStorage.setItem('theme', 'dark')
				turnSwitch('dark')
			}
		}, false)
	})

})
