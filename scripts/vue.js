// Carousel
new Vue({
    el: '#top-header',
    data: {
        headerBackground : "top-header-1",
        classes : ["top-header-1", "top-header-2"],
        headerCount = classes.length
    },
    computed: {
        runCarousel: function() {
            var vm = this;
            setInterval(() => {
                headerCount++;
                if (headerCount > vm.classes.length) {
                    headerCount = 0;
                }
                vm.headerBackground = vm.classes[headerCount];
            }, 10000)
        }
    }
})