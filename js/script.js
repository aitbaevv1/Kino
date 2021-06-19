$(document).ready(function() {
	$('.header-burger').click(function() {
		$('.header-burger, .header-left__nav, body').toggleClass('active');
	});


	// new Swiper('.work-slider', {
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev'
	// 	},

	// 	scrollbar: {
	// 		el: '.swiper-scrollbar',
	// 		draggable: true
	// 	},
	// 	slidesPerView: 1,

	// 	autoHeight: true,
	// });

	// let x = $('.model-mobile');

	// for (var i = 0; i < x.length;i++) {
	// 	let el = x[i];

	// 	let swiper = el.getElementsByClassName('.model-slider')[0];
	// 	let nx = el.getElementsByClassName('.swiper-button-next')[0];
	// 	let pr = el.getElementsByClassName('.swiper-button-prev')[0];
	// }

	new Swiper('.model-slider', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},

			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			slidesPerView: 1,

			autoHeight: true,
	});
	new Swiper('.work-slider', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},

			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			slidesPerView: 1,

			autoHeight: true,
	});



	$('.services-slider').slick({
		slidesToShow: 1.3,
		infinite: false,
	});
	$('.model-content__item-slider').slick({
	});
	$('.model-mobile__slider').slick();

	$(function () {
	  var $videoContainer = $('.video-video'),
	    $videoControls = $('.video-control'),
	    $video = $('#myVideo')[0];

	  $videoControls.click(function () {
	    if ($video.paused) {
	      $video.play();
	      $videoContainer.addClass('video-is-playing');
	    } else {
	      $video.pause();
	      $videoContainer.removeClass('video-is-playing');
	      //  возвращаем постер
	      $video.load();
	    }
	  });
	});


})