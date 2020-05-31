'use strict';

// NAVBAR AND FOOTER

let header = $(`
<nav class="navbar fixed-top navbar-expand-lg" id="navbar">
  <a class="navbar-brand" href="index.html"><img src="assets/Images/logo/logo1.png" id="logo" alt="Girl Script Chennai Chapter Logo" aria-label="Girl Script Chennai Chapter Logo"></a>
  <div id="myNav" class="fullScreen-navigation">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="navigation-content" id="smallnav">
          <a href="index.html">HOME</a>
          <a href="announcements.html">ANNOUNCEMENTS</a>
          <a href="team.html">OUR TEAM</a>
		  <a href="achievements.html">OUR ACHIEVEMENTS</a>
		  <a href="blogs.html">BLOGS</a>
		  <a href="contactUs.html">CONTACT US</a>
		  <div id="themeChangeButtonSmallScreen">
		  </div>
        </div>
  </div>

	  <span class="navbar-toggler-icon navbar-toggler" onclick="openNav()"></span>
	<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
	  <ul class="navbar-nav ml-5">
		<li class="nav-item">
		  <a class="nav-link"  href="index.html"><span>HOME</span></a>
		</li>
		<li class="nav-item">
		  <a class="nav-link" href="announcements.html"><span>ANNOUNCEMENTS</span></a>
		</li>
		<li class="nav-item">
		  <a class="nav-link" href="team.html"><span>OUR TEAM</span></a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="achievements.html"><span>OUR ACHIEVEMENTS</span></a>
		</li>
		  <li class="nav-item">
			<a class="nav-link" href="blogs.html"><span>BLOGS</span></a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="contactUs.html"><span>CONTACT US</span></a>
		</li>

	  </ul>
	<div id="themeChangeButtonBigScreen">
		<label class="switch" id="themeChangeButton">		
		<input type="checkbox" name="theme" id="theme" onchange="changeTheme()">		
		<span class="slider round"></span>	
		<div class="stars"><span></span><span></span><span></span><span></span><span></span></div>
		</label>
	</div>				
	 </div>	 
	</nav>`);

let footer = $(`
<footer>
<div class="container">
  <div class="row">
	<div class="col-lg-6 col-md-4 footer-logo"> 
		<img data-src="assets/Images/logo/logo.png" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Girl Script Chennai Chapter Logo" class="logo" aria-label="Girl Script Chennai Chapter Logo">
	</div>
	<div class="col-lg-6 col-md-8 mb-5" id="footer-c">		
	  <br> 
	  <h3 class="footer-h">Join Our Newsletter</h3>
	  <div class="border"></div>
	  <p class="footer-p">Enter Your Email to get our news and updates.</p>
	  <form action="" class="newsletter-form" name="footermail" method="post" >
	  <input type="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="email" class="txtb mr-2 mb-2 mt-4" placeholder="Enter Your Email" required >		   
	  <button class="btn btn-spl" type="submit">Send</button>
	  </form>
	</div>
  </div>
   <center>

		<div class="social-media">
		  <a class="fa fa-twitter"  href="https://twitter.com/girlscriptch"></a>
		  <a class="fa fa-instagram" href="https://www.instagram.com/girlscriptchennai/"></a>
		  <a class="fa fa-github" href="https://github.com/girlscriptchennai"></a>
		  <a class="fa fa-linkedin" href="https://www.linkedin.com/company/girlscript-chennai/"></a>
		</div>
		  <h6 class="footer-h3">Made with ♥</h6>
	</center>
</div>		
</footer>`);

function scrollFunction() {
	let navBar = document.getElementById('navbar'),
		logo = document.getElementById('logo');
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		navBar.style.padding = '2px 16px';
		logo.width = '160px';
	}
}

function changeTheme(value) {
	let docElement = document.documentElement;
	let checkElement = $('#theme')[0];
	docElement.classList.add('transition');
	window.setTimeout(() => {
		docElement.classList.remove('transition');
	}, 1000);
	if (value === 'dark' || checkElement.checked) {
		checkElement.checked = 'true';
		docElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('mode', 'dark');
	} else {
		checkElement.checked = false;
		docElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('mode', 'light');
	}
}

// Window Loads
$(function () {
	let bodyElement = $(`body`);
	$('.loader-box').fadeOut(500, function () {
		$('.loader-box').remove();
	});
	bodyElement.prepend(header);
	bodyElement.append(footer);
	if (sessionStorage['mode']) {
		changeTheme(sessionStorage['mode']);
	}
});

window.onscroll = function () {
	scrollFunction();
};

//Single Declartion of changed theme button

function openNav() {
	document.getElementById('myNav').style.display = 'block';
	let toggleThemeButton = document.getElementById('themeChangeButton');
	toggleThemeButton.remove();
	let positionOfToggleButtonForSmallScreen = document.getElementById('themeChangeButtonSmallScreen');
	positionOfToggleButtonForSmallScreen.appendChild(toggleThemeButton);
}

function closeNav() {
	document.getElementById('myNav').style.display = 'none';
	let toggleThemeButton = document.getElementById('themeChangeButton');
	toggleThemeButton.remove();
	let positionOfToggleButtonForBigScreen = document.getElementById('themeChangeButtonBigScreen');
	positionOfToggleButtonForBigScreen.appendChild(toggleThemeButton);
}

