"use strict";

$(function () {
	//   Counter Update
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// Cards - WayPoint
	$('.card--1').waypoint(
		function (direction) {
			$('.card--1').addClass('animated bounceInLeft');
		},
		{
			offset: '60%'
		}
	);

	$('.card--2').waypoint(
		function (direction) {
			$('.card--2').addClass('animated zoomIn');
		},
		{
			offset: '60%'
		}
	);

	$('.card--3').waypoint(
		function (direction) {
			$('.card--3').addClass('animated bounceInRight');
		},
		{
			offset: '60%'
		}
	);
});

function showMoreCards(DOMbtn) {
	let btn = $(DOMbtn);
	let showMore = btn.attr('show-more');
	let moreCardDiv = $('#moreCards');
	if (showMore == 'false') {
		btn.empty();
		btn.append('Show Less');
		btn.attr('show-more', 'true');
		moreCardDiv.removeClass('hidediv');
	} else {
		btn.empty();
		btn.append('Show More');
		btn.attr('show-more', 'false');
		moreCardDiv.addClass('hidediv');
		// Card opened from more cards - then -
		let moreDivFlag = false;
		for (let i of moreCardDiv[0].children) {
			moreDivFlag = i.classList.value.includes('show') ? true : false;
			i.classList.remove('show');
			if (moreDivFlag) {
				btn.removeClass('margin-button');
				moreCardDiv[0].parentElement.classList.remove('showing');
				break;
			}
		}
	}
}

function displayCard(domCard) {
	event.preventDefault();
	let clickedCard = $(domCard),
		achievementCard = $('div.achievement-card'),
		showBtn = $('#proshow'),
		chevronButton = $(clickedCard[0].children[1].children[0]);

	// Same Card Clicked
	if (clickedCard.hasClass('show')) {
		achievementCard.removeClass('showing');
		clickedCard.removeClass('show');
		chevronButton.empty();
		chevronButton.append(`<i class="fa fa-chevron-down"></i>`);
		showBtn.removeClass('margin-button');
	} else if (achievementCard.hasClass('showing')) {
		//Some other card is already open -
		// close that card and open current card;
		let div = $('div.project-card.show'),
			button = $(div[0].children[1].children[0]);
		div.removeClass('show');
		button.empty();
		button.append('<i class="fa fa-chevron-down"></i>');
		clickedCard.addClass('show');
		chevronButton.empty();
		chevronButton.append(`<i class="fa fa-chevron-up"></i>`);
	} else {
		achievementCard.addClass('showing');
		clickedCard.addClass('show');
		chevronButton.empty();
		chevronButton.append(`<i class="fa fa-chevron-up"></i>`);
		showBtn.addClass('margin-button');
	}
}

$(function () {
	$('.material-card > .mc-btn-action').click(function () {
		let card = $(this).parent('.material-card');
		let icon = $(this).children('i');

		if (card.hasClass('mc-active')) {
			card.removeClass('mc-active');

			window.setTimeout(function () {
				icon.removeClass('fa-arrow-left').addClass('fa-bars');
			}, 800);
		} else {
			card.addClass('mc-active');

			window.setTimeout(function () {
				icon.removeClass('fa-bars').addClass('fa-arrow-left');
			}, 800);
		}
	});
});
