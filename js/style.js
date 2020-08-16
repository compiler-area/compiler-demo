var colors = [] , savedcolors = [] ;
 savedcolors = JSON.parse(localStorage.getItem("col")) ||
 [
   $(this).data("primecolor") ,
   $(this).data("primecolorblack") ,
   $(this).data("primefontcolor") ,
   $(this).data("mythemetranspalent")
 ] ;

$(document).ready(function() {
   $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height() / 4){
            $(".main-nav").css({"padding":"15px" , "box-shadow" : "3px 19px 102px 1px #000"});
            $(".main-nav").addClass("bg-white navbar-light").removeClass("nav-trans navbar-dark");

        }
        else{
            $(".main-nav").css({"padding":"30px" , "box-shadow" : "none"});
            $(".main-nav").removeClass("bg-white navbar-light").addClass("nav-trans navbar-dark");
        }
    });

    // /////////////// colors ///////////////

      // var colorLi = $(".color-option ul li");
      // colorLi
      // .eq(0).css("background","rgb(0, 189, 170)").end()
      // .eq(1).css("background","rgb(235, 69, 89)").end()
      // .eq(2).css("background","rgb(255, 0, 0)").end()
      // .eq(3).css("background","rgb(0, 0, 170)").end()
      // .eq(4).css("background","rgb(0, 170, 68)").end();
      // // .eq(5).css("background","#000");

      $(':root').css({
        // '--myprimeColor': $(this).css("background-color") ,
        '--myprimeColor': savedcolors[0] ,
        '--myprimeColorblack':savedcolors[1] ,
        '--primeFontColor': savedcolors[2] ,
        '--myThemetranspalent': savedcolors[3],
      });

      $(".color-option ul li").click(function()
      {
        colors = [
          $(this).data("primecolor") ,
          $(this).data("primecolorblack") ,
          $(this).data("primefontcolor") ,
          $(this).data("mythemetranspalent")
        ];
        $(':root').css({
          // '--myprimeColor': $(this).css("background-color") ,
          '--myprimeColor': $(this).data("primecolor") ,
          '--myprimeColorblack':$(this).data("primecolorblack") ,
          '--primeFontColor': $(this).data("primefontcolor") ,
          '--myThemetranspalent':   $(this).data("mythemetranspalent")
        });
        // loocal storage
        localStorage.setItem("col", JSON.stringify(colors));
        savedcolors = JSON.parse(localStorage.getItem("col"));
        // loocal storage
        if( $(this).data("value") == "random"){
            $(':root').css({'--myprimeColor': "rgb("+ getRandomInteger(0,255) +" , " + getRandomInteger(0,255) + ", "+ getRandomInteger(0,255) +")",});
            $(':root').css({'--myprimeColorblack': "rgb("+ getRandomInteger(0,255) +" , " + getRandomInteger(0,255) + ", "+ getRandomInteger(0,255) +")",});
            $(':root').css({'--primeFontColor': "rgb("+ getRandomInteger(0,255) +" , " + getRandomInteger(0,255) + ", "+ getRandomInteger(0,255) +")",});
            $(':root').css({'--myThemetranspalent': "rgba("+ getRandomInteger(0,255) +" , " + getRandomInteger(0,255) + ", "+ getRandomInteger(0,255) +", .5 )",});
        }
        // if( $(this).css("background-color") == "rgb(0, 189, 170)" ){
        //   $(':root').css({
        //     '--myprimeColor': $(this).css("background-color") ,
        //     '--myprimeColorblack': "rgb(244, 0, 235)",
        //     '--primeFontColor' : 'rgb(80, 0, 77)',
        //     '--myThemetranspalent' : "rgb(0, 189, 170 , .5)"
        //   });
        // } else if( $(this).css("background-color") == "rgb(235, 69, 89)" ){
        //   $(':root').css({
        //     '--myprimeColor': $(this).css("background-color") ,
        //     '--myprimeColorblack': "#f78259" ,
        //     '--primeFontColor' : 'rgb(65, 106, 255)',
        //     '--myThemetranspalent' : "rgb(235, 69, 89 , .5)"
        //   });
        // } else if( $(this).css("background-color") == "rgb(255, 0, 0)" ){
        //   $(':root').css({
        //     '--myprimeColor': $(this).css("background-color") ,
        //     '--myprimeColorblack': "rgb(191,6,6)",
        //     '--primeFontColor' : "rgb(0,0,0)",
        //     '--myThemetranspalent' :  "rgb(255, 0, 0,.5)"
        //   });
        // } else if( $(this).css("background-color") == "rgb(0, 0, 170)" ){
        //   $(':root').css({
        //     '--myprimeColor': $(this).css("background-color") ,
        //     '--myprimeColorblack': "rgb(6,6,115)",
        //     '--primeFontColor' : "rgb(255,33,79)",
        //     '--myThemetranspalent' : "rgb(0, 0, 170,.5)"
        //   });
        // } else if( $(this).css("background-color") == "rgb(0, 170, 68)" ){
        //   $(':root').css({
        //     '--myprimeColor': $(this).css("background-color") ,
        //     '--myprimeColorblack': "rgb(6, 126, 54)",
        //     '--primeFontColor' : "rgb(5,56,26)",
        //     '--myThemetranspalent' : "rgb(0, 170, 68,.5)"
        //   });
        // } else if( $(this).data("value") == "random" ){
        //   // $(':root').css('--myprimeColor', (color = ["rgb(0, 189, 170)", "rgb(235, 69, 89)", "rgb(32, 64, 81)", "rgb(114, 27, 101)", "rgb(255, 164, 27)"])[Math.floor(Math.random() * color.length)]);
        //   // $(':root').css('--myprimeColorblack', (color = ["rgb(64, 0, 130)", "#f78259", "#3b6978", "#b80d57", "#be7d1c"])[Math.floor(Math.random() * color.length)]);
        //   // $(':root').css('--primeFontColor', (color = ["#df154f", "#aeefec", "#f57b51", "#c69eab", "#000839"])[Math.floor(Math.random() * color.length)]);
        //   $(':root').css({'--myprimeColor': "rgb("+ getRandomInteger(0,255) +" , " + getRandomInteger(0,255) + ", "+ getRandomInteger(0,255) +")",});
        //   $(':root').css({'--myprimeColorblack': "rgb("+ getRandomInteger(0,255) +" , " + getRandomInteger(0,255) + ", "+ getRandomInteger(0,255) +")",});
        //   $(':root').css({'--primeFontColor': "rgb("+ getRandomInteger(0,255) +" , " + getRandomInteger(0,255) + ", "+ getRandomInteger(0,255) +")",});
        //   $(':root').css({'--myThemetranspalent': "rgba("+ getRandomInteger(0,255) +" , " + getRandomInteger(0,255) + ", "+ getRandomInteger(0,255) +" "+ getRandomInteger(0,1) +")",});
        //   }
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


    // ================================== counter ==================================
    (function ($) {
    	$.fn.countTo = function (options) {
    		options = options || {};

    		return $(this).each(function () {
    			// set options for current element
    			var settings = $.extend({}, $.fn.countTo.defaults, {
    				from:            $(this).data('from'),
    				to:              $(this).data('to'),
    				speed:           $(this).data('speed'),
    				refreshInterval: $(this).data('refresh-interval'),
    				decimals:        $(this).data('decimals')
    			}, options);

    			// how many times to update the value, and how much to increment the value on each update
    			var loops = Math.ceil(settings.speed / settings.refreshInterval),
    				increment = (settings.to - settings.from) / loops;

    			// references & variables that will change with each update
    			var self = this,
    				$self = $(this),
    				loopCount = 0,
    				value = settings.from,
    				data = $self.data('countTo') || {};

    			$self.data('countTo', data);

    			// if an existing interval can be found, clear it first
    			if (data.interval) {
    				clearInterval(data.interval);
    			}
    			data.interval = setInterval(updateTimer, settings.refreshInterval);

    			// initialize the element with the starting value
    			render(value);

    			function updateTimer() {
    				value += increment;
    				loopCount++;

    				render(value);

    				if (typeof(settings.onUpdate) == 'function') {
    					settings.onUpdate.call(self, value);
    				}

    				if (loopCount >= loops) {
    					// remove the interval
    					$self.removeData('countTo');
    					clearInterval(data.interval);
    					value = settings.to;

    					if (typeof(settings.onComplete) == 'function') {
    						settings.onComplete.call(self, value);
    					}
    				}
    			}

    			function render(value) {
    				var formattedValue = settings.formatter.call(self, value, settings);
    				$self.html(formattedValue);
    			}
    		});
    	};

    	$.fn.countTo.defaults = {
    		from: 0,               // the number the element should start at
    		to: 0,                 // the number the element should end at
    		speed: 1000,           // how long it should take to count between the target numbers
    		refreshInterval: 100,  // how often the element should be updated
    		decimals: 0,           // the number of decimal places to show
    		formatter: formatter,  // handler for formatting the value before rendering
    		onUpdate: null,        // callback method for every time the element is updated
    		onComplete: null       // callback method for when the element finishes updating
    	};

    	function formatter(value, settings) {
    		return value.toFixed(settings.decimals);
    	}
    }(jQuery));

    jQuery(function ($) {
      // custom formatting example
      $('.count-number').data('countToOptions', {
    	formatter: function (value, options) {
    	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    	}
      });

      // start all the timers
      $('.timer').each(count);

      function count(options) {
    	var $this = $(this);
    	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    	$this.countTo(options);
      }
    });
    // ================================== counter ==================================

    $('#scroll-to-top').click(function () {
      //scroll back up
      $('html').animate({scrollTop:0}, 1500);
    });
    $('.scroll-to-down').click(function () {
      //scroll to see more
      $('html').animate({scrollTop:$('.carousel-inner').height()-$('nav').height()}, '500');
    });

    // ================================== owlcarousel ==================================
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            // 600:{
            //     items:2
            // },
            // // 1000:{
            // //     items:7
            // // }
        }
    })

});

