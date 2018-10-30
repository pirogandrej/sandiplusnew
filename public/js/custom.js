var wwin;
var hwin;
var number_page;
var number_screen;
var old_number_screen;
var new_number_screen;
var current_index;

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

function func_init() {
    number_page = detectPage();
    if (number_page == 0){
        $('body').addClass('main');
        $('#menu-bar').addClass('dark');
    }
    if ((number_page >= 1) && (number_page <= 5)){
        $('body').addClass('pages');
        $('#menu-bar').addClass('light');
        $('#main-menu ul li:nth-child(' + number_page + ') a').css({'background-color':'black','color':'white'});
    }
    if (number_page == 1){
        old_number_screen = 1;
        $('body').addClass('company');
        $('.block-left div.row:nth-child(' + old_number_screen + ')').addClass('active');
        $('#scroll-indication div:nth-child(' + old_number_screen + ') hr').addClass('active');
        $('#screens-list').find('.screen').eq(old_number_screen - 1).siblings().css("display","none");
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

function func_masonry_init() {
    var containerGallery = $('.gallery-masonry');
    containerGallery.imagesLoaded(function () {
        containerGallery.masonry({
            itemSelector: '.item-masonry',
            columnWidth: '.percent-size',
            percentPosition: true
        })
    });
}

function animate_to_position(position) {
    new_number_screen = position;

    $('#scroll-indication div:nth-child(' + old_number_screen + ') hr').removeClass('active');
    $('.block-left div.row:nth-child(' + old_number_screen + ')').removeClass('active');

    $('#screens-list .screen:nth-child(' + old_number_screen + ')').fadeOut(500);

    $('#scroll-indication div:nth-child(' + new_number_screen + ') hr').addClass('active');
    $('.block-left div.row:nth-child(' + new_number_screen + ')').addClass('active');

    $('#screens-list .screen:nth-child(' + new_number_screen + ')').fadeIn(500);

    setTimeout(function () {
        $( "html, body" ).scrollTop( 0 );
    }, 100);

    old_number_screen = new_number_screen;
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
            if(new_number_item <= number_screen){
                animate_to_position(new_number_item);
            }
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
            if ($('#fullpage').length) {
                fullpage_api.reBuild();
                if($('#button-toggle').hasClass('open')){
                    fullpage_api.setAllowScrolling(true, 'all');
                }
                else{
                    fullpage_api.setAllowScrolling(false, 'all');
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
            func_fullpage_init();
            func_masonry_init();
        });
    })
})(jQuery);



