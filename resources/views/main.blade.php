@extends('layouts.template')

@section('styles')
@endsection

@section('content')

    @include('components.mobileMenu')

    @include('components.mainMenu')

    <div id="fullpage" class="dark">

        <div class="screen dark">
            <div class="content">
                <div class="item1">
                    <img src="{{ asset( 'img/icon-quotes-1.svg' ) }}" alt="">
                </div>
                <div class="item2">
                    Мы не строим бизнес, мы строим организацию, которая строит бизнес
                </div>
                <div class="item3">
                    Генеральный Директор компании
                </div>
            </div>

            @include('components.footer')
        </div>

        <div class="screen light">

            @include('components.contentMobile')

            <div class="container content">
                <div class="row">
                    <div class="col-lg-12 col-xl-4 item">
                        {{--<img src="{{ asset( 'img/figure-1.svg' ) }}" alt="">--}}
                        <div id="sphere" class="w-100"></div>
                        <a href="/company">КОМПАНИЯ</a>
                    </div>
                    <div class="col-lg-12 col-xl-4 item">
                        <img src="{{ asset( 'img/figure-2.svg' ) }}" alt="">
                        <a href="/blog">БЛОГ</a>
                    </div>
                    <div class="col-lg-12 col-xl-4 item">
                        <img src="{{ asset( 'img/figure-3.svg' ) }}" alt="">
                        <a href="#">КАРЬЕРА</a>
                    </div>
                </div>
            </div>

            @include('components.footer')
        </div>
    </div>

@endsection

@section('scripts')

    <script>

        var wItemSphere = $('#sphere').width();
        var hItemSphere = wItemSphere;
        $('#sphere').height(hItemSphere);

        containerSphere = document.getElementById('sphere');

        rendererSphere = new THREE.WebGLRenderer();
        rendererSphere.setSize(wItemSphere,hItemSphere);

        cameraSphere = new THREE.PerspectiveCamera(45, wItemSphere/hItemSphere , 0.1, 1000);
        cameraSphere.position.y = 0;
        cameraSphere.position.z = 300;

        sceneSphere = new THREE.Scene();
        sceneSphere.background = new THREE.Color( 0xffffff );

        var cube_geometry = new THREE.CubeGeometry(100,100,100);
        var cube_texture =  new THREE.MeshBasicMaterial({
            color: 0x888888,
            wireframe: true
        });
        var cube = new THREE.Mesh(cube_geometry,cube_texture);
        cube.position.x = 300;
//        scene.add(cube);

        var cylinder_geometry = new THREE.CylinderGeometry(50,50,200);
        var cylinder_texture = new THREE.MeshNormalMaterial();
        var cylinder = new THREE.Mesh(cylinder_geometry,cylinder_texture);
        cylinder.position.x = -250;
        cylinder.position.z = 0;
        //        scene.add(cylinder);

        var sphere_geometry = new THREE.SphereGeometry( 100, 8, 6 );
        var sphere_texture =  new THREE.MeshBasicMaterial({
            color: 0x888888,
            wireframe: true
        });
        var sphere = new THREE.Mesh(sphere_geometry,sphere_texture);
        sphere.position.x = 0;
        sceneSphere.add(sphere);

        var poly_geometry = new THREE.IcosahedronGeometry(100);
        var poly_texture =  new THREE.MeshBasicMaterial({
            color: 0x888888,
            wireframe: true
        });
        var poly = new THREE.Mesh(poly_geometry,poly_texture);
        poly.position.x = 0;
//        scene.add(poly);

        animation();

        function animation() {
            requestAnimationFrame(animation);

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

            sphere.rotation.x += 0.005;
            sphere.rotation.y += 0.005;
            sphere.rotation.z += 0.005;

            rendererSphere.render(sceneSphere,cameraSphere);
            containerSphere.appendChild(rendererSphere.domElement);
        }
        window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize(){
            wItemSphere = $('#fullpage .screen.light .content .item').width();
            hItemSphere = wItemSphere;
            console.log('w = ' + wItemSphere);
            console.log('h = ' + hItemSphere);
            $('#sphere').height(hItemSphere);
            cameraSphere.aspect = wItemSphere / hItemSphere;
            cameraSphere.updateProjectionMatrix();
            rendererSphere.setSize( wItemSphere, hItemSphere );
        }

    </script>

@endsection
