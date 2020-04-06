let header = $(`
<nav class="navbar fixed-top navbar-expand-lg" id="navbar">
  <a class="navbar-brand" href="index.html"><img src="assets/Images/transparent_logo.png" width="64px" id="logo"></a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	  <span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse " id="navbarNav">
	  <ul class="navbar-nav ml-5">
		<li class="nav-item ">
		  <a class="nav-link pr-4"  href="index.html">HOME</a>
		</li>
		<li class="nav-item">
		  <a class="nav-link pr-4" href="announcements.html">ANNOUNCEMENTS</a>
		</li>
		<li class="nav-item">
		  <a class="nav-link pr-4" href="team.html">OUR TEAM</a>
		</li>
		<li class="nav-item">
			<a class="nav-link pr-4" href="achievements.html">OUR ACHIEVEMENTS</a>
		</li>
		  <li class="nav-item">
			<a class="nav-link pr-4" href="blogs.html"><span>BLOGS</span></a>
		</li>
		<li class="nav-item">
			<a class="nav-link pr-4" href="contactUs.html">CONTACT US</a>
		</li>

	  </ul>
	</div>
  </nav>`)
let footer = $(`
<footer>
<div class=container>
  <div class="row">
	<div class="col-lg-6 col-md-4 footer-logo">
	  <center>
		<img src="assets/Images/transparent_logo.png" alt="" class="logo">
	  </center>
	</div>
	<div class="col-lg-6 col-md-8" id="footer-c">
	  <br>

	  <h3 class="footer-h">Join Our Newsletter</h3>
	  <div class="border"></div>
	  <p class="footer-p">Enter Your Email to get our news and updates.</p>
	  <form action="" class="newsletter-form" >
	   <input type="email" class="txtb" placeholder="Enter Your Email" required >
	   <button class="btn btn-spl">Send</button>
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
		  <h6 class="footer-h3">© 2020 GirlScript Chennai All Rights Reserved.</h6>
</center>
</div>

</footer>`);  
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);
mybutton = document.getElementById("toTop");
function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
	  document.getElementById("navbar").style.padding = "1px 16px";
	  document.getElementById("logo").width = "45px";
	} else {
	  document.getElementById("navbar").style.padding = "8px 16px";
	  document.getElementById("logo").style.width = "60px";
	}
  }
window.onscroll = function() {scrollFunction()};

function activeTab(){
	let navBar = $('#navbarNav')
	let navItems = navBar[0].children[0].children;
	let pageName = window.location.pathname.toLowerCase();
	for(let i=0 ; i< navItems.length ; i++ )
	{	let childHref = navItems[i].children[0].pathname.toLowerCase();
		if((childHref === pageName || childHref.includes(pageName)) && window.location.pathname !== '/')
		navItems[i].children[0].classList.add("active")
		else navItems[i].children[0].classList.remove("active")
	}
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
activeTab();