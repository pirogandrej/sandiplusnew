@extends('layouts.template')

@section('styles')

    <link rel="stylesheet" href="{{ asset('css/custom_main.css') }}">

@endsection

@section('content')

    @include('components.mobileMenu')

    @include('components.mainMenu')

    <div id="screens-list" class="container-fluid dark" data-page-id="0" data-slide-id="1">

        <div class="row screen" id="screen-1">
            <div class="col-12">

                <div class="content">
                    <div class="item1">
                        Генеральный Директор компании
                    </div>
                    <div class="item2">
                        "Мы не строим бизнес, мы строим организацию, которая строит бизнес"
                    </div>
                </div>

                @include('components.footer')

            </div>
        </div>

        <div class="row screen" id="screen-2">
            <div class="col-12">

                <div class="figure-mobile">
                    <img src="{{ asset( 'img/figure-3.svg' ) }}" alt="">
                </div>

                <div id="menu-mobile">
                    <ul>
                        <li><a href="/company">КОМПАНИЯ</a></li>
                        <li><a href="#">БЛОГ</a></li>
                        <li><a href="#">КАРЬЕРА</a></li>
                    </ul>
                </div>

                <div class="row content">
                    <div class="col-lg-12 col-xl-4 item">
                        <img src="{{ asset( 'img/figure-1.svg' ) }}" alt="">
                        <a href="/company">КОМПАНИЯ</a>
                    </div>
                    <div class="col-lg-12 col-xl-4 item">
                        <img src="{{ asset( 'img/figure-2.svg' ) }}" alt="">
                        <a href="#">БЛОГ</a>
                    </div>
                    <div class="col-lg-12 col-xl-4 item">
                        <img src="{{ asset( 'img/figure-3.svg' ) }}" alt="">
                        <a href="#">КАРЬЕРА</a>
                    </div>
                </div>

                @include('components.footer')

            </div>

        </div>
    </div>

@endsection

@section('scripts')

    <script src="{{ asset( 'js/custom_main.js' ) }}"></script>

@endsection
