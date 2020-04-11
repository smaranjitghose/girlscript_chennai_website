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
      $("div.project-card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.achievement-card")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no achievement-card in view
      $("div.achievement-card")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});