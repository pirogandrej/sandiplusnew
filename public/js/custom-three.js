//custom-three.js

var bgColorFigure = '#ffffff';
var thicknessFigures = 0.3;
var paddingFigure = 35;
var widthFigure;
var heightFigure;
var arrayFigure = [];
var numberFigure = $('#fullpage .screen.light .content .item').length;
var j;

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

function createFigure( figureItem, figureGeometry ) {

    //Scene
    figureItem.scene = new THREE.Scene();
    figureItem.scene.background = new THREE.Color( bgColorFigure );

    //Camera
    figureItem.camera = new THREE.PerspectiveCamera( 40, widthFigure/heightFigure , 0.1, 1000 );
    figureItem.camera.position.set( 0, 0, 350 );

    //Renderer
    figureItem.renderer = new THREE.WebGLRenderer({ antialias: true });
    figureItem.renderer.setSize( widthFigure - paddingFigure * 2 , heightFigure - paddingFigure * 2 );

    //Container
    figureItem.container = document.getElementById( figureItem.name );
    figureItem.container.appendChild( figureItem.renderer.domElement );

    //Controls
    // figureItem.controls = new THREE.OrbitControls( figureItem.camera, figureItem.renderer.domElement );

    //Light
    figureItem.light = new THREE.DirectionalLight( 0xffffff, 1 );
    figureItem.light.position.set( 100, 100, 100 );
    figureItem.scene.add( figureItem.light );

    //AmbientLight
    figureItem.ambLight = new THREE.AmbientLight( 0xffffff );
    figureItem.scene.add( figureItem.ambLight );

    //Geometry
    figureItem.geometry = figureGeometry;

    //Material
    figureItem.material = new THREE.MeshLambertMaterial({
        color: "white",
        transparent: true,
        opacity: .75
    });

    //Mesh
    figureItem.mesh = new THREE.Mesh( figureItem.geometry, figureItem.material );
    figureItem.scene.add( figureItem.mesh );

    //Edges
    figureItem.edgesGeometry = new THREE.EdgesGeometry( figureItem.geometry );
    figureItem.edgesMaterial = new THREE.LineBasicMaterial({
        color: "black"
    });
    figureItem.edges = new THREE.LineSegments( figureItem.edgesGeometry, figureItem.edgesMaterial );
    figureItem.scene.add( figureItem.edges );

    //Thickness
    figureItem.thickness = thicknessFigures;

    //Create array edges
    for ( j = 0; j < figureItem.edgesGeometry.attributes.position.count; j++ ){
        figureItem.sphereMesh = new THREE.Mesh(new THREE.SphereBufferGeometry(figureItem.thickness * 6, 16, 8), new THREE.MeshStandardMaterial({color: "black"}));
        figureItem.sphereMesh.position.set(
            figureItem.edgesGeometry.attributes.position.array[(j * 3) + 0],
            figureItem.edgesGeometry.attributes.position.array[(j * 3) + 1],
            figureItem.edgesGeometry.attributes.position.array[(j * 3) + 2]
        );
        figureItem.scene.add(figureItem.sphereMesh);
    }

    for ( j = 0; j < figureItem.edgesGeometry.attributes.position.count - 1; j+=2 ){

        figureItem.startPoint = new THREE.Vector3(
            figureItem.edgesGeometry.attributes.position.array[j * 3 + 0],
            figureItem.edgesGeometry.attributes.position.array[j * 3 + 1],
            figureItem.edgesGeometry.attributes.position.array[j * 3 + 2]
        );
        figureItem.endPoint = new THREE.Vector3(
            figureItem.edgesGeometry.attributes.position.array[j * 3 + 3],
            figureItem.edgesGeometry.attributes.position.array[j * 3 + 4],
            figureItem.edgesGeometry.attributes.position.array[j * 3 + 5]
        );

        figureItem.cylLength = new THREE.Vector3().subVectors(figureItem.endPoint, figureItem.startPoint).length();
        figureItem.cylGeom = new THREE.CylinderBufferGeometry(figureItem.thickness, figureItem.thickness, figureItem.cylLength, 16);
        figureItem.cylGeom.translate(0, figureItem.cylLength / 2, 0);
        figureItem.cylGeom.rotateX(Math.PI / 2);
        figureItem.cyl = new THREE.Mesh(figureItem.cylGeom, new THREE.MeshLambertMaterial({color: "black"}));
        figureItem.cyl.position.copy(figureItem.startPoint);
        figureItem.cyl.lookAt(figureItem.endPoint);
        figureItem.scene.add(figureItem.cyl);
    }
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
                createFigure( arrayFigure[i], new THREE.IcosahedronGeometry(100, 1) );
                break;

            case 'poly':
                createFigure( arrayFigure[i], new THREE.IcosahedronGeometry(100) );
                break;

            case 'cube':

                var arrayPoints = [50,25,0,-25,-50];
                arrayFigure[i].geometry = new THREE.Geometry();
                for( j=0; j<5; j++) {
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 50, arrayPoints[j], 50) );
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 50, arrayPoints[j], -50) );
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -50, arrayPoints[j], -50) );
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -50, arrayPoints[j], 50) );
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 50, arrayPoints[j], 50) );

                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 25, arrayPoints[j], 50) );
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 25, arrayPoints[j], -50) );
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 0, arrayPoints[j], -50) );
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 0, arrayPoints[j], 50) );
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -25, arrayPoints[j], 50) );
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -25, arrayPoints[j], -50) );
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -50, arrayPoints[j], -50) );
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -50, arrayPoints[j], 50) );
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 50, arrayPoints[j], 50) );
                }
                for( j=0; j<5; j++) {
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 50, -50, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -50, -50, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -50, 50, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 50, 50, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 50, -50, arrayPoints[j] ));

                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 25, -50, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 25, 50, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 0, 50, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 0, -50, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -25, -50, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -25, 50, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -50, 50, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -50, 25, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 50, 25, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 50, 0, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -50, 0, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( -50, -25, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 50, -25, arrayPoints[j] ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( 50, -50, arrayPoints[j] ));
                }
                for( j=0; j<5; j++) {
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( arrayPoints[j], -50, -50 ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( arrayPoints[j], 50, -50 ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( arrayPoints[j], 50, 50 ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( arrayPoints[j], -50, 50 ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( arrayPoints[j], -50, -50 ));

                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( arrayPoints[j], -50, -25 ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( arrayPoints[j], 50, -25 ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( arrayPoints[j], 50, 0 ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( arrayPoints[j], -50, 0 ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( arrayPoints[j], -50, 25 ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( arrayPoints[j], 50, 25 ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( arrayPoints[j], 50, -50 ));
                    arrayFigure[i].geometry.vertices.push(new THREE.Vector3( arrayPoints[j], -50, -50 ));

                }

                arrayFigure[i].scene = new THREE.Scene();
                arrayFigure[i].scene.background = new THREE.Color( bgColorFigure );
                arrayFigure[i].camera = new THREE.PerspectiveCamera(45, widthFigure/heightFigure , 0.1, 1000);
                arrayFigure[i].camera.position.z = 220;
                arrayFigure[i].renderer = new THREE.WebGLRenderer();
                arrayFigure[i].renderer.setSize( widthFigure - paddingFigure*2 ,heightFigure - paddingFigure*2);
                arrayFigure[i].container = document.getElementById(arrayFigure[i].name);
                arrayFigure[i].container.appendChild( arrayFigure[i].renderer.domElement );

                arrayFigure[i].pointsMaterial = new THREE.PointsMaterial( {
                    color: 0x888888,
                    size: 6,
                    alphaTest: 0.5
                } );
                arrayFigure[i].pointsGeometry = new THREE.BufferGeometry().setFromPoints( arrayFigure[i].geometry.vertices );
                arrayFigure[i].points = new THREE.Points( arrayFigure[i].pointsGeometry, arrayFigure[i].pointsMaterial );
                arrayFigure[i].scene.add( arrayFigure[i].points );

                arrayFigure[i].material = new THREE.LineBasicMaterial({color: 0x888888});
                arrayFigure[i].mesh = new THREE.Line(arrayFigure[i].geometry, arrayFigure[i].material);

                arrayFigure[i].mesh.position.x = 0;
                arrayFigure[i].scene.add( arrayFigure[i].mesh );

                break;
        }
    });

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
            if( arrayFigure[i].name == 'sphere' ){
                arrayFigure[i].scene.rotation.x += arrayFigure[i].mouseY*0.00008;
                arrayFigure[i].scene.rotation.y += arrayFigure[i].mouseX*0.00008;
            }
            if( arrayFigure[i].name == 'poly' ){
                arrayFigure[i].scene.rotation.x += arrayFigure[i].mouseY*0.00008;
                arrayFigure[i].scene.rotation.y += arrayFigure[i].mouseX*0.00008;
            }
            if( arrayFigure[i].name == 'cube' ){
                arrayFigure[i].scene.rotation.y += arrayFigure[i].mouseX*0.00008;
            }
        }
        else{
            if( arrayFigure[i].name == 'sphere' ){
                arrayFigure[i].scene.rotation.x += 0.0025;
                arrayFigure[i].scene.rotation.y += 0.0025;
                arrayFigure[i].scene.rotation.z += 0.0025;
            }
            if( arrayFigure[i].name == 'poly' ){
                arrayFigure[i].scene.rotation.x += 0.0025;
                arrayFigure[i].scene.rotation.y += 0.0025;
                arrayFigure[i].scene.rotation.z += 0.0025;
            }
            if( arrayFigure[i].name == 'cube' ){
                arrayFigure[i].scene.rotation.y += 0.0025;
            }
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

