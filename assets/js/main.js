(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		$(".embed-responsive iframe").addClass("embed-responsive-item");
		$(".carousel-inner .item:first-child").addClass("active");

		$('[data-toggle="tooltip"]').tooltip();

		$("#mobile-menu-active").meanmenu({
			meanScreenWidth: "767",
			meanMenuContainer: ".menu-prepent",
		});

		$(".menu-open").click(function () {
			$(".body-left-bar").toggleClass("activee");
			$(".menu-open").toggleClass("toggle");
		});

		$(".fetures-slider").owlCarousel({
			items: 1,
			nav: false,
			dot: true,
			loop: true,
			margin: 20,
			autoplay: false,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsiveClass: true,
		});
		$(".hro-slider-active").owlCarousel({
			items: 1,
			nav: true,
			dots: false,
			loop: true,
			margin: 0,
			autoplay: false,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsiveClass: true,
			navText: [
				'<img src="./assets/img/la.png" alt="">',
				'<img src="./assets/img/ra.png" alt="">',
			],
		});
		$(".hro-faction-slider-active").owlCarousel({
			items: 1,
			nav: true,
			dots: false,
			loop: true,
			margin: 0,
			autoplay: false,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsiveClass: true,
			navText: [
				'<img src="./assets/img/light-left-arrow.svg" alt="">',
				'<img src="./assets/img/light-right-arrow.svg" alt="">',
			],
		});
		$(".fet-news-slider").owlCarousel({
			items: 2,
			nav: false,
			dots: false,
			loop: true,
			margin: 20,
			autoplay: false,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsiveClass: true,
			navText: [
				'<img src="./assets/img/la.png" alt="">',
				'<img src="./assets/img/ra.png" alt="">',
			],
			responsive: {
				0: {
					items: 1,
				},
				767: {
					items: 2,
				},
				992: {
					items: 2,
				},
			},
		});
		$(".game-chart-list-slider").owlCarousel({
			items: 3,
			nav: true,
			dots: false,
			loop: true,
			margin: 20,
			autoplay: false,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsiveClass: true,
			navText: [
				'<img src="./assets/img/left-Arrow.svg" alt="">',
				'<img src="./assets/img/Right-Arrow.svg" alt="">',
			],
			responsive: {
				0: {
					items: 3,
					nav: false,
				},
				767: {
					items: 3,
				},
				992: {
					items: 3,
				},
			},
		});
		$(".universe-logo-slider").owlCarousel({
			items: 4,
			nav: false,
			dots: true,
			loop: true,
			margin: 20,
			autoplay: false,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsiveClass: true,
			navText: [
				'<img src="./assets/img/left-Arrow.svg" alt="">',
				'<img src="./assets/img/Right-Arrow.svg" alt="">',
			],
			responsive: {
				0: {
					items: 4,
					nav: false,
				},
				767: {
					items: 4,
				},
				992: {
					items: 4,
				},
			},
		});
		$(".factions-items").owlCarousel({
			items: 4,
			nav: false,
			dots: true,
			loop: false,
			margin: 20,
			autoplay: false,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsiveClass: true,
			navText: [
				'<img src="./assets/img/left-Arrow.svg" alt="">',
				'<img src="./assets/img/Right-Arrow.svg" alt="">',
			],
			responsive: {
				0: {
					loop: true,
					items: 1,
					nav: false,
					stagePadding: 70,
				},
				767: {
					items: 3,
					loop: true,
				},
				992: {
					items: 4,
				},
			},
		});
		$(".discover-other-faction-lists ").owlCarousel({
			items: 3,
			nav: false,
			dots: false,
			loop: false,
			margin: 20,
			autoplay: false,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsiveClass: true,
			navText: [
				'<img src="./assets/img/left-Arrow.svg" alt="">',
				'<img src="./assets/img/Right-Arrow.svg" alt="">',
			],
			responsive: {
				0: {
					loop: true,
					items: 1,
					nav: false,
					stagePadding: 70,
				},
				767: {
					items: 3,
					loop: true,
				},
				992: {
					items: 3,
				},
			},
		});
		$(".related-news-slider-active ").owlCarousel({
			items: 3,
			nav: false,
			dots: false,
			loop: false,
			margin: 20,
			autoplay: false,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsiveClass: true,
			navText: [
				'<img src="./assets/img/left-Arrow.svg" alt="">',
				'<img src="./assets/img/Right-Arrow.svg" alt="">',
			],
			responsive: {
				0: {
					loop: true,
					items: 1,
					nav: false,
					stagePadding: 70,
				},
				767: {
					items: 2,
					loop: true,
				},
				992: {
					items: 3,
				},
			},
		});
		$(".vanguards-items-slider").owlCarousel({
			items: 4,
			nav: false,
			dots: true,
			loop: false,
			margin: 20,
			autoplay: false,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsiveClass: true,
			navText: [
				'<img src="./assets/img/left-Arrow.svg" alt="">',
				'<img src="./assets/img/Right-Arrow.svg" alt="">',
			],
			responsive: {
				0: {
					loop: true,
					items: 2,
					nav: false,
					stagePadding: 50,
				},
				767: {
					items: 3,
					loop: true,
				},
				992: {
					items: 4,
				},
			},
		});
		$(".immortals-slider-active").owlCarousel({
			items: 3,
			nav: true,
			dots: true,
			loop: true,
			margin: 20,
			autoplay: false,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsiveClass: true,
			navText: [
				'<img src="./assets/img/left-Arrow.svg" alt="">',
				'<img src="./assets/img/Right-Arrow.svg" alt="">',
			],
			responsive: {
				0: {
					items: 1,
					nav: false,
					stagePadding: 70,
				},
				767: {
					items: 3,
				},
				992: {
					items: 3,
				},
			},
		});
		$(".share-immortal-slider").owlCarousel({
			items: 7,
			nav: true,
			dots: true,
			loop: true,
			margin: 20,
			autoplay: false,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			responsiveClass: true,
			navText: [
				'<img src="./assets/img/left-Arrow.svg" alt="">',
				'<img src="./assets/img/Right-Arrow.svg" alt="">',
			],
			responsive: {
				0: {
					items: 1,
					nav: false,
					stagePadding: 70,
				},
				767: {
					items: 5,
					nav: false,
				},
				992: {
					items: 7,
				},
			},
		});

		$(".tb-1").click(function (e) {
			$(this).addClass("active").siblings().removeClass("active");
			$(".tb-content-1").addClass("active").siblings().removeClass("active");
			e.preventDefault();
		});
		$(".tb-2").click(function (e) {
			$(this).addClass("active").siblings().removeClass("active");
			$(".tb-content-2").addClass("active").siblings().removeClass("active");
			e.preventDefault();
		});
		$(".tb-3").click(function (e) {
			$(this).addClass("active").siblings().removeClass("active");
			$(".tb-content-3").addClass("active").siblings().removeClass("active");
			e.preventDefault();
		});
		mobileMenu();
		popUpModalAction();
		venoboxPopUpModal();
		$(".trigger-collapsed").click(function (e) {
			$(this).siblings(".nav").slideToggle("slow");
			e.preventDefault();
		});
	});

	jQuery(window).load(function () {});
})(jQuery);
//===== mobileMenu
function mobileMenu() {
	$(".menu-open").click(function () {
		$(".mobile-menu-area , .overlay , body").toggleClass("active");
	});
	$(".menu-close , .overlay").click(function () {
		$(".mobile-menu-area").removeClass("active");
		$(".overlay").removeClass("active");
		$("body").removeClass("active");
	});
}

//popup
function popUpModalAction() {
	popUpActive(".pt-n-one", ".popup-n-one");

	//1st parameter for button trigger and 2nd parameter for popup content
	function popUpActive(triggerElem, popup) {
		$(triggerElem).click(function (e) {
			$(popup).addClass("active");
			$(".popup-overlay").addClass("active");
			e.preventDefault();
		});
		$(".popup-overlay , .popup-close").click(function () {
			$(".popup-overlay").removeClass("active");
			$(popup).removeClass("active");
			$(".popup-area").removeClass("active");
		});
	}
}

function venoboxPopUpModal() {
	$(".venobox").venobox();
}
