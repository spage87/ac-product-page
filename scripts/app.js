var subNav = document.getElementById("sub-nav");
var subNavLocation = subNav.offsetTop;
var mobileLinks = ["overview", "description", "pre-order", "mailing-list"];
var desktopLinks = ["overview", "media", "description", "mailing-list"];
var carouselCount = 0;
var carouselImages = ["kick.jpg", "necksnap.jpg", "outfits.jpg", "boat.jpg", "horse.jpg", "shield.jpg", "chitchat.jpg"];
var color1, color2, color3;
var thumbsPerPage = 0;

window.onscroll = function () { stickyHeader(); activeSubLink(); };

window.onload = function () {
    setup();
    runCarousel();
};

window.onresize = function () {
    setup();
}

function setup() {
    setUpColors();
    setSubNavigationLocation();
    setTitleLocation();
    stickyHeader();
    activeSubLink();
}

function isMobile() {
    return document.documentElement.clientWidth > 800 ? false : true;
}

function setUpColors() {
    if (isMobile()) {
        color1 = "rgba(15.7,14.5,21.2,0.2) 0%";
        color2 = "0%,rgba(15.7,14.5,21.2,0.2) 80%";
        color3 = "rgba(15.7,14.5,21.2,1) 100%";
    } else {
        color1 = "rgba(15.7,14.5,21.2,0.55) 0%";
        color2 = "rgba(15.7,14.5,21.2,0.55) 60%";
        color3 = "#282536 100%";
    }
}

function stickyHeader() {
    if (window.pageYOffset > subNavLocation) {
        subNav.classList.add("sub-nav-stay");
        subNav.classList.remove("sub-nav");
        // remove original location
        subNav.removeAttribute("style");
    } else {
        subNav.classList.add("sub-nav");
        subNav.classList.remove("sub-nav-stay");
        // set back to original location
        setSubNavigationLocation();
    }
}

function setSubNavigationLocation() {
    if (isMobile()) {
        subNav.style.position = "static";
        subNav.style.top = "auto";
    } else {
        var el = document.getElementById("main-nav");
        subNavLocation = el.offsetTop + el.clientHeight;
        subNav.style.position = "absolute";
        subNav.style.top = subNavLocation;
    }
}

function setTitleLocation() {
    var el = document.getElementById("title");

    if (isMobile()) {
        // in case it's a resize, remove any unneeded styling
        el.removeAttribute("style");
        return;
    }

    var location = subNavLocation + document.getElementById("sub-nav").clientHeight;
    var el = document.getElementById("title");
    el.style.position = "absolute";
    el.style.top = location;
    el.style.height = document.getElementById("top-header").clientHeight - location;

}

function activeSubLink() {
    var sections = isMobile() ? mobileLinks : desktopLinks;
    var scrollPosY = window.pageYOffset;
    for (var i = 0; i < sections.length; i++) {
        var el = document.getElementById(sections[i]);
        if (el != null) {
            var location = getElementLocationInDocument(el);
            var bottom = location + document.getElementById(sections[i]).offsetHeight;
            if (scrollPosY >= location && scrollPosY <= bottom) {
                removeActiveClass();
                document.getElementById(sections[i] + "-link").classList.add("sub-active");
            }
        }
    }
}

function getElementLocationInDocument(el) {
    var location = 0;
    if (el.offsetParent) {
        do {
            location += el.offsetTop;
            el = el.offsetParent;
        } while (el);
    }
    return location >= 0 ? location : 0;
}

function removeActiveClass() {
    var elements = document.getElementsByClassName("sub-active");
    while (elements.length)
        elements[0].classList.remove("sub-active");
}

function runCarousel() {
    if (!isMobile())
        createCarouselThumbs();
    else
        createCarouselLinks();
    nextSlide();
    setInterval(() => {
        nextSlide();
    }, 2000)
}

function createCarouselThumbs() {
    createThumbControl(null);
}

function createThumbs(start) {
    var el = document.getElementById("carousel-thumbs");
    var limit = start + thumbsPerPage;
    var html = "";
    for (var i = start; i < limit; i++) {
        if (carouselImages[i] != null) {
            var src = "img/thumbs/" + carouselImages[i];
            html += "<img src='" + src + "'>";
        }
    }
    el.innerHTML = html;
}

function createThumbControl(promises) {

        loadImage("img/thumbs/" + carouselImages[0]).then((img) => {
            var thumbs = document.getElementById("carousel-thumbs");
            var visibleWidth = thumbs.offsetWidth;
            thumbs.append(img);
            var imgWidth = thumbs.firstElementChild.offsetWidth;
            thumbsPerPage = Math.floor(visibleWidth/imgWidth);
            var sections = Math.floor(carouselImages.length/thumbsPerPage); // floor because we start at 0
            var el = document.getElementById("thumb-control");
            for (var i = 0; i <= sections; i++) {
                var child = document.createElement("span");
                child.setAttribute("id", "thumbNavigation" + i);
                child.innerHTML = "&#9675;";
                el.appendChild(child);
            }
            // initial set up so start at 0
            setThumbNavigationActive(0);
            createThumbs(0);
        });
}

function setThumbNavigationActive(i) {
    var el = document.getElementById("thumbNavigation" + i);

    var oldEl = document.getElementsByClassName("active-carousel")[0];

    setActiveBullet(oldEl, el);
}

function setActiveBullet(oldEl, newEl) {
    if (newEl == null)
        return;

    if (oldEl != null) {
        oldEl.innerHTML = "&#9675;";
        oldEl.classList.remove("active-carousel");
    }
    newEl.innerHTML = "&#9679;";
    newEl.className = "active-carousel";
}

function loadImage(src) {
    return new Promise(function (resolve) {
        var img = new Image();
        img.onload = function () {
            resolve(img);
        }
        img.src = src;
    })

}

function nextSlide() {
    activateLink();
    var el = document.getElementById("top-header");
    var backgroundPosition = isMobile() ? "center center" : "top center";

    el.style.background = "linear-gradient(180deg," + color1 + "," + color2 + "," + color3 + "),url('img/" + carouselImages[carouselCount] + "')",
        el.style.backgroundPosition = backgroundPosition,
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
    if (last <= -1)
        last = carouselImages.length - 1;
    if (carouselCount >= carouselImages.length)
        carouselCount = 0;

    var oldEl = document.getElementById("carouselLink" + last);
    var el = document.getElementById("carouselLink" + carouselCount);
    setActiveBullet(oldEl, el);
}

document, addEventListener('click', function (event) {

    if (event.target.id.startsWith('thumbNavigation')) {
        var i = event.target.id.replace('thumbNavigation', '');
        setThumbNavigationActive(i);
        createThumbs(i*thumbsPerPage);
    }

})