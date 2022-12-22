/* Open */
function openNav() {
    document.getElementById("navbar").style.width = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("navbar").style.width = "0%";
}

const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#openMenu");

// listen for scroll events
window.addEventListener('scroll', () => {
    // get the current scroll position
    const scrollPos = window.scrollY;
    // loop through each section and see if it's in view
    sections.forEach(section => {
        if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
            // the section is in view, so change the color of the menu icon
            menuIcon.style.color = section.dataset.color;
        }
    });
});

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

window.onload = function () {
    var el = document.getElementById('g-recaptcha-response');
    if (el) {
        el.setAttribute('required', 'required');
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("gallery");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}