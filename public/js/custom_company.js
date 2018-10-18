var wwin;
var hwin;
var scroll_allowed = 1;
var mouse_y_scroll = 0;
var delta = 0;
var scroll_y_scroll = 0;
var old_scroll_y_scroll = 0;
var number_page;
var number_screen;
var content_height;

number_page = $('#screens-list').data('page-id');
number_screen = $('#screens-list').data('screen-id');
if (number_page > 0){
    $('#main-menu ul li:nth-child(' + number_page + ') a').css({'background-color':'black','color':'white'});
}
$('#scroll-indication div:nth-child(' + number_screen + ') hr').addClass('active');
$('.block-left div.row:nth-child(' + number_screen + ')').addClass('active');
$('#menu-bar').addClass('light');

function func_test_size() {
    wwin = $(window).width();
    hwin = $(window).height();
    // console.log('w-win = ' + wwin);
    // console.log('h-win = ' + hwin);
}

function animate_to_position(position, speed) {
    scroll_allowed = 0;
    var old_number_screen = $('#screens-list').data('screen-id');
    var new_number_screen;
    switch ( position ) {
        case 0:
            new_number_screen = 1;
            break;
        case 2*hwin:
            new_number_screen = 2;
            break;
    }
    $('#scroll-indication div:nth-child(' + old_number_screen + ') hr').removeClass('active');
    $('.block-left div.row:nth-child(' + old_number_screen + ')').removeClass('active');
    $('#scroll-indication div:nth-child(' + new_number_screen + ') hr').addClass('active');
    $('.block-left div.row:nth-child(' + new_number_screen + ')').addClass('active');
    $("#screens-list").data("screen-id", new_number_screen);
    $("html,body").animate({scrollTop: position}, speed, function (){
        scroll_allowed = 1;
        // mouse_y_scroll = $(window).scrollTop();
        // console.log('hwin = ' + hwin + ' | m_y_scroll = ' + mouse_y_scroll + ' | s_y_scroll = ' + scroll_y_scroll + ' | scroll_allowed = ' + scroll_allowed + ' | delta = ' + delta + '---> mouse');
    });
}

(function($) {
    $(function() {

        $('#button-toggle').click(function() {

            if ( $(this).hasClass("open") ) {
                $('#pull-out-menu').hide();
                if ( $('#screens-list').hasClass("dark") ) {
                    $("#menu-bar").addClass("dark");
                    $("#menu-bar").removeClass("light");
                    $(".menu-brand.dark").show();
                    $(".menu-brand.light").hide();
                }
                if (wwin >= 1200) {
                    $('#main-menu').css('display','');
                    $('#button-toggle').css({'display':''});
                }
                $("body").css('overflow','auto');
            }
            else {
                $('#pull-out-menu').show();
                if ( $('#menu-bar').hasClass("dark") ) {
                    $("#menu-bar").addClass("light");
                    $("#menu-bar").removeClass("dark");
                    $(".menu-brand.dark").hide();
                    $(".menu-brand.light").show();
                }
                $("body").css('overflow','hidden');
            }
            $(this).toggleClass('open');

        });

        $('.scroll-pointer').click(function(event) {
            event.preventDefault();
            if( scroll_allowed == 1 ){
                animate_to_position(2*hwin, 1000);
            }
            return false;
        });

        $('.block-left-item').click(function(event) {
            event.preventDefault();
            var new_number_item = $(this).data('id');
            switch (new_number_item) {
                case 1:
                    animate_to_position(0, 1000);
                    break;
                case 2:
                    animate_to_position(2*hwin, 1000);
                    break;
            }
        });

        $(document).bind('mousewheel DOMMouseScroll', function (e) {
            hwin = $(window).height();
            mouse_y_scroll = $(window).scrollTop();
            scroll_y_scroll = $(window).scrollTop();
            delta = e.deltaY || e.detail || e.wheelDelta || e.originalEvent.deltaY;
            var temp = parseInt($('#screen-1 .content').height()) + parseInt($('#screen-1 .content').offset().top) - hwin + 100;
            console.log('hwin = ' + hwin + ' | m_y_scroll = ' + mouse_y_scroll + ' | s_y_scroll = ' + scroll_y_scroll + ' | scroll_allowed = ' + scroll_allowed + ' | delta = ' + delta + '---> mouse');
            console.log('hwincontent = ' + $('#screen-1 .content').height());
            console.log(parseInt($('#screen-1 .content').height()) + parseInt($('#screen-1 .content').offset().top) - hwin + 100);

            if ( scroll_allowed == 0 ){
                e.preventDefault();
            }

            content_height = parseInt($('#screen-1 .content').height()) + parseInt($('#screen-1 .content').offset().top) - hwin + 100;
            if (( mouse_y_scroll > (content_height + 100) ) && ( mouse_y_scroll < ( content_height + 400 )) && ( delta == -1 ) && (scroll_allowed == 1)){
                e.preventDefault();
                scroll_allowed = 0;
                animate_to_position(2*hwin, 1000);
            }
            if (( mouse_y_scroll < 2*hwin) && ( mouse_y_scroll > (2*hwin - 300) ) && ( delta == 1 ) && (scroll_allowed == 1)){
                e.preventDefault();
                scroll_allowed = 0;
                animate_to_position(0, 1000);
            }
        });

        $(document).bind('scroll', function (e) {
            if ( scroll_allowed == 0 ) {
                e.preventDefault();
            }
            scroll_y_scroll = $(window).scrollTop();
            mouse_y_scroll = $(window).scrollTop();
            var scroll_direction;
            if( scroll_y_scroll > old_scroll_y_scroll ){
                scroll_direction = -1;
            }
            else{
                scroll_direction = 1;
            }
            old_scroll_y_scroll = scroll_y_scroll;
            console.log('hwin = ' + hwin + ' | m_y_scroll = ' + mouse_y_scroll + ' | s_y_scroll = ' + scroll_y_scroll + ' | scroll_allowed = ' + scroll_allowed + ' | delta = ' + scroll_direction + '---> scroll');
            content_height = parseInt($('#screen-1 .content').height()) + parseInt($('#screen-1 .content').offset().top) - hwin + 100;
            if (( mouse_y_scroll > (content_height + 100)) && ( mouse_y_scroll < ( content_height + 400 )) && ( scroll_direction == -1 ) && (scroll_allowed == 1)){
                e.preventDefault();
                scroll_allowed = 0;
                animate_to_position(2*hwin, 1000);
            }
            if (( mouse_y_scroll < 2*hwin) && ( mouse_y_scroll > (2*hwin - 300) ) && ( scroll_direction == 1 ) && (scroll_allowed == 1)){
                e.preventDefault();
                scroll_allowed = 0;
                animate_to_position(0, 1000);
            }
        });

        $( window ).resize(function() {
            func_test_size();
            if ((wwin >= 1200) && ($('#button-toggle').hasClass("open"))) {
                $('#main-menu').css('display','none');
                $('#button-toggle').css({'display':'block','right':'calc(50% - 18px)'});
            }
        });

        $( document ).ready(function(){
            func_test_size();
        });
    })
})(jQuery);


