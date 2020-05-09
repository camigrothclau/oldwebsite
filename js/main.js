
// BURGER MENU

const burgerMenu = document.getElementById('icon-main');
const burgerContentOverlay = document.querySelector('.burger-and-overlay');
const slideIn = document.querySelector('.burger-open');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.js-close');
const openMenu = document.querySelector('.js-menu-open');

burgerMenu.addEventListener('click', () => {
	burgerContentOverlay.classList.toggle('change');
	overlay.classList.toggle('change');
	slideIn.classList.toggle('slide-in');
	openMenu.classList.toggle('display-none');
	closeBtn.classList.toggle('display-none');
});

overlay.addEventListener('click', () => {
	slideIn.classList.remove('slide-in');
	overlay.classList.remove('change');
})

// WORK BUTTONS

var proButtons = document.querySelectorAll('.pro-btn');
var proTxt = document.querySelectorAll('.container-portfolio');

function selectItem(e) {
	removeShow();
	removeActiveColor();
	// Grab content item from DOM
	const proContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	proContentItem.classList.add('show');
	this.classList.add('active');
}

function removeShow() {
	proTxt.forEach(item => {
		item.classList.remove('show');
	});
}

function removeActiveColor() {
	proButtons.forEach(item => {
		item.classList.remove('active');
	});
}

// Listen for tab item click
proButtons.forEach(item => {
	item.addEventListener('click', selectItem);
});

