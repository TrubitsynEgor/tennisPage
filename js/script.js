'use strict'

const menuBtnOpen = document.querySelector('.mobile-munu__btn--open')
const menuBtnClose = document.querySelector('.mobile-munu__btn--close')
const menuList = document.querySelector('.mobile-munu__list')
const body = document.querySelector('body')

menuBtnOpen.addEventListener('click', () => {
	menuList.classList.add('active');
	menuBtnOpen.classList.add('active');
	menuBtnClose.classList.add('active');
	body.classList.add('lock')
})
menuBtnClose.addEventListener('click', () => {
	menuList.classList.remove('active');
	menuBtnClose.classList.remove('active');
	menuBtnOpen.classList.remove('active');
	body.classList.remove('lock')
});

const swiper = new Swiper('.swiper', {
	speed: 400,
	spaceBetween: 100,

	navigation: {
		nextEl: '.trainers__slide-next',
		prevEl: '.trainers__slide-prev',
	},

	slidesPerView: 6,
	spaceBetween: 16,
	loop: true,

	breakpoints: {
		'@0.05': {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		'@0.45': {
			slidesPerView: 2,
		},
		'@0.75': {
			slidesPerView: 3,
		},
		'@1.00': {
			slidesPerView: 4,
		},
		'@1.25': {
			slidesPerView: 5,
		},
		'@1.50': {
			slidesPerView: 6,
		},
	}
});

const priceSwiper = new Swiper('.price__slider', {
  speed: 400,
  spaceBetween: 100,

	
	navigation: {
		nextEl: '.price__arrow-right',
		prevEl: '.price__arrow-left',
	},

	spaceBetween: 0,
	loop: true,

});

const accBtn = document.querySelectorAll('.price__acc-title');
const accContent = document.querySelectorAll('.price__acc-text');
const accArrow = document.querySelectorAll('.price__acc-img');


accBtn.forEach(el =>{
	el.addEventListener('click', () => {

		let content = el.nextElementSibling;
		if(content.style.height){
			accContent.forEach(el => el.classList.remove('active'));
		}else{
			accContent.forEach(el => el.classList.remove('active'));
			content.classList.toggle('active');
			accBtn.forEach(el => el.classList.remove('active'));
			el.classList.toggle('active');
		}
	})
})


const photoSwiper = new Swiper('.photo__slider', {
  speed: 400,
  spaceBetween: 100,
	navigation: {
		nextEl: '.photo__arrow-right',
		prevEl: '.photo__arrow-left',
	},
	spaceBetween: 0,
	loop: true,
});


const tabsLink = document.querySelectorAll('.rules__nav-link');
const tabsBody = document.querySelectorAll('.rules__col');

tabsLink.forEach(el => {
	el.addEventListener('click', () => {

		tabsBody.forEach(el => {
			el.classList.remove('active')
		});
		const content = document.querySelector('#' + el.dataset.link);
		content.classList.add('active');

		tabsLink.forEach(el => {
			el.classList.remove('active')
		});

		el.classList.add('active')

	})
})


const accLink = document.querySelectorAll('.rules__acc-link');
const accBody = document.querySelectorAll('.rules__col');

accLink.forEach(el => {
	el.addEventListener('click', () => {

		accBody.forEach(el => {
			el.classList.remove('active')
		});
		const content = document.querySelector('#' + el.dataset.acc);
		content.classList.add('active');

		accLink.forEach(el => {
			el.classList.remove('active')
		});

		el.classList.add('active')

	})
})




