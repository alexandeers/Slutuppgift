function ToggleNavbar() {
    $(".segment-1").toggleClass("segment-1-closed");
    $(".segment-2").toggleClass("segment-2-closed");
    $(".segment-3").toggleClass("segment-3-closed");

    $(".nav-background").toggleClass("nav-background-toggle");
    $(".nav-background").toggleClass("nav-extend-background");
}

window.addEventListener('scroll', function() {
    if(this.window.scrollY > 50) {
        $("nav").addClass("decrease-text-after-scroll");
    } else {
        $("nav").removeClass("decrease-text-after-scroll")
    }
});
