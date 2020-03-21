//menu items
let menu = document.querySelector('.navigation');
menu.addEventListener('click' , (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
}) 
//screen off
let vertical = document.querySelector('.button__phone1');
vertical.addEventListener('click', function(n){
    let verticalBlack = document.querySelector('.vertical__black');
    if(verticalBlack.style.display === 'none'){
        verticalBlack.style.display = 'block';
    }else{
        verticalBlack.style.display = 'none';
    }
})

let horizontal = document.querySelector('.button__phone2');
horizontal.addEventListener('click', function(n){
    let horizontalBlack = document.querySelector('.horizontal__black');
    if(horizontalBlack.style.display === 'none'){
        horizontalBlack.style.display = 'block';
    }else{
        horizontalBlack.style.display = 'none';
    }
})

 //tab portfolio
let portfolioButton = document.querySelector('.button__navigation');
let buttons = document.querySelectorAll('.button__navigation .button');
let imageContainer = document.querySelector('.column__img');
let portfolioImages = document.querySelectorAll('.column__img .portfolio_item');
    portfolioButton.addEventListener('click', (e) => {
        buttons.forEach(tag => tag.classList.remove('selected'));
        e.target.classList.add('selected');
        portfolioImages.forEach(img => img.style.order = Math.floor(Math.random() - 0.5));
        });

//portfolio border
let portfolioImagesBorder = document.querySelector('.column__img');
portfolioImagesBorder.addEventListener('click', (event)=>{
    portfolioImagesBorder.querySelectorAll('img').forEach(e => e.classList.remove('portfolio__border'))
    event.target.classList.add('portfolio__border');
    if (event.target !== 'img') {
        portfolioImagesBorder.classList.remove('portfolio__border');
    }
});

//slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//form 