function init() {
	var imgDefer = document.getElementsByTagName('img');
	for (var i = 0; i < imgDefer.length; i++) {
		if (imgDefer[i].getAttribute('data-src')) {
			imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
		}
	}
}
window.onload = init;

// Registration starts

let questions = [
	{
		question: "What's your name?",
		pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
	},
	{ question: "What's your registration number?", pattern: '^(RA)+[0-9]{13}$' },
	{ question: 'In which year you are studying?', pattern: '^(?:[0-4])$' },
	{ question: "What's your email?", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
	{ question: 'Why you want to join?', pattern: '.{10,50}' }
];

(function () {
	let tTime = 100; // transition transform time from #register in ms
	let wTime = 200; // transition width time from #register in ms
	let eTime = 1000; // transition width time from inputLabel in ms

	// init....

	var position = 0;

	putQuestion();

	progressButton.addEventListener('click', validate);
	inputField.addEventListener('keyup', function (e) {
		transform(0, 0); // ie hack to redraw
		if (e.keyCode == 13) validate();
	});

	// functions....

	// load the next question
	function putQuestion() {
		inputLabel.innerHTML = questions[position].question;
		inputField.value = '';
		inputField.type = questions[position].type || 'text';
		inputField.focus();
		showCurrent();
	}

	// when all the questions have been answered
	function done() {
		// remove the box if there is no next question
		register.className = 'close';
		// Upload to DataBase
		const requestBody = {
			name: questions[0].value,
			registrationNumber: questions[1].value,
			year: questions[2].value,
			email: questions[3].value,
			reason: questions[4].value
		};
		

		axios
			.post('https://desolate-waters-45820.herokuapp.com/register', requestBody)
			.then(function (response) {
				const confettiSuccessScreen = document.getElementById('success-screen');
				confettiSuccessScreen.classList.remove('hide');
				const status = response.data.status;
				if (status === 'success') {
					let h1 = document.createElement('h1');
					h1.appendChild(document.createTextNode('Welcome ' + questions[0].value + '!'));
					setTimeout(function () {
						register.parentElement.appendChild(h1);
						setTimeout(function () {
							h1.style.opacity = 1;
						}, 50);
					}, eTime);
				}
			})
			.catch(function (error) {
				let h1 = document.createElement('h1');
				h1.appendChild(document.createTextNode('Please try again!'));
				setTimeout(function () {
					register.parentElement.appendChild(h1);
					setTimeout(function () {
						h1.style.opacity = 1;
					}, 50);
				}, eTime);
			});
	}

	// when submitting the current question
	function validate() {
		// set the value of the field into the array
		questions[position].value = inputField.value;
		var x = document.getElementById('snackbar');

		// check if the pattern matches
		if (!inputField.value.match(questions[position].pattern || /.+/)) {
			wrong();
			x.className = 'show';
			// Put error message according to their question
			if (position == 0) {
				x.innerHTML = 'Error: Name should contain characters';
			}
			if (position == 1) {
				x.innerHTML = 'Error: Format should be RA+(13 digit number)';
			}
			if (position == 2) {
				x.innerHTML = 'Error: Year should be between 0 to 4';
			}
			if (position == 3) {
				x.innerHTML = 'Error: Invalid Email-Id';
			}
			if (position == 4) {
				x.innerHTML = 'Error: Mimumum length should be 10 characters';
			}
			setTimeout(function () {
				x.className = x.className.replace('show', '');
			}, 3000);
		} else
			ok(function () {
				// set the progress of the background
				progress.style.width = (++position * 100) / questions.length + 'vw';

				// if there is a new question, hide current and load next
				if (questions[position]) hideCurrent(putQuestion);
				else hideCurrent(done);
			});
	}

	// helper....

	function hideCurrent(callback) {
		inputContainer.style.opacity = 0;
		inputProgress.style.transition = 'none';
		inputProgress.style.width = 0;
		setTimeout(callback, wTime);
	}

	function showCurrent(callback) {
		inputContainer.style.opacity = 1;
		inputProgress.style.transition = '';
		inputProgress.style.width = '100%';
		setTimeout(callback, wTime);
	}

	function transform(x, y) {
		register.style.transform = 'translate(' + x + 'px ,  ' + y + 'px)';
	}

	function ok(callback) {
		register.className = '';
		setTimeout(transform, tTime * 0, 0, 10);
		setTimeout(transform, tTime * 1, 0, 0);
		setTimeout(callback, tTime * 2);
	}

	function wrong(callback) {
		register.className = 'wrong';
		for (
			let i = 0;
			i < 6;
			i++ // shaking motion
		)
			setTimeout(transform, tTime * i, ((i % 2) * 2 - 1) * 20, 0);
		setTimeout(transform, tTime * 6, 0, 0);
		setTimeout(callback, tTime * 7);
	}
})();

function init() {
	let imgDefer = document.getElementsByTagName('img');
	for (let i = 0; i < imgDefer.length; i++) {
		if (imgDefer[i].getAttribute('data-src')) {
			imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
		}
	}
}
window.onload = init;
