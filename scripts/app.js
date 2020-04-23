let header = $(`
<nav class="navbar fixed-top navbar-expand-lg" id="navbar">
  <a class="navbar-brand" href="index.html"><img src="assets/Images/Logo1.png" id="logo"></a>
  <div id="myNav" class="fullScreen-navigation">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="navigation-content">
          <a href="index.html">HOME</a>
          <a href="announcements.html">ANNOUNCEMENTS</a>
          <a href="team.html">OUR TEAM</a>
		  <a href="achievements.html">OUR ACHIEVEMENTS</a>
		  <a href="blogs.html">BLOGS</a>
		  <a href="contactUs.html">CONTACT US</a>
		  <label class="switch">		
	         <input type="checkbox" name="theme" onchange="changeTheme()">		
	         <span class="slider round"></span>		
          </label>
		  
        </div>
  </div>

	  <span class="navbar-toggler-icon navbar-toggler" onclick="openNav()"></span>
	<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
	  <ul class="navbar-nav ml-5">
		<li class="nav-item">
		  <a class="nav-link active"  href="index.html"><span>HOME</span></a>
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
	<label class="switch">		
	  <input type="checkbox" name="theme" id="theme" onchange="changeTheme()">		
	  <span class="slider round"></span>		
	</label>		
	 </div>	 
	</nav>`);

  
let footer = $(`
<footer>
<div class="container">
  <div class="row">
	<div class="col-lg-6 col-md-4 footer-logo"> 
		<img src="assets/Images/logo.png" alt="" class="logo">
	</div>
	<div class="col-lg-6 col-md-8 mb-5" id="footer-c">		
	  <br> 
	  <h3 class="footer-h">Join Our Newsletter</h3>
	  <div class="border"></div>
	  <p class="footer-p">Enter Your Email to get our news and updates.</p>
	  <form action="" class="newsletter-form" name="footermail" onsubmit="return validateFooterForm()" method="post" >
	  <input type="email" id="email" name="email" class="txtb mr-2 mb-2 mt-4" placeholder="Enter Your Email" required >		   
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
	let navBar = document.getElementById("navbar"),
		logo = document.getElementById("logo");
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		navBar.style.padding = "2px 16px";
		logo.width = "160px";
    }
}

function activeTab() {
	let navBar = $("#navbarNav");
	let navItems = navBar[0].children[0].children;
	let pageName = window.location.pathname.toLowerCase();
	for (let i = 0; i < navItems.length; i++) {
		let childHref = navItems[i].children[0].pathname.toLowerCase();
		if (
			(childHref === pageName || childHref.includes(pageName)) &&
			window.location.pathname !== "/"
		)
			navItems[i].children[0].classList.add("active");
		else navItems[i].children[0].classList.remove("active");
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function validateFooterForm() {
	let emailID = document.footermail.email,
		atpos = emailID.value.indexOf("@"),
		dotpos = emailID.value.lastIndexOf(".");

	if (atpos < 1 || (dotpos - atpos < 2)) {
		alert("Please enter correct email ID")
		emailID.focus();
		return false;
	}
	return true;
}

function changeTheme(value) {
	let docElement = document.documentElement;
	let checkElement = $('#theme')[0]
	docElement.classList.add('transition');
	window.setTimeout(() => {
		docElement.classList.remove('transition')
	}, 1000)
	if (value === "dark" || checkElement.checked) {
		checkElement.checked = "true";
		docElement.setAttribute('data-theme', 'dark');
		localStorage.setItem("mode","dark")
	} else {
		checkElement.checked = false;
		docElement.setAttribute('data-theme', 'light');
		localStorage.setItem("mode","light")
	}
}

// Window Loads
$(function () {
	let bodyElement = $(`body`);
	bodyElement.prepend(header);
	bodyElement.append(footer);
	activeTab();
	if(localStorage["mode"])
	{
		changeTheme(localStorage["mode"]);
	}
})

window.onscroll = function () {
	scrollFunction();
};

function openNav() {
	document.getElementById("myNav").style.display = "block";

  }
  
  function closeNav() {
	document.getElementById("myNav").style.display = "none";
  }