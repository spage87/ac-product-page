window.onscroll = function() {stickyHeader()};

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