// **************************************** get random number in range ****************************************
    function getRandomInteger(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
// **************************************** get random number in range ****************************************


// ****************************** function to darken the colors so imporstant ******************************
// function ColorLuminance(hex, lum) {
//     // validate hex string
//     hex = String(hex).replace(/[^0-9a-f]/gi, '');
//     if (hex.length < 6) {
//         hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
//     }
//     lum = lum || 0;
//     // convert to decimal and change luminosity
//     var rgb = "#", c, i;
//     for (i = 0; i < 3; i++) {
//         c = parseInt(hex.substr(i*2,2), 16);
//         c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
//         rgb += ("00"+c).substr(c.length);
//     }
//     return rgb;
// }
// var newColor = ColorLuminance("#00ff00", -0.5); // "#334d66" - 50% darker

//  ****************************** color Hex to RGP code ******************************
// function HEXtoRGB(hex) {
//     var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//     hex = hex.replace(shorthandRegex, function (m, r, g, b) {
//         return r + r + g + g + b + b;
//     });
//     var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     return result ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16)
//     } : null;
// }

// ******************************** scroll up and down ********************************
// $(document).ready(function() {
//     // scroll down
//     $("html, body").animate({
//         scrollTop: $(document).height()
//     }, 9000);
//
//     //scroll back up
//     $("html, body").animate({
//         scrollTop: 0
//     }, 9000);
// });

//  ****************************** color rgb to rgba code ******************************
// $(this).css('background-color').replace(')', ', 0.75)').replace('rgb', 'rgba');
// $new = $('.count-div').css('background-color').replace(')', ', 0.75)').replace('rgb', 'rgba'); $('.count-div').css('background-color' , $new);
// ********************************* get random number *********************************

// function getRandomInteger(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// ********************************* get random number *********************************
