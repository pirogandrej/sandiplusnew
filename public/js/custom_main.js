var wwin;
var hwin;
var scroll_allowed = 1;
var mouse_y_scroll = 0;
var scroll_y_scroll = 0;
var old_scroll_y_scroll = 0;
var delta = 0;
var sumdelta = 0;

function func_test_size() {
    wwin = $(window).width();
    hwin = $(window).height();
    console.log('w-win = ' + wwin);
    console.log('h-win = ' + hwin);
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

        $('.scroll-pointer').click(function(event) {
            if( scroll_allowed == 1){
                if($('#screens-list').hasClass('dark')){
                    process_to_down();
                }
                else{
                    process_to_top();
                }
            }
            return false;
        });

        $(window).on("mousewheel", function(e){
            if ( scroll_allowed == 0 ){
                e.preventDefault();
            }
            mouse_y_scroll = $(window).scrollTop();
            delta = e.deltaY || e.detail || e.wheelDelta;
            if(((sumdelta > 0) || ((sumdelta == 0) && (delta < 0))) && (scroll_allowed == 1)){
                sumdelta = sumdelta + (-1)*delta*100;
            }
            if((sumdelta > hwin) && (scroll_allowed == 1)){
                sumdelta = hwin;
            }
            if((sumdelta < 0) && (scroll_allowed == 1)){
                sumdelta = 0;
            }
            if (( sumdelta > 0 ) && ( sumdelta <= 100 ) && ( delta == -1 ) && (scroll_allowed == 1)){
                e.preventDefault();
                process_to_down();
            }
            if (( sumdelta >= (hwin - 100) ) && ( sumdelta < hwin ) && ( delta == 1 ) && (scroll_allowed == 1)){
                e.preventDefault();
                process_to_top();
            }
        });

        $(document).bind('scroll', function (e) {
            var scroll_direction;
            scroll_y_scroll = $(window).scrollTop();
            if( scroll_y_scroll > old_scroll_y_scroll ){
                scroll_direction = -1;
            }
            else{
                scroll_direction = 1;
            }
            old_scroll_y_scroll = scroll_y_scroll;
            // console.log('hwin = ' + hwin + ' | m_y_scroll = ' + mouse_y_scroll + ' | s_y_scroll = ' + scroll_y_scroll + ' | scroll_allowed = ' + scroll_allowed + ' | delta = ' + scroll_direction + '---> scroll');
            if (( scroll_y_scroll > 0 ) && ( scroll_y_scroll <= 50 ) && (scroll_allowed == 1) && (scroll_direction == -1)){
                scroll_allowed = 0;
                process_to_down();
            }
            if (( scroll_y_scroll >= (hwin - 100)) && ( scroll_y_scroll < hwin ) && (scroll_allowed == 1) && (scroll_direction == 1)){
                scroll_allowed = 0;
                process_to_top();
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
            $('#menu-bar').addClass('dark');
        });
    })
})(jQuery);



