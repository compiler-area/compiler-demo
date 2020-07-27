$(document).ready(function() {
   $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".fixed-top").css({"padding":"15px"});
            $(".fixed-top").addClass("bg-white").removeClass("nav-trans");

        }
        else{
            $(".fixed-top").css({"padding":"30px"});
            $(".fixed-top").removeClass("bg-white").addClass("nav-trans");
        }
    });
});
