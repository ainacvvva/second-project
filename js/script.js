const menuButton = document.querySelector('.fa-bars'); 
const menu = document.querySelector('.dropdown-list'); 
			  
menuButton.onclick = () => {
    if (menu.style.display === "flex"){
        menu.style.display = "none";
    } else {
        menu.style.display = "flex"
    }
}

const slides1 = document.querySelector('.slides1');
const countSlide = document.querySelectorAll('.slide1').length;
let index = 0;

document.getElementById('next').onclick = () => {
	if (index < countSlide - 1) index++; 
	updateCountSlide()
}

document.getElementById('prev').onclick = () => {
	if (index > 0) index--; 
	updateCountSlide()
}

function updateCountSlide() {
	const slideWidth = document.querySelector('.slide1').offsetWidth; 
	slides1.style.transform = `translateX(${-index * slideWidth}px)`
}
		

window.addEventListener('resize', () =>{
	slides1.style.transition = 'none'; 
	updateCountSlide();

	setTimeout(() => {
		slides1.style.transition = '';
	}, 50);
});


const slides2 = document.querySelector('.slides2');
const countSlide2 = document.querySelectorAll('.slide2').length;
let index2 = 0;

document.getElementById('next2').onclick = () => {
	if (index2 < countSlide2 - 1) index2++;
	updateSlide();
}

document.getElementById('prev2').onclick = () => {
	if (index2 > 0) index2--;
	updateSlide();
}

function updateSlide () {
	const slideWidth2 = document.querySelector('.slide2').offsetWidth;
	slides2.style.transform = `translateX(${-index2 * slideWidth2}px)`
}

window.addEventListener('resize', () => {
	slides2.style.transition = 'none';
	updateSlide();

	setTimeout(() => {
		slides2.style.transition = '';
	}, 50);
});

			