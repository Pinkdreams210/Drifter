// JavaScript Document
$(function() {
    "use strict";
  var obj= {
	  init: function(){
		    this.toTop();
			this.smoothScroll();
			this.iconMenu();	
			this.subMenu();	
			this.changeSize();		
	  },
	  //totop
	  toTop: function(){
		  $("#totop").hide();
		  $(window).scroll(function(){
			  if($(this).scrollTop() > 100){				  
				  $("#totop").fadeIn();
			  }
			  else{
				  $("#totop").fadeOut();				  
			  }
		  });
		  $("#totop a").click(function(){
			 $('body,html').animate({
				scrollTop:0 
			 }, 500);
			 return false;
		  });
	  },
	  //smoothScroll
	  smoothScroll : function(){
			$('a[href^="#"]').click(function(){
				var wWidth = $(window).width();
					if ( $( $(this).attr('href')).length ) {
						var p = $( $(this).attr('href') ).offset();
						if(wWidth <= 640){
							$('html,body').animate({ scrollTop: p.top - 60}, 500);
							$('#sp-gnavi').removeClass('open');
						} else {
							$('html,body').animate({ scrollTop: p.top - 80}, 500);
						}
					}
				return false;
			});
		},
		
	 //Sub-menu 
      subMenu: function() {
	$('#gnavi li.active').addClass('open').children('ul').show();
	$('#gnavi li.has02>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});
				
            /*$(window).bind('resize load scroll', function() {
                var ww = $(window).width();
                var hHead = $('#header').outerHeight();
                var pTop = $(this).scrollTop();
                if (ww > 640) {
                    $('.menu-icon').removeClass('active');
                    $('#gnavi').removeAttr('style');
                    $('#mainvisual').removeAttr('style');
                    $('#header').removeAttr('style');
                    $('#index #content').removeAttr('style');
                    $('#footer').removeAttr('style');
                    if (pTop > hHead) {
                        $('#gnavi').addClass('fixed');
                    } else {
                        $('#gnavi').removeClass('fixed');
                        $('#mainvisual').removeAttr('style');
                    }
                } else {

                    $("#gnavi").css({
                        'height': 'calc(100% - ' + hHead + 'px)'
                    });
                    if (pTop > 112) {

                        $("#sp-follow").fadeIn();
                        $("#header").addClass('fixed');
                    } else {
                        $("#sp-follow").fadeOut();
                        $("#header").removeClass('fixed');
                    }
                    $('#gnavi').removeClass('fixed');
                }
            });*/
        },
		
	 //sp gnavi	 
      iconMenu: function() {
            $('.menu-icon').removeClass('active');
            $('.has').removeClass('active');
            $('.menu-icon').click(function() {
                $(this).toggleClass('active');
                $('#gnavi').stop().slideToggle();
                $('.sub').slideUp(800);
                $('.has.active').removeClass('active');
                $('.sub02').slideUp(800);
                $('.has02.active').removeClass('active');
            });
            $('#gnavi > .has > a').click(function() {
                $(this).parent().toggleClass('active');
                $(this).parent().find(".sub").stop(0).slideToggle();
            });
            $('#gnavi .has02 a').click(function() {
                $(this).parent().toggleClass('active');
                $(this).parent().find(".sub02").stop(0).slideToggle();
            });
            $('#gnavi .close > a').click(function() {
                $('#gnavi').slideUp(800);
                $('.menu-icon').removeClass('active');
                $('.has').removeClass('active');
                $('.sub').removeAttr('style');
                $('.has02').removeClass('active');
                $('.sub02').removeAttr('style');
				
            /*$(window).bind('resize load scroll', function() {
                var ww = $(window).width();
                var hHead = $('#header').outerHeight();
                var pTop = $(this).scrollTop();
                if (ww > 640) {
                    $('.menu-icon').removeClass('active');
                    $('#gnavi').removeAttr('style');
                    $('#mainvisual').removeAttr('style');
                    $('#header').removeAttr('style');
                    $('#index #content').removeAttr('style');
                    $('#footer').removeAttr('style');
                    if (pTop > hHead) {
                        $('#gnavi').addClass('fixed');
                    } else {
                        $('#gnavi').removeClass('fixed');
                        $('#mainvisual').removeAttr('style');
                    }
                } else {

                    $("#gnavi").css({
                        'height': 'calc(100% - ' + hHead + 'px)'
                    });
                    if (pTop > 112) {

                        $("#sp-follow").fadeIn();
                        $("#header").addClass('fixed');
                    } else {
                        $("#sp-follow").fadeOut();
                        $("#header").removeClass('fixed');
                    }
                    $('#gnavi').removeClass('fixed');
                }
            });*/
            });
        },
	
	 //change size	
	 changeSize : function() {
            $(window).bind('resize load', function() {
                var ww = $(window).width();
				if(ww > 640){
					  $('.sub').removeAttr('style');
                     $('.menu-icon').removeClass('active');
					$('#gnavi').removeAttr('style');
				}else{
					 $('#gnavi .has > a').click(function(){
						$(this).toggleClass('active'); 
						 $(this).next('.sub').stop().slideToggle();
						 
					 });
					
				}
			});
		 
		 },
  };
  
  obj.init();
});


