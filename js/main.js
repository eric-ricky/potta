
$(document).ready(function() {
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });

    AOS.init({
        offset: 200,
        duration: 1000
    });

});