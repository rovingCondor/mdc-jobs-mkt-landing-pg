addEventListener('scroll', scrollReveal);


function scrollReveal () {
	const reveal = document.querySelectorAll('.reveal');
	
	for(i = 0; i < reveal.length; i++) {
		const windowheight = window.innerHeight;
		const revealTop = reveal[i].getBoundingClientRect().top;
		const revealPoint = 150;

		if(revealTop < windowheight - revealPoint) {
			reveal[i].classList.add('revealActive');
		} else {
			reveal[i].classList.remove('revealActive');
		}
	}
	
}