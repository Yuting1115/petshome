jQuery( document ).ready(function() {
 
    $(window).scroll(function(){
    $('.topnav').toggleClass('bg-light navbar-light shadow-sm scrollednav py-0', $(this).scrollTop() > 50);
    });

    // Add click event for "了解更多" button to scroll down one page
    $('.btn-outline-white').click(function() {
        $('html, body').animate({
            scrollTop: $(window).scrollTop() + $(window).height()
        }, 800); // 800ms animation duration
    });
    
});
