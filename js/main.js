gsap.registerPlugin(ScrollTrigger)

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
	//scrollToElement()

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
			const gameIcon = block.querySelector('.game__icon')
			const gameTitle = block.querySelector('.game__title')
			const gameText = block.querySelector('.game__text')
			const gameLinks = block.querySelector('.game__links')

			gsap.from(gameIcon, {
				scrollTrigger: {
					trigger: gameIcon,
					toggleActions: 'restart pause restart pause',
				},
				duration: 0.8,
				opacity: 0,
				stagger: 0.6,
				ease: 'back.in',
				force3D: true,
				x: -30,
			}),
				gsap.from(gameTitle, {
					scrollTrigger: {
						trigger: gameTitle,
						toggleActions: 'restart pause restart pause',
					},
					duration: 0.4,
					opacity: 0,
					//stagger: 0.4,
					ease: 'back.in',
					force3D: true,
					y: 20,
				}),
				gsap.from(gameText, {
					scrollTrigger: {
						trigger: gameText,
						toggleActions: 'restart pause restart pause',
					},
					duration: 0.6,
					opacity: 0,
					//stagger: 0.5,
					ease: 'back.in',
					force3D: true,
					y: 20,
				}),
				gsap.from(gameLinks, {
					scrollTrigger: {
						trigger: gameLinks,
						toggleActions: 'restart pause restart pause',
					},
					duration: 0.8,
					opacity: 0,
					//stagger: 0.6,
					ease: 'back.in',
					force3D: true,
					y: 20,
				})
		})
	}
	const gameContainer = document.querySelector('.page')
	gameContainer.addEventListener('scroll', e => {
		ScrollTrigger.refresh()
	})

	const page = document.querySelector('.page')
	const pageHeight = page.scrollHeight - window.innerHeight
	page.addEventListener('scroll', () => {
		const dashoffset = (page.scrollTop / pageHeight) * 100
		document.querySelector('progress').value = dashoffset
	})
})
