$(document).ready(function() {
    $('.menu_icon').click(function(event) {
        $('.menu_icon,.menu_body').toggleClass('active');
      $('body').toggleClass('lock');         // блокирует прокрутку при аткрывание бургера body.lock{overflow: hidden;}
        
    
    });
});

$(document).ready(function() {
    $('.menu_link').click(function(event) {
        $('.menu_icon, .menu_body').removeClass('active');
        $('body').removeClass('lock');
    });
});
