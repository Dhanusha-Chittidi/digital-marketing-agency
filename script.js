document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
});
// script.js

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { slideIndex = 1 }    
    if (n < 1) { slideIndex = slides.length }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = 'block';  
    dots[slideIndex-1].className += " active";
}

function changeImage(imageSrc) {
    document.getElementById('project-image').src = imageSrc;
}
document.getElementById("contactForm").onsubmit = function() {
    // Form will submit normally and be redirected by getform.io
    sessionStorage.setItem('formSubmitted', 'true');
};

window.onload = function() {
    if (sessionStorage.getItem('formSubmitted') === 'true') {
        document.getElementById("contactForm").reset();
        sessionStorage.removeItem('formSubmitted');
    }
};
