var bgColorFigure = '#ffffff';
var paddingFigure = 35;
var widthFigure;
var heightFigure;
var arrayFigure = [];
var numberFigure = $('#fullpage .screen.light .content .item').length;

for (var i = 0; i < numberFigure; i++) {
    arrayFigure[i]           = {};
    arrayFigure[i].name      = "";
    arrayFigure[i].container = {};
    arrayFigure[i].camera    = {};
    arrayFigure[i].scene     = {};
    arrayFigure[i].renderer  = {};
    arrayFigure[i].geometry  = {};
    arrayFigure[i].material  = {};
    arrayFigure[i].mesh      = {};
    arrayFigure[i].mouseX    = "0";
    arrayFigure[i].mouseY    = "0";
    arrayFigure[i].isOver    = "0";
}

function func_threejs_init() {
    widthFigure = $('#fullpage .screen.light .content .item div').width();
    heightFigure = widthFigure;
    $('#fullpage .screen.light .content .item div').height(heightFigure);

    $('#fullpage .screen.light .content .item div').each(function(i,elem) {
        var idFigure = elem.id;
        arrayFigure[i].name = idFigure;
        switch (idFigure){
            case 'sphere':
                arrayFigure[i].geometry = new THREE.SphereGeometry( 100, 8, 6 );
                break;
            case 'poly':
                arrayFigure[i].geometry = new THREE.IcosahedronGeometry(100);
                break;
            case 'cube':
                arrayFigure[i].geometry = new THREE.BoxGeometry(100,100,100,4,4,4);
                break;
        }
    });

    arrayFigure.forEach(function(item, i, arrayFigure) {
        arrayFigure[i].scene = new THREE.Scene();
        arrayFigure[i].scene.background = new THREE.Color( bgColorFigure );
        arrayFigure[i].camera = new THREE.PerspectiveCamera(45, widthFigure/heightFigure , 0.1, 1000);
        arrayFigure[i].camera.position.z = 300;
        arrayFigure[i].renderer = new THREE.WebGLRenderer();
        arrayFigure[i].renderer.setSize( widthFigure - paddingFigure*2 ,heightFigure - paddingFigure*2);
        arrayFigure[i].container = document.getElementById(arrayFigure[i].name);
        arrayFigure[i].container.appendChild( arrayFigure[i].renderer.domElement );
        arrayFigure[i].material =
            new THREE.MeshBasicMaterial({
                color: 0x888888,
                wireframe: true
            });
        arrayFigure[i].mesh = new THREE.Mesh(arrayFigure[i].geometry, arrayFigure[i].material);
        arrayFigure[i].mesh.position.x = 0;
        arrayFigure[i].scene.add( arrayFigure[i].mesh );
    });

    arrayFigure[2].camera.position.z = 250;
    $('#fullpage .screen.light .content .item canvas').css('margin-top', paddingFigure + 'px' );

    func_threejs_animation();
}


function func_threejs_resize() {
    widthFigure = $('#fullpage .screen.light .content .item').width();
    heightFigure = widthFigure;
    $('#fullpage .screen.light .content .item div').height(heightFigure);

    arrayFigure.forEach(function(item, i, arrayFigure) {
        arrayFigure[i].camera.aspect = widthFigure / heightFigure;
        arrayFigure[i].camera.updateProjectionMatrix();
        arrayFigure[i].renderer.setSize( widthFigure - paddingFigure*2, heightFigure - paddingFigure*2 );
    });
}

function func_threejs_animation() {
    requestAnimationFrame( func_threejs_animation );

    arrayFigure.forEach(function(item, i, arrayFigure) {

        if( arrayFigure[i].isOver == '1'){
            arrayFigure[i].mesh.rotation.x += arrayFigure[i].mouseY*0.00008;
            arrayFigure[i].mesh.rotation.y += arrayFigure[i].mouseX*0.00008;
        }
        else{
            arrayFigure[i].mesh.rotation.x += 0.001;
            arrayFigure[i].mesh.rotation.y += 0.001;
            arrayFigure[i].mesh.rotation.z += 0.001;
        }

        arrayFigure[i].renderer.render(arrayFigure[i].scene, arrayFigure[i].camera);
    });
}

(function($) {
    $(function() {

        if ($('#fullpage').length) {
            func_threejs_init();
        }

        $( window ).resize(function() {
            if ($('#fullpage').length) {
                func_threejs_resize();
            }
        });

        arrayFigure.forEach(function(item, i, arrayFigure) {

            $( '#' + arrayFigure[i].name )
                .mousemove(function (e) {
                    arrayFigure[i].mouseX = e.offsetX;
                    arrayFigure[i].mouseY = e.offsetY;
                })
                .mouseenter(function () {
                    arrayFigure[i].isOver = '1';
                })
                .mouseleave(function () {
                    arrayFigure[i].isOver = '0';
                })
            ;
        });
    })
})(jQuery);

