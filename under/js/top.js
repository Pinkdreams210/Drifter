$(function () {
	"use strict";
	var obj = {
		init: function () {
			this.MainImg();
		},
		
		
		MainImg: function () {
			$(window).bind('load resize', function () {
				var vw = $(window).width();
				if (vw > 640) {
					$('.skitter-large-box-pc').addClass('flag');
					$('.skitter-large-box-sp').removeClass('flag');
				} else {
					$('.skitter-large-box-pc').removeClass('flag');
					$('.skitter-large-box-sp').addClass('flag');
				}
				$('.skitter-large-box').each(function () {
					var check = $(this),
						key = $(this).find('.skitter-large');
					if (check.hasClass('flag')) {
						key.skitter({
						animation: 'random',
						controls: false,
						dots:false,
						navigation:true,
						label:true,
						stop_over:false,
						interval: 4000,
						});
					}
				});
			});
		},

};

obj.init();

});