var wwin;
var hwin;
var number_page;
var number_screen;
var old_number_screen;
var new_number_screen;
var numberMenuItems = 5;

var paddingFigure = 35;
var wItemSphere;
var hItemSphere;
var containerSphere;
var rendererSphere;
var cameraSphere;
var sceneSphere;
var sphere_geometry;
var sphere_texture;
var sphere;


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

function func_threejs_init() {
    wItemSphere = $('#sphere').width();
    hItemSphere = wItemSphere;
    $('#sphere').height(hItemSphere);
    $('#sphere').css('border','1px solid black');

    containerSphere = document.getElementById('sphere');

    rendererSphere = new THREE.WebGLRenderer();
    rendererSphere.setSize( wItemSphere - paddingFigure*2 ,hItemSphere - paddingFigure*2);
    $('#fullpage .screen.light .content .item #sphere canvas').css('margin-top', paddingFigure*2 + 'px' );

    cameraSphere = new THREE.PerspectiveCamera(45, wItemSphere/hItemSphere , 0.1, 1000);
    cameraSphere.position.y = 0;
    cameraSphere.position.z = 300;

    sceneSphere = new THREE.Scene();
    sceneSphere.background = new THREE.Color( 0xdddddd );

    sphere_geometry = new THREE.SphereGeometry( 100, 8, 6 );
    sphere_texture =  new THREE.MeshBasicMaterial({
        color: 0x888888,
        wireframe: true
    });
    sphere = new THREE.Mesh(sphere_geometry,sphere_texture);
    sphere.position.x = 0;
    sceneSphere.add(sphere);

    // var cube_geometry = new THREE.CubeGeometry(100,100,100);
    // var cube_texture =  new THREE.MeshBasicMaterial({
    //     color: 0x888888,
    //     wireframe: true
    // });
    // var cube = new THREE.Mesh(cube_geometry,cube_texture);
    // cube.position.x = 300;
    // scene.add(cube);

    // var cylinder_geometry = new THREE.CylinderGeometry(50,50,200);
    // var cylinder_texture = new THREE.MeshNormalMaterial();
    // var cylinder = new THREE.Mesh(cylinder_geometry,cylinder_texture);
    // cylinder.position.x = -250;
    // cylinder.position.z = 0;
    // scene.add(cylinder);

    // var poly_geometry = new THREE.IcosahedronGeometry(100);
    // var poly_texture =  new THREE.MeshBasicMaterial({
    //     color: 0x888888,
    //     wireframe: true
    // });
    // var poly = new THREE.Mesh(poly_geometry,poly_texture);
    // poly.position.x = 0;
    // scene.add(poly);

    func_threejs_animation();
}

function func_threejs_resize() {
    wItemSphere = $('#fullpage .screen.light .content .item').width();
    hItemSphere = wItemSphere;
    console.log('w = ' + wItemSphere);
    console.log('h = ' + hItemSphere);
    $('#sphere').height(hItemSphere);
    cameraSphere.aspect = wItemSphere / hItemSphere;
    cameraSphere.updateProjectionMatrix();
    rendererSphere.setSize( wItemSphere - paddingFigure*2, hItemSphere - paddingFigure*2 );
    $('#fullpage .screen.light .content .item #sphere canvas').css('margin-top', paddingFigure*2 + 'px' );
}

function func_threejs_animation() {
    requestAnimationFrame(func_threejs_animation);

    sphere.rotation.x += 0.002;
    sphere.rotation.y += 0.002;
    sphere.rotation.z += 0.002;

//            cube.rotation.x += 0.005;
//            cube.rotation.y += 0.005;
//            cube.rotation.z += 0.005;
//
//            poly.rotation.x += 0.005;
//            poly.rotation.y += 0.005;
//            poly.rotation.z += 0.005;
//
//            cylinder.rotation.y += 180/Math.PI*0.00001;
//            cylinder.rotation.z += 180/Math.PI*0.00001;
//            cylinder.position.y += 0.5;

    rendererSphere.render(sceneSphere,cameraSphere);
    containerSphere.appendChild(rendererSphere.domElement);
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
                // $.fn.fullpage.destroy('all');
                // $.fn.fullpage.reBuild();
                // func_fullpage_init();
                $('#fullpage').fullpage.reBuild();
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
            func_threejs_resize();
        });

        $( document ).ready(function(){
            func_test_size();
            func_init();
            func_fullpage_init();
            func_unitegallery_init();
            func_threejs_init();
        });

    })
})(jQuery);

