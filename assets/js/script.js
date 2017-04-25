$(document).ready(function(){

  var href = $('nav--item').attr('href');
  $("a").hover(function () {
      $(this).css("color","gold")
    }
  );
    $("a").mouseout(function(){
        $(this).css('color', 'black');
    }
  );


  $(".submit").click(function(){
      $(".submitbox").show(300);
  }
  );

  $(".close--button").click(function(){
      $(".submitbox").hide(300);
  }
  );

});

console.log("hi")
