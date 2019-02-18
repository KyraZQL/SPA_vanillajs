'use strict';
var slideIndex = 1;
var prev_button;
var next_button;
var nav_home;
var nav_outline;
var nav_photo;
var nav_artwork;
var nav_bar;
var modal;
var span;
var openModal;

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = " block";
}

document.addEventListener('DOMContentLoaded', function() {

    showSlides(slideIndex);

    prev_button = document.querySelector(".prev");
    prev_button.addEventListener("click", function() {
        showSlides(slideIndex -= 1);
    }, false);

    next_button = document.querySelector(".next");
    next_button.addEventListener("click", function() {
        showSlides(slideIndex += 1);
    }, false);

    nav_outline = document.querySelector("#navHome");
    nav_outline.addEventListener("click", function() {
        smoothScroll('header', 2000);
    }, false);

    nav_outline = document.querySelector("#navOutline");
    nav_outline.addEventListener("click", function() {
        smoothScroll('#Outline', 2000);
    }, false);

    nav_photo = document.querySelector("#navPhoto");
    nav_photo.addEventListener("click", function() {
        smoothScroll('#Photo', 2000);
    }, false);

    nav_artwork = document.querySelector("#navArtwork");
    nav_artwork.addEventListener("click", function() {
        smoothScroll('#Artwork', 2000);
    }, false);


    nav_bar = document.querySelector('header');
    window.addEventListener('scroll', () => {
        var scrollBarPosition = window.pageYOffset;
        if (scrollBarPosition > 100) {
            nav_bar.classList.remove('LargeNav');
            nav_bar.classList.add('SmallNav');
        } else {
            nav_bar.classList.remove('SmallNav');
            nav_bar.classList.add('LargeNav');
        }
        var height = scrollBarPosition + window.innerHeight / 3;
        let outlineHeight = document.querySelector('#Outline').offsetTop;
        let photoHeight = document.querySelector('#Photo').offsetTop;
        let artworkHeight = document.querySelector('#Artwork').offsetTop;

        if (height > outlineHeight && height < photoHeight) {
            nav_outline.classList.add('active');
            nav_artwork.classList.remove('active');
            nav_photo.classList.remove('active');
        } else if (height > photoHeight && height < artworkHeight) {
            nav_outline.classList.remove('active');
            nav_photo.classList.add('active');
            nav_artwork.classList.remove('active');
        } else if (height > artworkHeight) {
            nav_outline.classList.remove('active');
            nav_artwork.classList.add('active');
            nav_photo.classList.remove('active');
        } else {
            nav_outline.classList.remove('active');
            nav_artwork.classList.remove('active');
            nav_photo.classList.remove('active');
        }
    });

    modal = document.querySelectorAll('.modal');
    openModal = document.querySelectorAll(".card");
    span = document.querySelectorAll(".close");
    setModal();
});

function setModal() {

    openModal[0].addEventListener("click", () => {
        modal[0].style.display = " block";
    });
    openModal[1].addEventListener("click", () => {
        modal[1].style.display = " block";
    });
    openModal[2].addEventListener("click", () => {
        modal[2].style.display = " block";
    });
    openModal[3].addEventListener("click", () => {
        modal[3].style.display = " block";
    });
    span[0].addEventListener("click", () => {
        modal[0].style.display = " none";
    });
    span[1].addEventListener("click", () => {
        modal[1].style.display = " none";
    });
    span[2].addEventListener("click", () => {
        modal[2].style.display = " none";
    });
    span[3].addEventListener("click", () => {
        modal[3].style.display = " none";
    });
}


function smoothScroll(target, duration) {

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t * t * t + 2) + b;
    };

    var target = document.querySelector(target);
    var targetPosition = target.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animationScroll(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animationScroll);
        }
    }


    requestAnimationFrame(animationScroll);
};