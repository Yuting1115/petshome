jQuery( document ).ready(function() { 

    $(window).scroll(function(){
    $('.topnav').toggleClass('bg-light navbar-light shadow-sm scrollednav py-0', $(this).scrollTop() > 50);
    });

    // Show hidden images when clicked
    $('.clickable-image-container').click(function() {
        var $this = $(this);
        var $image = $this.find('.hidden-image');
        var $overlay = $this.find('.image-overlay');
        
        // Show the image
        $image.fadeIn(300);
        // Hide the overlay
        $overlay.fadeOut(300);
        
        // Make it no longer clickable
        $this.css('cursor', 'default');
    });
    
    // Prevent any default behavior for buttons
    $('.clickable-image-container button').click(function(e) {
        e.preventDefault();
    });
    
});
