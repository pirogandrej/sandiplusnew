@extends('layouts.template')

@section('styles')

    <link rel="stylesheet" href="{{ asset('css/custom_company.css') }}">

@endsection

@section('content')

    @include('components.mobileMenu')

    @include('components.mainMenu')

    <div id="screens-list" class="container-fluid" data-page-id="2" data-screen-id="1">

        <div class="row screen" id="screen-1">
            <div class="col-12">

                <div class="content">
                    <div class="item1" id="itemColor">

                    </div>
                    <div class="item2" id="blogName">
                        SANDI+ и партнеры в Турции. Посещение завода Daikin.
                    </div>
                    <div class="item3" id="blogDate">
                        <div class="iconTime">

                        </div>
                        <div>

                        </div>
                        Крупный поставщик и надежный партнер на рынке теплотехнической и сантехнической продукции в Украине с собственной дистрибьюторской сетью.
                    </div>
                    {{--<div class="item4">--}}
                        {{--<img src="{{ asset( 'img\img1-page1-screen1.png' ) }}" alt="">--}}
                    {{--</div>--}}
                    {{--<div class="item5">--}}
                        {{--Ваш надежный бизнес-партнер--}}
                    {{--</div>--}}
                    {{--<div class="item6">--}}
                        {{--Компания SANDI+ более пятнадцати лет является одним из самых мощных операторов отечественного рынка отопления, водоснабжения и сантехники.--}}
                    {{--</div>--}}
                    {{--<div class="item7">--}}
                        {{--Наша работа направлена на постоянное улучшение стандартов обслуживания клиентов.--}}
                    {{--</div>--}}
                    {{--<div class="item8">--}}
                        {{--Это выражается в увеличении предложений ассортиментных групп товара, бесперебойности поставок продукции, ее качестве, гарантийных обязательствах, создании разветвленной дистрибьюторской сети, возможности промежуточного складирования грузов и их доставке по всей территории Украины.--}}
                    {{--</div>--}}
                    {{--<div class="item9">--}}
                        {{--Мы выдерживаем конкурентный паритет и оптимальность соотношения качество - цена по всем группам товара.--}}
                    {{--</div>--}}
                </div>

                @include('components.footerCompany')

            </div>
        </div>

    </div>

@endsection

@section('scripts')

    <script src="{{ asset( 'js/custom_company.js' ) }}"></script>

@endsection
