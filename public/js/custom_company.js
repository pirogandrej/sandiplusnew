var wwin;
var hwin;
var number_page;
var number_screen;

number_page = $('#screens-list').data('page-id');
number_screen = $('#screens-list').data('screen-id');
if (number_page > 0){
    $('#main-menu ul li:nth-child(' + number_page + ') a').css({'background-color':'black','color':'white'});
}
$('#scroll-indication div:nth-child(' + number_screen + ') hr').addClass('active');
$('.block-left div.row:nth-child(' + number_screen + ')').addClass('active');
$('#menu-bar').addClass('light');
$('#screens-list div.screen').each(function() {
    if ($(this).data("id") != number_screen) {
        $(this).css("display","none");
    }
});

function func_test_size() {
    wwin = $(window).width();
    hwin = $(window).height();
    // console.log('w-win = ' + wwin);
    // console.log('h-win = ' + hwin);
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
            animate_to_position(2);
            return false;
        });

        $('.block-left-item').click(function(event) {
            event.preventDefault();
            var new_number_item = $(this).data('id');
            animate_to_position(new_number_item);
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


