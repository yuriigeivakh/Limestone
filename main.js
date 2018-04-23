$(document).ready(function(){
    $('.go_to').click( function(){ // catch a click
        var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { // to prevent an error
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // animation
        }
        return false; // выключаем стандартное действие
    });
    $('#menu').click(function(){

    	$('.menu_open').addClass('show');
    	$(document).bind( "mouseup touchend", function(e){
    	var container = $(".menu_open");
    	if (container.has(e.target).length === 0){
        	container.removeClass('show');
    		}
		});
    });
    //modal window
    	$('.js-button-campaign').click(function() { 
	
			$('.js-overlay-campaign').fadeIn();
			$('.js-overlay-campaign').addClass('disabled');
			});

		// 
			$('.js-close-campaign').click(function() { 
			$('.js-overlay-campaign').fadeOut();
			
			});

			// 
			$(document).mouseup(function (e) { 
				var popup = $('.js-popup-campaign');
				if (e.target!=popup[0]&&popup.has(e.target).length === 0){
					$('.js-overlay-campaign').fadeOut();
					
				}
		});
		$('.menu-trigger').click(function() {
		    $('nav ul').slideToggle(500);
		  });//end slide toggle
		  
			$(window).resize(function() {		
					if (  $(window).width() > 1200 ) {			
						$('nav ul').removeAttr('style');
					 }
		});
});