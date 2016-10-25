$(document).ready(function(){
    
    $("html").niceScroll({
        cursorcolor:"#b80013",
        cursorborder:"0px solid #fff",
        cursorwidth:"7",
        zindex:10,
        scrollspeed:"60"
    });

    var scrollButton= $("#shm");
    $(window).scroll(function(){
        $(this).scrollTop() >=490 ? scrollButton.show() : scrollButton.hide();
    });
    scrollButton.click(function(){
        $("html,body").animate({scrollTop : 0}, 800);
    });
    
    
    $(".owl-example-4").owlCarousel({
        autoPlay: 4000,
        items : 3,
        stopOnHover : false,
        lazyLoad : true
    });
    $(".owl-example-5").owlCarousel({
        autoPlay: 4000,
        items : 3,
        stopOnHover : true,
        lazyLoad : true
    });
    
    
    $(".one-image").hover(
      function () {
        $(".one-image").addClass("notactive");
        $(this).addClass("active");
      },
      function () {
        $(".one-image").removeClass("notactive");
        $(this).removeClass("active");
      }
    );
    
    

});
