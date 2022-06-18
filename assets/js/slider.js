const sliderButtonContainer = document.querySelector('.slider-button');
const sliderImg = document.querySelector('.product-slider-img img');
const sliderCaptionTitle = document.querySelector('.product-slider-caption h4')
const sliderCaptionDesc = document.querySelector('.product-slider-caption p')
const sliderButton = document.querySelectorAll('.slider-button img');

sliderButtonContainer.addEventListener('click', function(button) {
    if(button.target.classList.contains('slider-button-item')) {
        sliderButton.forEach(function(buttonClick) {
            buttonClick.classList.remove('slider-button-active');
        });
        button.target.classList.toggle('slider-button-active');
        sliderImage();
}
});

function sliderImage() {
    sliderButton.forEach(function(buttonClick) {
        if(buttonClick.classList.contains('slider-button-active') &&  buttonClick.classList.contains('slider-button-item1')) {
           sliderImg.src = 'assets/images/slider/americano.jpg';
           sliderImg.style.animation = 'sliderAnimation1 ease-in-out 0.5s';
           sliderCaptionTitle.innerHTML = 'Americano';
           sliderCaptionDesc.innerHTML = 'Amerikano adalah minuman kopi yang dibuat dengan mencampurkan satu seloki espresso dengan air panas. Air panas yang digunakan dalam minuman ini adalah sebanyak 6 hingga 8 ons.';
        }
        if(buttonClick.classList.contains('slider-button-active') &&  buttonClick.classList.contains('slider-button-item2')) {
           sliderImg.src = 'assets/images/slider/espresso.jpg';
           sliderImg.style.animation = 'sliderAnimation2 ease-in-out 0.5s';
           sliderCaptionTitle.innerHTML = 'Espresso';
           sliderCaptionDesc.innerHTML = 'Espresso adalah kopi yang dibuat dari biji kopi yang berwarna hitam. Kopi Hitam Espresso merupakan kopi yang cocok untuk digunakan sebagai minuman pagi, siang, sore, dan malam.';
        }
        if(buttonClick.classList.contains('slider-button-active') &&  buttonClick.classList.contains('slider-button-item3')) {
           sliderImg.src = 'assets/images/slider/long-black.jpg';
           sliderImg.style.animation = 'sliderAnimation3 ease-in-out 0.5s';
           sliderCaptionTitle.innerHTML = 'Long Black';
           sliderCaptionDesc.innerHTML = 'Long Black adalah minuman kopi khas dari Australia dan Selandia Baru. Kopi jenis ini terdiri dari espresso dan air panas. Long Black disajikan dengan menyiapkan air panas terlebih dahulu kemudian baru dicampurkan dengan espresso .';
        }
})};

sliderImage();

