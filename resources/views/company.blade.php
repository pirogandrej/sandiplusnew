@extends('layouts.template')

@section('styles')
@endsection

@section('content')

    @include('components.mobileMenu')

    @include('components.mainMenu')

    <div id="screens-list" class="container-fluid company mb-0">

        <div class="row">

            <div class="col">
                <div class="block-fix position-fixed left">
                    @include('components.blockLeft')
                </div>
            </div>

            <div class="col-5 mainBlock">

                <div class="row screen">
                    <div class="col content">
                        <div class="txt-number txt-center pt-6 pb-2">
                            01
                        </div>
                        <div class="txt-title txt-center pb-4">
                            Компания
                        </div>
                        <div class="txt-italic txt-center pb-4">
                            Крупный поставщик и надежный партнер<br>
                            на рынке теплотехнической и сантехнической продукции<br>
                            в Украине с собственной дистрибьюторской сетью.
                        </div>
                        <div class="pb-5">
                            <img src="{{ asset( 'img\img1-page1-screen1.png' ) }}" class="w-100" alt="">
                        </div>
                        <div class="txt-bold pb-4">
                            Ваш надежный бизнес-партнер
                        </div>
                        <div class="txt-normal pb-4">
                            Компания SANDI+ более пятнадцати лет является одним из самых мощных операторов отечественного рынка отопления, водоснабжения и сантехники.
                        </div>
                        <div class="txt-italic-bold position-2 pb-4">
                            Наша работа направлена на постоянное улучшение стандартов обслуживания клиентов.
                        </div>
                        <div class="txt-normal pb-4">
                            Это выражается в увеличении предложений ассортиментных групп товара, бесперебойности поставок продукции, ее качестве, гарантийных обязательствах, создании разветвленной дистрибьюторской сети, возможности промежуточного складирования грузов и их доставке по всей территории Украины.
                        </div>
                        <div class="txt-normal pb-4">
                            Мы выдерживаем конкурентный паритет и оптимальность соотношения качество - цена по всем группам товара.
                        </div>
                    </div>

                </div>

                <div class="row screen">
                    <div class="col">

                        <div class="content">
                            <div class="txt-number txt-center pt-6 pb-2">
                                02
                            </div>
                            <div class="txt-title txt-center pb-4">
                                Видение
                            </div>
                            <div class="txt-italic txt-center pb-5">
                                Видение организации - это образное представление смысла<br>деятельности и перспектив (будущего) организации.
                            </div>
                            <div class="txt-bold pb-4">
                                Какими мы должны быть<br>и к чему стремимся
                            </div>
                            <div class="txt-normal pb-4">
                                Видение объясняет и демонстрирует всем сотрудникам и общественности, что представляет собой организация, какой она должна стать и к чему она стремится. Видение будущего крупной компании - это представление о политической, экономической, социальной ситуации в стране, в отрасли, а также о желаемом состоянии предприятия в этой ситуации.
                            </div>
                            <div class="txt-normal pb-4">
                                Видение относится лишь к будущему: оно теряет свою актуальность при достижении желаемого состояния предприятия и должно быть сформулировано вновь. Формулировка видения должна быть лаконичной, динамичной конструкцией, удобной для восприятия (часто это бывает лозунг), и отвечать следующим требованиям: вдохновлять, быть простой, как воспоминание или образ, заслуживать доверие и содержать ориентиры, которые могут служить основой для разработки стратегии.
                            </div>
                            <div class="txt-italic-bold position-3 pb-4">
                                Так как, формирование видение - это одна из задач высшего руководства.
                            </div>
                            <div class="txt-normal pb-4">
                                Я постарался его сформулировать исходя из собственных взглядов на все то, что вокруг нас сейчас происходит в политическом, экономическом и социальном плане.
                            </div>
                            <div class="mx-auto pb-5 w-90">
                                <img src="{{ asset( 'img\img2-page1-screen4.png' ) }}" class="w-100" alt="">
                            </div>
                            <div class="txt-bold pb-4">
                                Видение
                            </div>
                            <div class="txt-italic-bold position-1 pb-4">
                                Создать компанию - платформу, где будут работать и взаимодействовать лучшие из лучших, где самый амбициозный план - это реальность,
                            </div>
                            <div class="txt-italic pb-6">
                                где каждый может себя найти и реализовать в профессиональном плане на все 100% и получить при этом не только моральное удовлетворение, но и материальное вознаграждение, для того чтобы достичь своих жизненных целей и воплотить в реальность свои мечты.
                            </div>
                            <div class="div_bottom mb-4">
                                <div class="pt-5 w-3 mx-auto pb-5">
                                    <img src="{{ asset( 'img\icon-quotes.png' ) }}" class="w-100" alt="">
                                </div>
                                <div class="txt-italic-bold txt-center mx-auto w-64 pb-4">
                                    Единственная доминирующая задача в жизни - найти свое дело и выполнить его,
                                </div>
                                <div class="txt-italic txt-center pb-4">
                                    я хочу чтобы наша компания была площадкой для каждого<br>человека который следует этой цитате.
                                </div>
                                <div class="txt-italic txt-center pb-6">
                                    Генеральный Директор компании.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div class="col">
                <div class="block-fix position-fixed right">
                    @include('components.scrollIndication')
                </div>
            </div>

        </div>
    </div>

    @include('components.footer')

@endsection

@section('scripts')
@endsection
