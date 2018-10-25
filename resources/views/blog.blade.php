@extends('layouts.template')

@section('styles')
    <link rel="stylesheet" href="{{ asset('css/custom_blog.css') }}">
@endsection

@section('content')

    @include('components.mobileMenu')

    @include('components.mainMenu')

    <div id="screens-list" class="container-fluid blog">

        <div class="row screen">

            <div class="col">
                <div class="block-fix position-fixed left">
                    <div class="arrowPointer">
                        <a href="#">
                            <span class="arrow"><</span>
                            <span class="text">BACK</span>
                        </a>
                    </div>
                    <div class="morePostsInterest">
                        <div class="title">
                            MORE INTERESTING
                        </div>

                        <div class="row pb-3">
                            <div class="col-5">
                                <img src="{{ asset( 'img\img4-page2-screen1.png' ) }}" alt="" class="w-100">
                            </div>
                            <div class="col-7">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="hr-color"></div>
                                    </div>
                                    <div class="col-12 titlePost">
                                        Социальный проект SANDI+ совместно с ICMA S.P.A.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row pb-3">
                            <div class="col-5">
                                <img src="{{ asset( 'img\img4-page2-screen1.png' ) }}" alt="" class="w-100">
                            </div>
                            <div class="col-7">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="hr-color"></div>
                                    </div>
                                    <div class="col-12 titlePost">
                                        Социальный проект SANDI+ совместно с ICMA S.P.A.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row pb-3">
                            <div class="col-5">
                                <img src="{{ asset( 'img\img4-page2-screen1.png' ) }}" alt="" class="w-100">
                            </div>
                            <div class="col-7">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="hr-color"></div>
                                    </div>
                                    <div class="col-12 titlePost">
                                        Социальный проект SANDI+ совместно с ICMA S.P.A.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-5">

                <div class="content pt-6">
                    <div class="w-10 pb-4">
                        <div class="hr-color"></div>
                    </div>
                    <div class="txt-title pb-3">
                        SANDI+ и партнеры<br>в Турции. Посещение<br>завода Daikin.
                    </div>
                    <div class="txt-normal-small pb-5 w-75">
                        <div class="iconTime">
                        </div>
                        <div>
                            26 Апрель 2018
                        </div>
                    </div>
                    <div class="txt-italic w-75 pb-4">
                        Партнеры компании SANDI+ провели три незабываемых дня в Стамбуле.
                    </div>
                    <div class="txt-normal pb-5">
                        План поездки был такой: встреча с нашими турецкими бизнес-партнерами, экскурсия на завод Daikin, экскурсия по этому самобытному городу. Мы узнали историю развития компании, с чего все начиналось, какие планы у топ-менеджеров Daikin на будущее, какой путь усовершенствования котлов TM Airfel. Сам завод впечатлил всех нас своими масштабами, автоматизацией и высоким качеством работы всех процессов.
                    </div>
                    <div class="pb-5">
                        <img src="{{ asset( 'img\img3-page2-screen1.png' ) }}" class="w-100" alt="">
                    </div>
                    <div class="txt-normal pb-5">
                        А сравнится с впечатлениями от экскурсии по заводу могли только эмоции от путешествия по Стамбулу. Экзотические достопримечательности, отдых на яхте в замечательной компании и этот невероятный закат - все это останется еще надолго в наших сердцах.
                    </div>
                    <div class="blockVideo">
                        <iframe width="560" height="314" src="https://www.youtube.com/embed/FK2F_oGKTsk" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                @include('components.social')
            </div>

            <div class="col">
                <div class="block-fix position-fixed right">
                    <div class="arrowPointer">
                        <a href="#">
                            <span class="text">NEXT</span>
                            <span class="arrow">></span>
                        </a>
                    </div>
                    <div class="nextPostTitle">
                        <a href="#">
                            Марко Пенацци на форуме Architecture& Design Thinking
                        </a>
                    </div>
                </div>
            </div>

        </div>

    </div>

@endsection

@section('scripts')
@endsection
