var wwin;
var hwin;
var number_page;
var number_screen;
var old_number_screen;
var new_number_screen;
var numberMenuItems = 5;

function func_test_size() {
    wwin = $(window).width();
    hwin = $(window).height();
}

function detectPage() {
    var numDetectPage;
    if ($('#fullpage').length) {
        numDetectPage = 0;
    }
    if ($('#screens-list').length) {
        number_screen = $('#screens-list .screen').length;
        if($('#screens-list').hasClass('company')){
            numDetectPage = 1;
        }
        if($('#screens-list').hasClass('blog')){
            numDetectPage = 2;
        }
    }
    return numDetectPage;
}

function detectScreen() {
    var numDetectScreen = '';
    $("#screens-list .mainBlock .screen").each(function (i) {
        if ( $(this).hasClass('active') ) {
            numDetectScreen = i;
        }
    });
    numDetectScreen++;
    return numDetectScreen;
}

function func_init() {
    number_page = detectPage();
    if (number_page == 0){
        $('body').addClass('main');
        $('#menu-bar').addClass('dark');
        func_fullpage_init();
    }
    if ((number_page >= 1) && (number_page <= numberMenuItems)){
        $('body').addClass('pages');
        $('#menu-bar').addClass('light');
        $('#main-menu ul li:nth-child(' + number_page + ')').addClass('active');
    }
    if (number_page == 1){
        old_number_screen = 1;
        $('body').addClass('company');
        $('.block-left div.row:nth-child(' + old_number_screen + ')').addClass('active');
        $('#scroll-indication div:nth-child(' + old_number_screen + ')').addClass('active');
        $('#screens-list .mainBlock div.screen:nth-child(' + old_number_screen + ')').addClass('active');
    }
    if (number_page == 2){
        $('body').addClass('blog');
    }
}

function func_fullpage_init() {
    $('#fullpage').fullpage({
        autoScrolling:true,
        lockAnchors: true,
        sectionSelector: '.screen',
        scrollingSpeed: 1000,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        onLeave: function(index, nextIndex, direction){
            var randomValue = Math.floor(Math.random() * 3) + 1;
            if((nextIndex.index == 1) && (direction == 'down')){
                $('.figure-mobile').find('img').css("display","block");
                $('.figure-mobile').find('img').eq(randomValue - 1).siblings().css("display","none");
            }
            $("#menu-bar").addClass("hide");
        },
        afterLoad: function(anchorLink, index, direction){
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
            $("#menu-bar").removeClass("hide");
        }
    });
}

function func_unitegallery_init() {
    jQuery(".unitegallery").each(
        function() {
            $(this).unitegallery({
                gallery_theme: "tiles",
                tiles_space_between_cols: 5,
                tile_overlay_opacity: 0.2,
                lightbox_type: "compact",
                lightbox_slider_image_border_radius: 10
            });
        }
    );
}

function animate_to_position(position) {
    new_number_screen = position;
    $('.block-left div.row:nth-child(' + old_number_screen + ')').removeClass('active');
    $('#scroll-indication div:nth-child(' + old_number_screen + ')').removeClass('active');
    $('#screens-list .screen:nth-child(' + old_number_screen + ')').fadeOut(400).removeClass('active');
    $('.block-left div.row:nth-child(' + new_number_screen + ')').addClass('active');
    $('#scroll-indication div:nth-child(' + new_number_screen + ')').addClass('active');
    setTimeout(function () {
        $( "html, body" ).scrollTop( 0 );
        $('#screens-list .screen:nth-child(' + new_number_screen + ')').fadeIn(400).addClass('active');
        old_number_screen = new_number_screen;
    }, 400);
}

(function($) {
    $(function() {

        $('#button-toggle').click(function() {
            if ( $(this).hasClass("open") ) {
                if ($('#fullpage').length) {
                    fullpage_api.setAllowScrolling(true, 'all');
                }
                if ( $('#fullpage').hasClass("dark") ) {
                    $("#menu-bar").hide();
                    $("#menu-bar").addClass("dark");
                    $("#menu-bar").removeClass("light");
                    $(".menu-brand.light").show();
                    $(".menu-brand.dark").hide();
                    $("#menu-bar").show();
                }
                if (wwin >= 1200) {
                    $('#main-menu').css('display','');
                    $('#button-toggle').css({'display':''});
                }
                $("body").css('overflow','auto');
                $('#pull-out-menu').hide();
            }
            else {
                $('#pull-out-menu').show();
                if ($('#fullpage').length) {
                    fullpage_api.setAllowScrolling(false, 'all');
                }
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

        $('.block-left .row').click(function(event) {
            event.preventDefault();
            var new_number_item = parseInt($('.block-left .row').index(this)) + 1;
            if((new_number_item <= number_screen) && (new_number_item != old_number_screen)){
                animate_to_position(new_number_item);
            }
        });

        $('.scroll-pointer').click(function(event) {
            event.preventDefault();
            switch (number_page){
                case 0:
                    var fpObj = fullpage_api.getActiveSection();
                    if(fpObj.index == 0){
                        fullpage_api.moveSectionDown();
                    }
                    if(fpObj.index == 1){
                        fullpage_api.moveSectionUp();
                    }
                    break;
                case 1:
                    var num = detectScreen();
                    if(num < number_screen) {
                        animate_to_position( num + 1 );
                    }
                    else {
                        animate_to_position( 1 );
                    }
                    break;
            }
            return false;
        });

        $( window ).resize(function() {
            func_test_size();
            if ($('#fullpage').length) {
                if($('#button-toggle').hasClass('open')){
                    fullpage_api.setAllowScrolling(false, 'all');
                }
                else{
                    fullpage_api.setAllowScrolling(true, 'all');
                }
            }
            if ((wwin >= 1200) && ($('#button-toggle').hasClass("open"))) {
                $('#main-menu').css('display','none');
                $('#button-toggle').css({'display':'block','right':'calc(50% - 18px)'});
            }
        });

        $( document ).ready(function(){
            func_test_size();
            func_init();
            func_unitegallery_init();
        });

    })
})(jQuery);

