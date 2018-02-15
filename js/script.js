$(document).ready(function() {
	var bodyToggle = $('body');

    var img = new Image();
	    img.src = 'images/main_banner.jpg';
	    if (img.src){
	     var int = setInterval(function() {
	      if (img.complete) {
	          clearInterval(int);
	          $('.main-banner').addClass("banner-image")
	      }  
	  }, 100);
	}
    /*****************************
    // Tab menu services inner page
    // ******************************/ 
    $('.tab_menu_login ul li a').click(function(e) {
        $('.tab_menu_login ul li a').removeClass('active');

        $(this).addClass('active');

        var click_tab = $(this).attr('href');

        $('.login_tab_content').not(click_tab).css("display", "none");
        $(click_tab).fadeIn('fast');

        e.preventDefault();
    });

    $('.testimonial-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    dots: true,
	    nav:true,
	    items: 1
	});

	$('#compare_our_rates_mobile').owlCarousel({
	    loop:false,
	    margin:10,
	    dots: true,
	    nav:false,
	    autoHeight:true,
	    items: 1
	});

    $('#mobile_loginToAccount').click(function() {
		$('.loginTab-wrapper').fadeToggle();
		bodyToggle.toggleClass('overflow-hidden');
	});
	$('.closeLogin_wrapper').click(function() {
		$(this).parents('.loginTab-wrapper').fadeOut();
		bodyToggle.removeClass('overflow-hidden');
	});
	$('.toggle-nav').click(function() {
		bodyToggle.toggleClass('collapse_menu');
	});

    // DROPDOWN MENU ON MOBILE
    var mobileMenuDropdown = $(window).width();
	if(mobileMenuDropdown<=768) {
		$('.main-nav ul>li>a').click(function(e) {
			$('.main-nav ul li.dropdown ul.dropdown-menu').slideUp().prev().removeClass('active'), 
			$(this).next().is(':visible') || $(this).next().slideDown().prev().addClass('active');
			e.stopPropagation()
		});
	}
	$(window).resize(function(){
		var mobileMenuDropdown = $(window).width();
		if(mobileMenuDropdown>=768) {
			$('body').removeClass('overflow-hidden');
			$('.main-nav ul li.dropdown ul.dropdown-menu').removeAttr('style');
			$('.loginTab-wrapper').removeAttr('style');
		}
	});

	// MEDIA QUERY JS
	// $(window).resize(function(){
	// 	var windowWidth = $(window).width();
	// 	if(windowWidth<=768) { 
	// 		$('#mobile_loginToAccount').after($('.cta-banner'));
	// 	}
	// 	var windowWidth = $(window).width();
	// 	if(windowWidth>=768) { 
	// 		$('.main-banner-intro p').after($('.cta-banner'));
	// 	}
	// });

	// var windowWidth = $(window).width();
	// if(windowWidth<=768) { 
	// 	$('#mobile_loginToAccount').after($('.cta-banner'));
	// }
	

	$('.btn_modal').click(function(e){
        var myelement = $(this).attr('href')
            $(myelement).toggleClass('fast_show');
        $('.show_modal:visible').not(myelement).removeClass('fast_show');
        $('body').addClass('removebody');

        e.preventDefault();
    });

    $('.close-modal, .modal_btn_close').click(function(e){
        $('.show_modal').removeClass('fast_show');
        $('body').removeClass('removebody');

        e.preventDefault();
    });

});