document.querySelectorAll('a[href^="#"]').forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault()
		const section = this.getAttribute('href').substring(1)
		if (section) {
			const yOffset = 0
			const y = document.getElementById(`${section}`).getBoundingClientRect().top + window.pageYOffset + yOffset
			seamless.scrollTo(window, { top: y, behavior: 'smooth' })
		}
	})
})
