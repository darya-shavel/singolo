//menu items
let menu = document.querySelector('.navigation');
menu.addEventListener('click' , (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

//scroll
/*
document.addEventListener('scroll',onScroll);
function onScroll(){
    const curPos = window.scrollY;
    const divs = document.querySelector('.wrapper main div');
    const links = document.querySelectorAll('.navigation>a');

    divs.forEach((el)=>{
        if(el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight)  > curPos ){
            links.forEach((a)=>{
                a.classList.remove('active__link');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active__link');
                };
            });
        };
    });
};
*/
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
        buttons.forEach(tag => tag.classList.remove('button__active'));
        e.target.classList.add('button__active');
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
const button = document.querySelector('.submit');
const closeButton = document.getElementById('close-btn');
const messageForm = document.querySelector('.form');
button.addEventListener('click', function(event){
    if(messageForm.checkValidity()){
        event.preventDefault();
        document.querySelector('.message-block').classList.add('message-active');
        let subject = document.getElementById('subject').value;
        if(!subject){
            subject = 'Без темы';
        };
        let description =document.getElementById('description').value;
        if(!description){
            description = 'Без описания';
        };
        document.querySelector('.result').innerText = `\nТема: ${subject}\nОписание: ${description}`; 
    };
});

closeButton.addEventListener('click', function(){
    messageForm.reset();
    document.querySelector('.message-block').querySelector('.result').innerText = '';
    document.querySelector('.message-block').classList.remove('message-active');
});





