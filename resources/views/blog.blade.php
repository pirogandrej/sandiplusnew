@extends('layouts.template')

@section('styles')
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
                                <a href="#">
                                    <img src="{{ asset( 'img\img4-page2-screen1.png' ) }}" alt="" class="w-100">
                                </a>
                            </div>
                            <div class="col-7">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="hr-color blue"></div>
                                    </div>
                                    <div class="col-12 titlePost">
                                        <a href="#">
                                            Социальный проект SANDI+ совместно с ICMA S.P.A.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row pb-3">
                            <div class="col-5">
                                <a href="#">
                                    <img src="{{ asset( 'img\img4-page2-screen1.png' ) }}" alt="" class="w-100">
                                </a>
                            </div>
                            <div class="col-7">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="hr-color green"></div>
                                    </div>
                                    <div class="col-12 titlePost">
                                        <a href="#">
                                            Социальный проект SANDI+ совместно с ICMA S.P.A.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row pb-3">
                            <div class="col-5">
                                <a href="#">
                                    <img src="{{ asset( 'img\img4-page2-screen1.png' ) }}" alt="" class="w-100">
                                </a>
                            </div>
                            <div class="col-7">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="hr-color blue"></div>
                                    </div>
                                    <div class="col-12 titlePost">
                                        <a href="#">
                                            Социальный проект SANDI+ совместно с ICMA S.P.A.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-5 mainBlock">

                <div class="content pt-6">
                    <div class="w-10 pb-4">
                        <div class="hr-color yellow"></div>
                    </div>
                    <div class="txt-title w-75 pb-3">
                        SANDI+ и партнеры в Турции. Посещение завода Daikin.
                    </div>
                    <div class="txt-normal-small pb-5 w-75 postDate">
                        <div class="iconTime">
                            <i class="fa fa-clock-o" aria-hidden="true"></i>
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

                    <div id="gallery" class="unitegallery pb-4">
                        <img src="{{ asset( 'img/blog/gallery/1.png' ) }}" alt="">
                        <img src="{{ asset( 'img/blog/gallery/2.png' ) }}" alt="">
                        <img src="{{ asset( 'img/blog/gallery/3.png' ) }}" alt="">
                        <img src="{{ asset( 'img/blog/gallery/4.png' ) }}" alt="">
                        <img src="{{ asset( 'img/blog/gallery/5.png' ) }}" alt="">
                        <img src="{{ asset( 'img/blog/gallery/6.png' ) }}" alt="">
                        <img src="{{ asset( 'img/blog/gallery/7.png' ) }}" alt="">
                        <img src="{{ asset( 'img/blog/gallery/8.png' ) }}" alt="">
                        <img src="{{ asset( 'img/blog/gallery/9.png' ) }}" alt="">
                        <img src="{{ asset( 'img/blog/gallery/10.png' ) }}" alt="">
                    </div>

                    <div class="txt-normal pb-5">
                        А сравнится с впечатлениями от экскурсии по заводу могли только эмоции от путешествия по Стамбулу. Экзотические достопримечательности, отдых на яхте в замечательной компании и этот невероятный закат - все это останется еще надолго в наших сердцах.
                    </div>
                    <div class="blockVideo">
                        <iframe width="560" height="314" src="https://www.youtube.com/embed/FK2F_oGKTsk" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
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

    @include('components.footer')
@endsection

@section('scripts')
@endsection
