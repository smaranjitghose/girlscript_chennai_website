function typeWriter(i) {
	const txt = "GIRLSCRIPT CHENNAI";
	if (i < txt.length) {
		document.getElementById("typer").innerHTML += txt.charAt(i);
		setTimeout(() => typeWriter(i + 1), 80);
	}
};
$(function () {
	typeWriter(0);
	const sr = ScrollReveal();

	sr.reveal('.forScroll', {
		origin: 'top',
		distance: '20px',
		duration: 2000,
		scale: 0.8,
		reset: true

	});

	sr.reveal('.forScrollCards', {
		origin: 'top',
		distance: '20px',
		duration: 2000,
		scale: .8,
		reset: true,

	});

	sr.reveal('.btn-scroll', {
		origin: 'top',
		distance: '20px',
		duration: 2000,
		scale: 0.8,
		reset: true,
		delay: 500

	});

	sr.reveal('.for-Scroll-Achievements', {
		origin: 'top',
		distance: '20px',
		duration: 2000,
		scale: 0.8,
		reset: true,
		delay: 250

	});

	sr.reveal('.scroll-feature-cards', {
		origin: 'top',
		distance: '20px',
		duration: 2000,
		scale: 0.8,
		reset: true,
		delay: 150

	});

})