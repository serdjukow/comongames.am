document.addEventListener('DOMContentLoaded', () => {
	const scrollToElement = () => {
		document.querySelectorAll('a[href^="#"]').forEach(link => {
			link.addEventListener('click', e => {
				e.preventDefault()
				const section = e.target.getAttribute('href').substring(1)
				if (section) {
					const y = document.getElementById(`${section}`).getBoundingClientRect().top + window.pageYOffset
					seamless.scrollTo(window, { top: y, behavior: 'smooth' })
				}
			})
		})
	}
	scrollToElement()

	function showInfoMessage(message, status) {
		const infoMessages = document.querySelector('.info-message')
		const infoMessagesBody = document.querySelector('.info-message__body')

		const ok = 'images/ok.svg'
		const error = 'images/error.svg'

		infoMessages.classList.add('show')
		infoMessagesBody.innerHTML = `
	<div class="info-messages__img">
		<div class="info-message__img-container">
			<img src="${status === 'ok' ? ok : error}" alt="${message}">
		</div>
		</div>
		<div class="info-message__message">
			<span>${message}</span>
		</div>
	`

		setTimeout(() => {
			infoMessages.classList.remove('show')
			infoMessagesBody.textContent = ''
		}, 3000)
	}

	//showInfoMessage(`<p>Thank you for choosing us!</p><p>Your request has been accepted, our manager will contact you soon.</p>`, 'ok')

	gsap.registerPlugin(ScrollTrigger)

	if (document.querySelector('.header__logo')) {
		gsap.from(document.querySelector('.header__logo'), {
			duration: 1,
			scale: 0.7,
			scrollTrigger: {
				trigger: document.querySelector('.header__logo'),
				toggleActions: 'restart pause restart pause',
			},
		})
	}

	const pageWidth = document.documentElement.scrollWidth
	const gameBlocks = document.querySelectorAll('.game')

	if (pageWidth > 768) {
		gameBlocks.forEach(block => {
			gsap.from(block.querySelector('.game__icon'), {
				scrollTrigger: {
					trigger: block.querySelector('.game__icon'),
					toggleActions: 'restart pause restart pause',
				},
				duration: 1,
				x: -30,
			}),
				gsap.from(block.querySelector('.game__content'), {
					scrollTrigger: {
						trigger: block.querySelector('.game__content'),
						toggleActions: 'restart pause restart pause',
					},
					duration: 1,
					x: 30
				})
		})
	}
})
