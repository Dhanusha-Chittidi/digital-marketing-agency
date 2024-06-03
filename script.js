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
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

   
    const formData = new FormData(this);

    // Post form data to the server
    fetch(this.action, {
        method: this.method,
        body: formData,
    }).then(response => {
        if (response.ok) {
            // Reset form fields
            this.reset();

            // Additional logic like showing a success message can go here
            alert("Form submitted successfully!");
        } else {
            alert("There was an error submitting the form.");
        }
    }).catch(error => {
        // Handle network errors here
        console.error('Error:', error);
        alert("There was an error submitting the form.");
    });
};
