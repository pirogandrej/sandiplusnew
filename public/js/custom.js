var wwin;
var hwin;
var number_page;
var number_screen;

function func_test_size() {
    wwin = $(window).width();
    hwin = $(window).height();
}

function func_fullpage() {
    $('#fullpage').fullpage({
        autoScrolling:true,
        lockAnchors: true,
        sectionSelector: '.screen',
        scrollingSpeed: 1000,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        onLeave: function(){
            $("#menu-bar").addClass("hide");
        },
        afterLoad: function(anchorLink, index, direction){
            $("#menu-bar").removeClass("hide");
            if((index.index == 0) && (direction == 'up')){
                $("#menu-bar").removeClass("light");
                $("#menu-bar").addClass("dark");
                $("#fullpage").addClass("dark");
                $("#fullpage").removeClass("light");
                $(".menu-brand.light").show();
                $(".menu-brand.dark").hide();
            }
            if((index.index == 1) && (direction == 'down')){
                $("#menu-bar").addClass("light");
                $("#menu-bar").removeClass("dark");
                $(".menu-brand.light").hide();
                $(".menu-brand.dark").show();
                $("#fullpage").addClass("light");
                $("#fullpage").removeClass("dark");
            }
        }
    });
}

function func_init() {
    number_page = $('#screens-list').data('page-id');
    number_screen = $('#screens-list').data('screen-id');
    if(number_page == undefined){
        number_page = $('#fullpage').data('page-id');
    }
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
                fullpage_api.setAllowScrolling(true, 'all');
                if ( $('#fullpage').hasClass("dark") ) {
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
                fullpage_api.setAllowScrolling(false, 'all');
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
            if($('html').hasClass('fp-enabled')){
                var fpObj = fullpage_api.getActiveSection();
                if(fpObj.index == 0){
                    fullpage_api.moveSectionDown();
                }
                if(fpObj.index == 1){
                    fullpage_api.moveSectionUp();
                }
            }
            switch (number_page){
                case 1:
                    event.preventDefault();
                    animate_to_position(2);
                    break;
            }
            return false;
        });

        $( window ).resize(function() {
            func_test_size();
            fullpage_api.reBuild();
            if($('#button-toggle').hasClass('open')){
                fullpage_api.setAllowScrolling(true, 'all');
            }
            else{
                fullpage_api.setAllowScrolling(false, 'all');
            }
            if ((wwin >= 1200) && ($('#button-toggle').hasClass("open"))) {
                $('#main-menu').css('display','none');
                $('#button-toggle').css({'display':'block','right':'calc(50% - 18px)'});
            }
        });

        $( document ).ready(function(){
            func_test_size();
            func_fullpage();
            func_init();
        });
    })
})(jQuery);



