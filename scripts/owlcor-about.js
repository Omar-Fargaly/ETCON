$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: false,
        nav: false,
        margin: 40,
        startPosition: 0,
        dots: true,
        loop: false,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 }
        }
    });
});