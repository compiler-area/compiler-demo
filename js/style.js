$(document).ready(function() {
   $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height() / 2){
            $(".navbar").css({"padding":"15px" , "box-shadow" : "3px 19px 102px 1px #000"});
            $(".navbar").addClass("bg-white navbar-light").removeClass("nav-trans navbar-dark");

        }
        else{
            $(".navbar").css({"padding":"30px" , "box-shadow" : "none"});
            $(".navbar").removeClass("bg-white navbar-light").addClass("nav-trans navbar-dark");
        }
    });

    // /////////////// colors ///////////////

        var colorLi = $(".color-option ul li");
        colorLi

      .eq(0).css("background","rgb(0, 189, 170)").end()
      .eq(1).css("background","rgb(235, 69, 89)").end()
      .eq(2).css("background","rgb(32, 64, 81)").end()
      .eq(3).css("background","rgb(114, 27, 101)").end()
      .eq(4).css("background","rgb(255, 164, 27)").end()
      // .eq(5).css("background","#000");

      $(".color-option ul li").click(function()
      {
        $(':root').css({
          // '--myprimeColor': $(this).css("background-color") ,
        });
        if( $(this).css("background-color") == "rgb(0, 189, 170)" ){
          $(':root').css({
            '--myprimeColor': $(this).css("background-color") ,
            '--myprimeColorblack': "rgb(64, 0, 130)",
            '--primeFontColor' : '#df154f'
          });
        } else if( $(this).css("background-color") == "rgb(235, 69, 89)" ){
          $(':root').css({
            '--myprimeColor': $(this).css("background-color") ,
            '--myprimeColorblack': "#f78259" ,
            '--primeFontColor' : '#aeefec'
          });
        } else if( $(this).css("background-color") == "rgb(32, 64, 81)" ){
          $(':root').css({
            '--myprimeColor': $(this).css("background-color") ,
            '--myprimeColorblack': "#3b6978",
            '--primeFontColor' : "#f57b51"
          });
        } else if( $(this).css("background-color") == "rgb(114, 27, 101)" ){
          $(':root').css({
            '--myprimeColor': $(this).css("background-color") ,
            '--myprimeColorblack': "#b80d57",
            '--primeFontColor' : "#c69eab"
          });
        } else if( $(this).data("background-color") == "rgb(255, 164, 27)" ){
          $(':root').css({
            '--myprimeColor': $(this).css("background-color") ,
            '--myprimeColorblack': "#be7d1c",
            '--primeFontColor' : "#000839"
          });
        } else if( $(this).data("value") == "black" ){
          $(':root').css('--myprimeColor', (color = ["rgb(0, 189, 170)", "rgb(235, 69, 89)", "rgb(32, 64, 81)", "rgb(114, 27, 101)", "rgb(255, 164, 27)"])[Math.floor(Math.random() * color.length)]);
          $(':root').css('--myprimeColorblack', (color = ["rgb(64, 0, 130)", "#f78259", "#3b6978", "#b80d57", "#be7d1c"])[Math.floor(Math.random() * color.length)]);
          $(':root').css('--primeFontColor', (color = ["#df154f", "#aeefec", "#f57b51", "#c69eab", "#000839"])[Math.floor(Math.random() * color.length)]);
            }
      });

    // /////////////// colors ///////////////

    //////////////// carosel ///////////////
    $('.carosel-control-right').click(function() {
            $(this).blur();
            $(this).parent().find('.carosel-item').first().insertAfter($(this).parent().find('.carosel-item').last());
            });
            $('.carosel-control-left').click(function() {
            $(this).blur();
            $(this).parent().find('.carosel-item').last().insertBefore($(this).parent().find('.carosel-item').first());
            });
    //////////////// carosel ///////////////
});
