$(document).ready(function() {
   $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".fixed-top").css({"padding":"15px" , "box-shadow" : "3px 19px 102px 1px #000"});
            $(".fixed-top").addClass("bg-white navbar-light").removeClass("nav-trans navbar-dark");

        }
        else{
            $(".fixed-top").css({"padding":"30px" , "box-shadow" : "none"});
            $(".fixed-top").removeClass("bg-white navbar-light").addClass("nav-trans navbar-dark");
        }
    });
});
