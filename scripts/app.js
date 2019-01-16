var subNav = document.getElementById("sub-nav");
var subNavLocation = subNav.offsetTop;
var sections = ["overview", "media", "description", "pre-order", "mailing-list"];
var carouselCount = 0;
var carouselImages = ["kick.jpg", "necksnap.jpg", "outfits.jpg", "boat.jpg", "horse.jpg", "shield.jpg", "chitchat.jpg"];

window.onscroll = function () { stickyHeader(); activeSubLink(); };
window.onload = function () {  removeSections(); runCarousel(); activeSubLink(); };

function removeSections() {
    var elements = [];
    if (document.documentElement.clientWidth < 800) {
        elements = document.getElementsByClassName("desktop-only");
    } else {
        elements = document.getElementsByClassName("mobile-only");
    }
    while (elements.length) {
        var el = elements[0];
        el.parentNode.removeChild(el);
    }
}

function stickyHeader() {
    if (window.pageYOffset > subNavLocation) {
        subNav.classList.add("sub-nav-stay");
        subNav.classList.remove("sub-nav");
    } else {
        subNav.classList.add("sub-nav");
        subNav.classList.remove("sub-nav-stay");
    }
}

function activeSubLink() {
    var scrollPosY = window.pageYOffset;
    for (var i = 0; i < sections.length; i++) {
        var el = document.getElementById(sections[i]);
        if (el != null) {
            var location = el.offsetTop;
            var bottom = location + document.getElementById(sections[i]).offsetHeight;
            if (scrollPosY >= location && scrollPosY <= bottom) {
                removeActiveClass();
                document.getElementById(sections[i] + "-link").classList.add("sub-active");
            }
        }
    }
}

function removeActiveClass() {
    var elements = document.getElementsByClassName("sub-active");
    while (elements.length) {
        elements[0].classList.remove("sub-active");
    }
}

function runCarousel() {
    createCarouselLinks();
    nextSlide();
    setInterval(() => {
        nextSlide();
    }, 2000)
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
    var last = carouselCount - 1;
    if (last <= -1) {
        last = carouselImages.length - 1;
    }
    if (carouselCount >= carouselImages.length) {
        carouselCount = 0;
    }
    var oldEl = document.getElementById("carouselLink" + last);
    oldEl.innerHTML = "&#9675;";
    oldEl.classList.remove("active-carousel");
    var el = document.getElementById("carouselLink" + carouselCount);
    el.innerHTML = "&#9679;";
    el.className = "active-carousel";
}