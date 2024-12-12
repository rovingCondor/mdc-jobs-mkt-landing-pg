// Open / Close Mobile Menu
// Animated mobile toggle
const mobileNavBtn2 = document.querySelector('.mobile-nav-toggle2')
const primaryNav = document.querySelector('.primary-navigation');

mobileNavBtn2.addEventListener('click', () => {
	const isOpened = mobileNavBtn2.getAttribute('aria-expanded');

	if (isOpened === 'false') {
		mobileNavBtn2.setAttribute('aria-expanded', 'true');
	} else {
		mobileNavBtn2.setAttribute('aria-expanded', 'false');
	}

	primaryNav.classList.toggle('true');
})


// Close mobile menu when link is clicked
// Menu icon animation reset
const links = document.querySelectorAll('.nav-list a');

links.forEach(l => {
	l.addEventListener('click', ()=> {
		primaryNav.classList.remove('true');
		mobileNavBtn2.setAttribute('aria-expanded', 'false');
	})
})