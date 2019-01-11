var carouselCount = 0;
var carouselImages = ["kick.jpg", "medusa.jpg"];

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
    setInterval(() => {
        if (carouselCount >= carouselImages.length) {
            carouselCount = 0;
        }
        vm.style = {
            background : "linear-gradient(180deg,rgba(15.7,14.5,21.2,0.2) 0%,rgba(15.7,14.5,21.2,0.2) 80%,rgba(15.7,14.5,21.2,1) 100%),url('../img/" + carouselImages[carouselCount] + "')"
        }
        carouselCount++;
    }, 10000)
}