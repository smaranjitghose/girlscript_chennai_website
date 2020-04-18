$(document).ready(function () {
	var zindex = 10;

	$("div.project-card").click(function (e) {
		e.preventDefault();

		var isShowing = false;

		if ($(this).hasClass("show")) {
			isShowing = true
		}

		if ($("div.achievement-card").hasClass("showing")) {
			// a card is already in view
			let button = $("i.fa-chevron-up");
			button.removeClass('fa-chevron-up')
			button.addClass('fa-chevron-down')
			let div = $("div.project-card.show")
			div.removeClass('show');

			if (isShowing) {
				// this card was showing - reset the grid
				$("div.achievement-card")
					.removeClass("showing");
				$("#proshow").removeClass("margin-button")
				$('#probtn2').removeClass('margin-button2')
				let button = $($(this)[0].children[1].children[0]);
				button.empty();
				button.append(`<i class="fa fa-chevron-down"></i>`)
			} else {
				// this card isn't showing - get in with it
				$(this)
					.css({ zIndex: zindex })
					.addClass("show");
				$('#proshow').addClass('margin-button');
				$('#probtn2').addClass('margin-button2');
				let button = $($(this)[0].children[1].children[0]);
				button.empty();
				button.append(`<i class="fa fa-chevron-up"></i>`)

			}

			zindex++;

		} else {
			// no achievement-card in view
			$("div.achievement-card")
				.addClass("showing");
			$(this)
				.css({ zIndex: zindex })
				.addClass("show");
			$('#proshow').addClass('margin-button');
			$('#probtn2').addClass('margin-button2');
			let button = $($(this)[0].children[1].children[0]);
			button.empty();
			button.append(`<i class="fa fa-chevron-up"></i>`)
			zindex++;
		}

	});

	//   Counter Update
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// Cards - WayPoint
	$('.card1').waypoint(function(direction) {
		$('.card--1').addClass('animated bounceInLeft')
	  }, {
		offset: '60%'
	  });

	  $('.card--2').waypoint(function(direction) {
		$('.card--2').addClass('animated zoomIn')
	  }, {
		offset: '60%'
	  });

	  $('.card--3').waypoint(function(direction) {
		$('.card--3').addClass('animated bounceInRight')
	  }, {
		offset: '60%'
	  });

});

function showMoreCards(DOMbtn){
	let btn = $(DOMbtn)
	let showMore = btn.attr('show-more')
	let moreCardDiv = $('#moreCards')
	if(showMore == "false")
	{	btn.empty();
		btn.append('Show Less')
		btn.attr("show-more","true")
		moreCardDiv.removeClass("hidediv");
	}
	else{
		btn.empty();
		btn.append("Show More");
		btn.attr("show-more","false")
		moreCardDiv.addClass('hidediv');
	}
	
}