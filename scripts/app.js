var carouselCount = 0;
var carouselImages = ["kick.jpg", "necksnap.jpg", "outfits.jpg", "boat.jpg", "horse.jpg", "shield.jpg", "chitchat.jpg"];

window.onscroll = function() {stickyHeader()};
window.onload = function() {runCarousel()};

var subNav = document.getElementById("sub-nav");
subNavLocation = subNav.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > subNavLocation) {
        subNav.classList.add("sub-nav-stay");
        subNav.classList.remove("sub-nav");
    } else {
        subNav.classList.add("sub-nav");
        subNav.classList.remove("sub-nav-stay");
    }
}

function runCarousel() {
    createCarouselLinks();
    nextSlide();
    setInterval(() => {
        nextSlide();
    }, 10000)
}

function nextSlide() {
    activateLink();
    var el = document.getElementById("top-header");
    el.style.background = "linear-gradient(180deg,rgba(15.7,14.5,21.2,0.2) 0%,rgba(15.7,14.5,21.2,0.2) 80%,rgba(15.7,14.5,21.2,1) 100%),url('img/" + carouselImages[carouselCount] + "')",
    el.style.backgroundPosition = "center center",
    el.style.backgroundSize = "cover"
    carouselCount++;
}

function createCarouselLinks() {
    var el = document.getElementById("carousel-links");
    for (var i = 0; i < carouselImages.length; i++) {
        var child = document.createElement("span");
        child.setAttribute("id", "carouselLink" + i);
        child.innerHTML = "&#9675;";
        el.appendChild(child);
    }
}

function activateLink() {
    var last = carouselCount-1;
    if (last <= -1) {
        last = carouselImages.length-1;
    }
    if (carouselCount >= carouselImages.length) {
        carouselCount = 0;
    }
    var oldEl = document.getElementById("carouselLink" + last);
    oldEl.innerHTML= "&#9675;";
    oldEl.classList.remove("active-carousel");
    var el = document.getElementById("carouselLink" + carouselCount);
    el.innerHTML = "&#9679;";
    el.className = "active-carousel";
}