function ToggleNavbar() {
    $(".segment-1").toggleClass("segment-1-closed");
    $(".segment-2").toggleClass("segment-2-closed");
    $(".segment-3").toggleClass("segment-3-closed");
    $(".hamburger-button").toggleClass("hamburger-button-closed");

    $(".nav-background").toggleClass("nav-background-toggle");
    $(".nav-background").toggleClass("nav-extend-background");
}

window.addEventListener('scroll', function() {
    if(this.window.scrollY > 50) {
        $("nav").addClass("decrease-text-after-scroll");
        $(".nav-text").addClass("black-text");
        $(".selected").addClass("black-text");
    } else {
        $(".nav-text").removeClass("black-text");
        $(".selected").removeClass("black-text");
        $("nav").removeClass("decrease-text-after-scroll")
    }
});


$(document).ready(function () {
    var image = document.getElementsByClassName('background');
    new simpleParallax(image, {
        scale: 0.9 
    });
});
