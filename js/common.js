$(document).ready(function () {
	
	// Callback popup
	$('.js-callback').on('click',function (e) {
		e.preventDefault();

		$('#overlay').show();
		$('body').addClass('noscroll');
		$('.callback-popup').addClass('active');
	});

	$('.popup__close, #overlay').on('click',function (e) {
		e.preventDefault();

		$('#overlay').hide();
		$('body').removeClass('noscroll');
		$('.callback-popup').removeClass('active');
	});

	$('.dropdown-link a').on('click',function (e) {
		e.preventDefault();

		$(this).closest('.dropdown-link').toggleClass('active');
	});

	// dropdown menu
	$('.header__main__menu').on('click', 'a', function (e) {
		e.preventDefault();

		$(this).closest('li').toggleClass('active')
	});

	// mobile menu
	$('.menu-btn').on('click',function () {
		$('body').addClass('noscroll');
		$('.mobile-menu').addClass('active');
		$('#overlay').show();
	});

	$('.menu-close, #overlay').on('click',function (e) {
		e.preventDefault();

		$('body').removeClass('noscroll');
		$('.mobile-menu').removeClass('active');
		$('#overlay').hide();
	});

	// подменю в блоке каталога
	$('.catalog-block__item').on('click', function () {
		$('.catalog-block__submenu').addClass('active');

		var title = $(this).find('.catalog-block__title').text();
		var img = $(this).find('.catalog-block__img').attr('src');

		$('.catalog-block__submenu').find('.catalog-block__title').text(title);
		$('.catalog-block__submenu').find('.catalog-block__img').attr('src', img);
	});

	$('.js-close-submenu').on('click', function (e) {
		e.preventDefault();



		$('.catalog-block__submenu').removeClass('active');
	});

	// slider
	$('.main-slider').slick({
		dots: true
	});

})