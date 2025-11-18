const button_three_lins = document.getElementById("button_three_lins");
const menu = document.getElementById("menu");

button_three_lins.onclick = () => {
    if (menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block"
    }
}


const modal = document.getElementById("modal");
const button_discover = document.getElementById("button_discover");
const crosebutton = document.getElementById("crosebutton");

button_discover.onclick = () => modal.style.display = "block";
crosebutton.onclick = () => modal.style.display = "none";


const modal2 = document.getElementById("modal2");
const button_discover2 = document.getElementById("button_discover2");
const crosebutton2 = document.getElementById("crosebutton2"); 

button_discover2.onclick = () => modal2.style.display = "block";
crosebutton2.onclick = () => modal2.style.display = 'none';


const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0; 

document.getElementById("next").onclick = () => {
    if (index < slideCount - 3){
        index++;
        slideUpdate();
    }
}
document.getElementById("prev").onclick = () => {
    if (index > 0){
        index--;
        slideUpdate();
    }
}

function slideUpdate() {
    const slideWidth = document.querySelector('.slide').offsetWidth;
    slides.style.transform = `translateX(${-index * slideWidth}px)`
}

window.addEventListener('resize', () => {
    slides.style.transition = 'none'; 
    slideUpdate(); 
  
    
    setTimeout(() => {
      slides.style.transition = '';
    }, 50);
  });

const modal3 = document.getElementById("modal3");
const button_discover3 = document.getElementById('button_discover3');
const crosebutton3 = document.getElementById("crosebutton3");

button_discover3.onclick = () => modal3.style.display = "block";
crosebutton3.onclick = () => modal3.style.display = "none";


const slides1 = document.querySelector(".slides1"); 
const slideCount1 = document.querySelectorAll(".slide1").length; 
let index1 = 0; 

document.getElementById("next1").onclick = () => {
    if (index1 < slideCount1 - 3)
    index1++; updateSlide(); 
}

document.getElementById("prew1").onclick = () => {
    if (index1 > 0) 
    index1--; updateSlide();
}

function updateSlide(){
    const slide1Width = document.querySelector('.slide1').offsetWidth; 
    slides1.style.transform = `translateX(${-index1 * slide1Width}px)`
}

window.addEventListener('resize', () => {
    slides1.style.transition = 'none'; 
    updateSlide(); 
  
    setTimeout(() => {
      slides1.style.transition = '';
    }, 50);
  });
  

const button_discover4 = document.getElementById("button_discover4");
const crosebutton4 = document.getElementById("crosebutton4");
const modal4 = document.getElementById("modal4");

button_discover4.onclick = () => modal4.style.display = "block"; 
crosebutton4.onclick = () => modal4.style.display = "none";


