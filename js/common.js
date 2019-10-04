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

	//  Псевдо селект
	$('.select').on('click','.placeholder',function(){
		var parent = $(this).closest('.select');
		if ( ! parent.hasClass('is-open')){
			parent.addClass('is-open');
			$('.select.is-open').not(parent).removeClass('is-open');
		}else{
			parent.removeClass('is-open');
		}
	}).on('click','ul>li',function(){
		var parent = $(this).closest('.select');
		parent.removeClass('is-open').find('.placeholder-text').text( $(this).text() );
		parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	});

	// Filter показать - скрыть
	$('.js-filter-btn').on('click',function () {
		$(this).toggleClass('hide-filter');
		$('.js-filter').slideToggle();
	})

	// dropdown в сайдбаре
	$('.drop-link').on('click', 'a', function (e) {
		e.preventDefault();

		$(this).closest('.drop-link').toggleClass('active');
	})

	// slider
	$('.main-slider').slick({
		dots: true,
		arrows: false
	});

	$('.product-slider').slick({
		slidesToShow: 4,
		prevArrow: '<span class="prev-arrow"><svg width="8" height="15" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 8 15"><g><g><path d="M7.6511,0.36771c0.44965,0.50163 0.44965,1.31512 0,1.81723l-4.74993,5.30414l4.74993,5.30454c0.44965,0.50211 0.44965,1.31559 0,1.81723c-0.44896,0.50163 -1.1774,0.50163 -1.62635,0l-5.12084,-5.71806c-0.21059,-0.0497 -0.41107,-0.16595 -0.57452,-0.34874c-0.25826,-0.28811 -0.36818,-0.6791 -0.32978,-1.05478c-0.0384,-0.37574 0.07153,-0.76684 0.32978,-1.05522c0.16349,-0.18267 0.36403,-0.29882 0.57468,-0.34845l5.12067,-5.71787c0.44896,-0.50163 1.1774,-0.50163 1.62635,0z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		nextArrow: '<span class="next-arrow"><svg width="8" height="15" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 8 15"><g><g><path d="M1.97439,0.36759l5.12028,5.71813c0.21056,0.04974 0.41102,0.16596 0.57438,0.34867c0.25786,0.28811 0.36762,0.6791 0.32927,1.05478c0.03834,0.37574 -0.07142,0.76684 -0.32927,1.05522c-0.16341,0.18258 -0.36393,0.2987 -0.57455,0.34838l-5.12012,5.71795c-0.44896,0.50163 -1.17809,0.50163 -1.62705,0c-0.44965,-0.50163 -0.44965,-1.31512 0,-1.81675l4.74996,-5.30457l-4.74996,-5.30457c-0.44965,-0.50163 -0.44965,-1.31512 0,-1.81723c0.44896,-0.50163 1.17809,-0.50163 1.62705,0z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 440,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.clients-slider').slick({
		slidesToShow: 1,
		appendArrows: '.clients-slider-arrows',
		prevArrow: '<span class="prev-arrow"><svg width="8" height="15" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 8 15"><g><g><path d="M7.6511,0.36771c0.44965,0.50163 0.44965,1.31512 0,1.81723l-4.74993,5.30414l4.74993,5.30454c0.44965,0.50211 0.44965,1.31559 0,1.81723c-0.44896,0.50163 -1.1774,0.50163 -1.62635,0l-5.12084,-5.71806c-0.21059,-0.0497 -0.41107,-0.16595 -0.57452,-0.34874c-0.25826,-0.28811 -0.36818,-0.6791 -0.32978,-1.05478c-0.0384,-0.37574 0.07153,-0.76684 0.32978,-1.05522c0.16349,-0.18267 0.36403,-0.29882 0.57468,-0.34845l5.12067,-5.71787c0.44896,-0.50163 1.1774,-0.50163 1.62635,0z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		nextArrow: '<span class="next-arrow"><svg width="8" height="15" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 8 15"><g><g><path d="M1.97439,0.36759l5.12028,5.71813c0.21056,0.04974 0.41102,0.16596 0.57438,0.34867c0.25786,0.28811 0.36762,0.6791 0.32927,1.05478c0.03834,0.37574 -0.07142,0.76684 -0.32927,1.05522c-0.16341,0.18258 -0.36393,0.2987 -0.57455,0.34838l-5.12012,5.71795c-0.44896,0.50163 -1.17809,0.50163 -1.62705,0c-0.44965,-0.50163 -0.44965,-1.31512 0,-1.81675l4.74996,-5.30457l-4.74996,-5.30457c-0.44965,-0.50163 -0.44965,-1.31512 0,-1.81723c0.44896,-0.50163 1.17809,-0.50163 1.62705,0z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>'
	});

	$('.news-slider').slick({
		slidesToShow: 3,
		variableWidth: true,
		prevArrow: '<span class="prev-arrow"><svg width="8" height="15" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 8 15"><g><g><path d="M7.6511,0.36771c0.44965,0.50163 0.44965,1.31512 0,1.81723l-4.74993,5.30414l4.74993,5.30454c0.44965,0.50211 0.44965,1.31559 0,1.81723c-0.44896,0.50163 -1.1774,0.50163 -1.62635,0l-5.12084,-5.71806c-0.21059,-0.0497 -0.41107,-0.16595 -0.57452,-0.34874c-0.25826,-0.28811 -0.36818,-0.6791 -0.32978,-1.05478c-0.0384,-0.37574 0.07153,-0.76684 0.32978,-1.05522c0.16349,-0.18267 0.36403,-0.29882 0.57468,-0.34845l5.12067,-5.71787c0.44896,-0.50163 1.1774,-0.50163 1.62635,0z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		nextArrow: '<span class="next-arrow"><svg width="8" height="15" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 8 15"><g><g><path d="M1.97439,0.36759l5.12028,5.71813c0.21056,0.04974 0.41102,0.16596 0.57438,0.34867c0.25786,0.28811 0.36762,0.6791 0.32927,1.05478c0.03834,0.37574 -0.07142,0.76684 -0.32927,1.05522c-0.16341,0.18258 -0.36393,0.2987 -0.57455,0.34838l-5.12012,5.71795c-0.44896,0.50163 -1.17809,0.50163 -1.62705,0c-0.44965,-0.50163 -0.44965,-1.31512 0,-1.81675l4.74996,-5.30457l-4.74996,-5.30457c-0.44965,-0.50163 -0.44965,-1.31512 0,-1.81723c0.44896,-0.50163 1.17809,-0.50163 1.62705,0z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>'
	});

	$('.service-page__slider').slick({
		prevArrow: '<span class="prev-arrow"><svg width="8" height="15" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 8 15"><g><g><path d="M7.6511,0.36771c0.44965,0.50163 0.44965,1.31512 0,1.81723l-4.74993,5.30414l4.74993,5.30454c0.44965,0.50211 0.44965,1.31559 0,1.81723c-0.44896,0.50163 -1.1774,0.50163 -1.62635,0l-5.12084,-5.71806c-0.21059,-0.0497 -0.41107,-0.16595 -0.57452,-0.34874c-0.25826,-0.28811 -0.36818,-0.6791 -0.32978,-1.05478c-0.0384,-0.37574 0.07153,-0.76684 0.32978,-1.05522c0.16349,-0.18267 0.36403,-0.29882 0.57468,-0.34845l5.12067,-5.71787c0.44896,-0.50163 1.1774,-0.50163 1.62635,0z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		nextArrow: '<span class="next-arrow"><svg width="8" height="15" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 8 15"><g><g><path d="M1.97439,0.36759l5.12028,5.71813c0.21056,0.04974 0.41102,0.16596 0.57438,0.34867c0.25786,0.28811 0.36762,0.6791 0.32927,1.05478c0.03834,0.37574 -0.07142,0.76684 -0.32927,1.05522c-0.16341,0.18258 -0.36393,0.2987 -0.57455,0.34838l-5.12012,5.71795c-0.44896,0.50163 -1.17809,0.50163 -1.62705,0c-0.44965,-0.50163 -0.44965,-1.31512 0,-1.81675l4.74996,-5.30457l-4.74996,-5.30457c-0.44965,-0.50163 -0.44965,-1.31512 0,-1.81723c0.44896,-0.50163 1.17809,-0.50163 1.62705,0z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>'
	});

})