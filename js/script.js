$('.main').hover(function(){
  $(".main").hover(function () {
    $(this).children(".second").show();
    $(".img8").css({
      opacity:0.6
  });
  });
  $(".main").mouseleave(function(){
          $(".img8").css({
            opacity:0.9
        });
        $(".second").hide();
  });
});
$(document).ready(function() {
  $(".click1").click(function() {
    $(".hide1").slideToggle();
  });
  $(".click2").click(function() {
      $(".hide2").slideToggle();
});
$(".click3").click(function() {
  $(".hide3").slideToggle();
});

  // $(".work1").mouseover(function(){
  //   $(".work1a").show();

  // }).mouseout(function(){
  //   $(".work1a").hide();
  // })

  $(function(){
    $(".work1").mouseover(function(){
      $(".work1a").show();
    }).mouseleave(function() {
      $(".work1a").hide();
    })
  })

  $(function(){
    $(".work2").mouseover(function(){
      $(".work2a").show();
    }).mouseleave(function() {
      $(".work2a").hide();
    })
  })

  $(function(){
    $(".work3").mouseover(function(){
      $(".work3a").show();
    }).mouseleave(function() {
      $(".work3a").hide();
    })
  })

  $(function(){
    $(".work4").mouseover(function(){
      $(".work4a").show();
    }).mouseleave(function() {
      $(".work4a").hide();
    })
  })

  $(function(){
    $(".work5").mouseover(function(){
      $(".work5a").show();
    }).mouseleave(function() {
      $(".work5a").hide();
    })
  })

  $(function(){
    $(".work6").mouseover(function(){
      $(".work6a").show();
    }).mouseleave(function() {
      $(".work6a").hide();
    })
  })

  $(function(){
    $(".work7").mouseover(function(){
      $(".work7a").show();
    }).mouseleave(function() {
      $(".work7a").hide();
    })
  })

  $(function(){
    $(".work8").mouseover(function(){
      $(".work8a").show();
    }).mouseleave(function() {
      $(".work8a").hide();
    })
  })


  $("button").click(function(){
    var name = document.getElementById("text1").value;
    var email = document.getElementById("text2").value;
    var message = document.getElementById("text3").value;
    if (name===""){
      alert("enter your name")
    }
    else
    if(email===""){
      alert("enter your email")
    }
    else
    if(message===""){
      alert("type text")
    }
    else{
      alert("Dear " +   name + " we have received your message successfully." +
      " Feel free to reach out to us anytime. Click Ok to continue to the next page");
    }
  });



  });
