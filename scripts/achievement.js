$(document).ready(function(){
  var zindex = 10;
  
  $("div.project-card").click(function(e){
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
          .css({zIndex: zindex})
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
        .css({zIndex:zindex})
		.addClass("show");
		$('#proshow').addClass('margin-button');
		$('#probtn2').addClass('margin-button2'); 
		let button = $($(this)[0].children[1].children[0]);
		button.empty();
		button.append(`<i class="fa fa-chevron-up"></i>`)	
      zindex++;
    }
    
  });
});