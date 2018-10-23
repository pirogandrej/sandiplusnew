@extends('layouts.template')

@section('styles')

    <link rel="stylesheet" href="{{ asset('css/custom_main.css') }}">

@endsection

@section('content')

    @include('components.mobileMenu')

    @include('components.mainMenu')

    <div id="fullpage" class="dark" data-page-id="0" data-screen-id="1">

        <div id="screen-1" class="screen">
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

        <div id="screen-2" class="screen">
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

            <div class="container content">
                <div class="row">
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
            </div>

            @include('components.footer')
        </div>
    </div>

@endsection

@section('scripts')
@endsection
