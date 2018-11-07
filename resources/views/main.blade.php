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
                        <div id="sphere" class="w-100"></div>
                        <a href="/company">КОМПАНИЯ</a>
                    </div>
                    <div class="col-lg-12 col-xl-4 item">
                        <div id="poly" class="w-100"></div>
                        <a href="/blog">БЛОГ</a>
                    </div>
                    <div class="col-lg-12 col-xl-4 item">
                        <div id="cube" class="w-100"></div>
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
