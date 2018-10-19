var wwin;
var hwin;
var scroll_allowed = 1;
var mouse_y_scroll = 0;
var scroll_y_scroll = 0;
var old_scroll_y_scroll = 0;
var delta = 0;
var sumdelta = 0;
var number_page;
var number_screen;

function func_test_size() {
    wwin = $(window).width();
    hwin = $(window).height();
    // console.log('w-win = ' + wwin);
    // console.log('h-win = ' + hwin);
}

function func_init() {
    number_page = $('#screens-list').data('page-id');
    number_screen = $('#screens-list').data('screen-id');
    switch (number_page){
        case 0:
            $('#menu-bar').addClass('dark');
            break;
        case 1:
            $('#menu-bar').addClass('light');
            $('#main-menu ul li:nth-child(' + number_page + ') a').css({'background-color':'black','color':'white'});
            $('#scroll-indication div:nth-child(' + number_screen + ') hr').addClass('active');
            $('.block-left div.row:nth-child(' + number_screen + ')').addClass('active');
            $('#screens-list div.screen').filter(function(){
                return $(this).data("id") != number_screen}).css("display","none");
            break;
        case 2:
            $('#menu-bar').addClass('light');
            $('#main-menu ul li:nth-child(' + number_page + ') a').css({'background-color':'black','color':'white'});
            break;
    }
}

function process_to_down() {
    $("#menu-bar").addClass("hide");
    scroll_allowed = 0;
    $("html,body").animate({scrollTop:hwin},1000,function () {
        $("#menu-bar").removeClass("hide");
        $("#menu-bar").addClass("light");
        $("#menu-bar").removeClass("dark");
        $(".menu-brand.light").hide();
        $(".menu-brand.dark").show();
        $("#screens-list").addClass("light");
        $("#screens-list").removeClass("dark");
        sumdelta = hwin;
        scroll_allowed = 1;
    });
}

function process_to_top() {
    $("#menu-bar").addClass("hide");
    scroll_allowed = 0;
    $("html,body").animate({scrollTop:0}, 1000,function () {
        $("#menu-bar").removeClass("hide");
        $("#menu-bar").removeClass("light");
        $("#menu-bar").addClass("dark");
        $("#screens-list").addClass("dark");
        $("#screens-list").removeClass("light");
        $(".menu-brand.light").show();
        $(".menu-brand.dark").hide();
        scroll_allowed = 1;
        sumdelta = 0;
    });
}

function animate_to_position(position) {
    var old_number_screen = $('#screens-list').data('screen-id');
    var new_number_screen = position;
    $('#scroll-indication div:nth-child(' + old_number_screen + ') hr').removeClass('active');
    $('.block-left div.row:nth-child(' + old_number_screen + ')').removeClass('active');
    $('#scroll-indication div:nth-child(' + new_number_screen + ') hr').addClass('active');
    $('.block-left div.row:nth-child(' + new_number_screen + ')').addClass('active');
    $("#screens-list").data("screen-id", new_number_screen);

    $('#screens-list div.screen').each(function() {
        if ($(this).data("id") == old_number_screen) {
            $(this).fadeOut(500);
        }
    });
    $('#screens-list div.screen').each(function() {
        if ($(this).data("id") == new_number_screen) {
            $(this).fadeIn(500);
        }
    });
    setTimeout(function () {
        $( "html, body" ).scrollTop( 0 );
    }, 500);
}

(function($) {
    $(function() {

        $('#button-toggle').click(function() {
            if ( $(this).hasClass("open") ) {
                $('#pull-out-menu').hide();
                if ( $('#screens-list').hasClass("dark") ) {
                    $("#menu-bar").addClass("dark");
                    $("#menu-bar").removeClass("light");
                    $(".menu-brand.light").show();
                    $(".menu-brand.dark").hide();
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
                    $(".menu-brand.light").hide();
                    $(".menu-brand.dark").show();
                }
                $("body").css('overflow','hidden');
            }
            $(this).toggleClass('open');
        });

        $('.block-left-item').click(function(event) {
            event.preventDefault();
            var new_number_item = $(this).data('id');
            animate_to_position(new_number_item);
        });

        $('.scroll-pointer').click(function(event) {
            switch (number_page){
                case 0:
                    if( scroll_allowed == 1){
                        if($('#screens-list').hasClass('dark')){
                            process_to_down();
                        }
                        else{
                            process_to_top();
                        }
                    }
                    break;
                case 1:
                    event.preventDefault();
                    animate_to_position(2);
                    break;
            }

            return false;
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
            func_init();
        });
    })
})(jQuery);



