// Function to toggle navigation menu for mobile view
function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Function to validate contact form
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var error = document.getElementById('error');

    if (name === "" || email === "" || message === "") {
        error.textContent = "Please fill in all fields.";
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        error.textContent = "Please enter a valid email address.";
        return false;
    }

    return true;
}

// Function to display featured laptop images in a slideshow
var slideIndex = 0;

function showSlides() {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Call the slideshow function when the page loads
window.onload = function () {
    showSlides();
}
