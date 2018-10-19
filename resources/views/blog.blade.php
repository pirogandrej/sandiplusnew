@extends('layouts.template')

@section('styles')

    <link rel="stylesheet" href="{{ asset('css/custom_blog.css') }}">

@endsection

@section('content')

    @include('components.mobileMenu')

    @include('components.mainMenu')

    <div id="screens-list" class="container-fluid" data-page-id="2" data-screen-id="1">

        <div class="row screen" id="screen-1">
            <div class="col-12">

                <div class="content">
                    <div class="item1" id="itemColor">
                        <div class="hr-color"></div>
                    </div>
                    <div class="item2" id="blogName">
                        SANDI+ и партнеры<br>в Турции. Посещение<br>завода Daikin.
                    </div>
                    <div class="item3" id="blogDate">
                        <div class="iconTime">
                        </div>
                        <div>
                            26 Апрель 2018
                        </div>
                    </div>
                    <div class="item4">
                        Партнеры компании SANDI+ провели три незабываемых дня в Стамбуле.
                    </div>
                    <div class="item5">
                        План поездки был такой: встреча с нашими турецкими бизнес-партнерами, экскурсия на завод Daikin, экскурсия по этому самобытному городу. Мы узнали историю развития компании, с чего все начиналось, какие планы у топ-менеджеров Daikin на будущее, какой путь усовершенствования котлов TM Airfel. Сам завод впечатлил всех нас своими масштабами, автоматизацией и высоким качеством работы всех процессов.
                    </div>
                    <div class="item6">
                        <img src="{{ asset( 'img\img3-page2-screen1.png' ) }}" alt="">
                    </div>
                    <div class="item7">
                        А сравнится с впечатлениями от экскурсии по заводу могли только эмоции от путешествия по Стамбулу. Экзотические достопримечательности, отдых на яхте в замечательной компании и этот невероятный закат - все это останется еще надолго в наших сердцах.
                    </div>
                    <div class="item8">
                        <iframe width="560" height="314" src="https://www.youtube.com/embed/FK2F_oGKTsk" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

{{--                @include('components.footerCompany')--}}

            </div>
        </div>

    </div>

@endsection

@section('scripts')
@endsection
