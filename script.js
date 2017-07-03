$(document).ready(function () {
    
    $('a').click(function (e) {
        e.preventDefault();
    });
    
    function scrollTopAnimation(top) {
        $('html, body').animate({
            scrollTop: top
        }, 700);
    }
    
    $('nav').find('a').click(function () {
        var getLink = $(this).attr('href'),
            goTop = $(getLink).offset().top;  
        
        scrollTopAnimation(goTop);
    });   
});