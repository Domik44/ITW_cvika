$(document).ready(function(){
    /* Offset created by navbar */
    var navOffset = $('#menuDiv').offset().top;

    /**
     * @brief Function for animated scrolling
    */
    function scroll(offset){
        $("html, body").animate({
            scrollTop: offset
        }, 1000);
    }

    /**
     * @brief Handler for clicking nav-bar items
    */
    $('.nav-item').click(function(){
        var selector = '#'+this.id.split('_')[0];
        /* Closing menu after item was clicked */
        if($('.nav-bar').hasClass('open')){
            $('.nav-bar').toggleClass('open');
            $('body').css('padding-top', 0); 
        }
        /* Scrolling to wanted section */ 
        scroll($(selector).offset().top - 50);
    });

    /* Home button handler */
    $('.nav-index').click(function(){
        scroll(0);
    });

    $('.nav-bars').click(function(){
        $('.nav-bar').toggleClass('open');
        if($('.nav-bar').hasClass('open')){
            if($('.nav-bar').hasClass('fixed')){
                $('body').css('padding-top', 6*50);   
            }
        }
        else{
            $('body').css('padding-top', 0); 
        }
    });

    /** 
    *   @brief Page scroll handler, used for navbar items activation.
    */
    $(window).scroll(function(){
        /* Get offset of section and current offset */
        var offset = $(window).scrollTop() + 1;

        if(offset >= navOffset){
            $('#menuDiv').addClass('fixed');
            $('header').addClass('offset');
        }
        else{
            $('#menuDiv').removeClass('fixed');
            $('header').removeClass('offset');
        }
    });
});