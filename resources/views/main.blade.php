<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('Mintosaurs — legendary TON NFT')</title>
    <link rel="shortcut icon" href="{{asset('/media/images/favicon.png')}}"/>
    <meta name="description"
          сontent="@lang('Rare and almost priceless creatures from the red list of TON blockchain.')">
    <meta name="robots" content="index, follow">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>
    <link href="{{asset('css/index.css')}}" rel="stylesheet">
</head>

<body>
<div id="root">
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="logo header__logo">
                    <img src="{{asset('media/images/logo-main.svg')}}" alt="logo" width="167" height="167"
                         class="logo__img">
                </div>
                <div class="header__text-box">
                    <p class="nav__heading">@lang('Mintosaurs — legendary TON NFT')</p>
                    <p class="nav__text">@lang('Rare and almost priceless creatures from the red list of TON blockchain.')</p>
                </div>
                <div class="header__burger burger toggle-nav-menu-trigger">
                    <div class="burger__inner">
                        <div class="burger__stick"></div>
                    </div>
                </div>

                <nav class="nav header__nav">
                    <div class="nav__info">
                        <ul class="menu-list nav__menu-list">
                            <li class="menu-list__item">
                                <a href="#_1"
                                   class="menu-list__link toggle-nav-menu-trigger">@lang('Mintosaurs type')</a>
                            </li>
                            <li class="menu-list__item">
                                <a href="#_2"
                                   class="menu-list__link toggle-nav-menu-trigger">@lang('Project leader')</a>
                            </li>
                        </ul>
                        <p class="nav__heading">@lang('Mintosaurs — legendary TON NFT')</p>
                        <p class="nav__text">@lang('Rare and almost priceless creatures from the red list of TON blockchain.')</p>
                    </div>

                    <div class="nav__btns">
                        <div class="nav__links">
                            @if(\Mcamara\LaravelLocalization\Facades\LaravelLocalization::getCurrentLocale() === 'en')
                                <a href="/ru" class="i-link">
                                    <img src="{{asset('media/images/ru-flag.png')}}" alt="icon" width="20" height="20"
                                         class="i-link__icon">
                                    <span class="i-link__text">Rus Version</span>
                                </a>
                            @else
                                <a href="/" class="i-link">
                                    <img src="{{asset('media/images/eng-flag.png')}}" alt="icon" width="20" height="20"
                                         class="i-link__icon">
                                    <span class="i-link__text">Eng Version</span>
                                </a>
                            @endif
                        </div>
                        <a href="https://t.me/mintosaurs_bot" class="btn btn--s" target="_blank">
                            <span class="btn-text btn-text--s">@lang('Buy')</span>
                        </a>
                    </div>
                </nav>

                <img src="{{asset('media/images/map-decor.svg')}}" alt="img" width="276" height="171"
                     class="header__decor-map">
            </div>
        </div>
    </header>
    <main class="main">
        <div class="main-scr">
            <div class="container">
                <div class="main-scr__inner">
                    <p class="heading main-scr__heading" data-aos="fade-right">@lang("Mintosaurs — who are they?")</p>
                    <p class="body-text main-scr__body-text" data-aos="fade-right" data-aos-delay="100">
                        @lang("Imagine the crazy symbiosis of Jurassic Park and Arnold Schwarzenegger's Red Heat?")
                        <br><br>
                        @lang("And that's not all. Mintosaurs are trying to connect dinosaurs with the symbolism of the Soviet Union. Stalin’s security officers pterodactels? Soviet Police-velociraptors? Or maybe it will be the Tirex Marshal of the Soviet Union during a vacation in communist Cuba?")
                        <br><br>
                        @lang("In the world of mintosaurs, all this becomes possible!")
                    </p>
                    <div class="main-scr__img-box">
                        <img src="media/images/main-scr__img.png" alt="img" width="467" height="501"
                             class="main-scr__img">
                    </div>
                </div>
            </div>
            <div class="info-tape main-scr__info-tape" id="_1">
                <div class="container">
                    <div class="info-tape__inner">
                        <a href="#red-book" class="btn info-tape__btn">
                            <span class="btn-text">@lang("View Red List")</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="main-scr__bg-box">
                <img src="media/images/main-scr__bg.png" alt="img" width="731" height="805" class="main-scr__bg">
            </div>
        </div>
        <div class="tape-swiper tape-swiper--shadowed" data-aos="fade-up">
            <div class="tape-swiper__swiper swiper">
                <div class="tape-swiper__swiper-wrapper swiper-wrapper">
                    <div class="tape-swiper__swiper-slide swiper-slide">
                        <img src="media/images/dinos/01.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide swiper-slide">
                        <img src="media/images/dinos/02.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide swiper-slide">
                        <img src="media/images/dinos/03.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide swiper-slide">
                        <img src="media/images/dinos/04.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide swiper-slide">
                        <img src="media/images/dinos/01.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide swiper-slide">
                        <img src="media/images/dinos/02.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide swiper-slide">
                        <img src="media/images/dinos/03.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide swiper-slide">
                        <img src="media/images/dinos/04.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide swiper-slide">
                        <img src="media/images/dinos/01.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                </div>
            </div>
        </div>
        <div class="variations" id="red-book">
            <img src="media/images/v-decor-center.svg" alt="decor" width="1003" height="997"
                 class="variations__decor-center">
            <img src="media/images/v-decor-left.png" alt="decor" width="260" height="381"
                 class="variations__decor-left">
            <img src="media/images/v-decor-right.png" alt="decor" width="245" height="381"
                 class="variations__decor-right">
            <div class="container">
                <div class="variations__inner">
                    <img src="media/images/logo.svg" alt="logo" width="207" height="121" class="variations__logo"
                         data-aos="fade-up">
                    <p class="heading variations__heading" data-aos="fade-up">@lang("Red list")</p>
                    <p class="body-text variations__body-text"
                       data-aos="fade-up">@lang("Mintosaurs have a complex hierarchy based on their race, duty station, and rank. In addition, they can be both on duty and on vacation. And some of them even to move from 2D to 3D.")</p>
                    <div class="variations__var-nav var-nav" data-aos="fade-up">
                        <div class="var-nav__inner var-nav__inner--first">
                            <div class="var-nav__head">
                                <button class="var-nav__btn var-nav__btn--active btn-text">@lang("Velociraptors") (9
                                    440)
                                </button>
                                <button class="var-nav__btn btn-text">@lang("Tyrannosauruses") (149)</button>
                                <button class="var-nav__btn btn-text">@lang("Pterodactyls") (400)</button>
                            </div>
                            <div class="var-nav__body">
                                <div class="var-nav__swiper swiper">
                                    <div class="var-nav__swiper-wrapper swiper-wrapper">
                                        <div class="var-nav__swiper-slide swiper-slide">
                                            <button class="category-btn category-btn--active var-nav__category-btn">
                                                <span class="category-btn__text">@lang("On vacation") (4 625)</span>
                                            </button>
                                            <button class="category-btn var-nav__category-btn">
                                                <span class="category-btn__text">@lang("In service") (4 625)</span>
                                            </button>
                                            <button class="category-btn var-nav__category-btn">
                                                <span class="category-btn__text">@lang("Mixed") (190)</span>
                                            </button>
                                        </div>
                                        <div class="var-nav__swiper-slide swiper-slide">
                                            <button class="category-btn category-btn--active var-nav__category-btn">
                                                <span class="category-btn__text">@lang("In service") (64)</span>
                                            </button>
                                            <button class="category-btn var-nav__category-btn">
                                                <span class="category-btn__text">@lang("Mixed") (64)</span>
                                            </button>
                                            <button class="category-btn var-nav__category-btn">
                                                <span class="category-btn__text">@lang("Elite 3D") (21)</span>
                                            </button>
                                        </div>
                                        <div
                                            class="var-nav__swiper-slide var-nav__swiper-slide--single-item swiper-slide">
                                            <button class="category-btn category-btn--active var-nav__category-btn">
                                                <span
                                                    class="category-btn__text">@lang('Stalin’s security officers always in service')</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="variations__swiper swiper" data-aos="fade-up">
                        <div class="variations__swiper-wrapper swiper-wrapper">
                            <div class="variations__swiper-slide swiper-slide">
                                <div class="var-content-swiper variations__var-content-swiper swiper">
                                    <div class="var-content-swiper__wrapper swiper-wrapper">
                                        <div class="var-content-swiper__slide swiper-slide">
                                            <div class="var-content-swiper__content">
                                                <div class="var-content-swiper__content-row">
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/dash-bg.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang("BACKGROUND")</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <img src="media/images/icons/colors.svg" alt="img"
                                                                     width="488" height="64"
                                                                     class="sm-info-card__img">
                                                                <div class="sm-info-card__small-tags">
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/clr-palette.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang("COLORING")</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <img src="media/images/icons/clr-palette--y-g-lg-b.svg"
                                                                     alt="img" width="488"
                                                                     height="64" class="sm-info-card__img">
                                                                <div
                                                                    class="sm-info-card__small-tags sm-info-card__small-tags--less-than-6-items">
                                                                    <div class="small-tag sm-info-card__small-tag">40%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">30%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">20%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">10%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/mouth.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang("MOUTH")</p>
                                                            </div>
                                                            <div class="sm-info-card__content">

                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">70%</div>
                                                                    <img src="media/images/icons/mouth--close.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('closed')
                                                                    </p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/mouth--open++.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('unfolded')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/mouth--open.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('open')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/lasor.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang("Laser")</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/no.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('none')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">8%</div>
                                                                    <img src="media/images/icons/laser--blue.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('blue')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">8%</div>
                                                                    <img src="media/images/icons/laser--red.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('red')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">4%</div>
                                                                    <img src="media/images/icons/laser--yellow.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('yellow')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="var-content-swiper__content-row var-content-swiper__content-row--items-full-width">
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/gun.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang("OBJECT")
                                                                </p>
                                                            </div>
                                                            <div
                                                                class="sm-info-card__content sm-info-card__content--items-margin-bottom-50">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">60%</div>
                                                                    <img src="media/images/icons/no.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('none')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">15%</div>
                                                                    <img src="media/images/icons/camera.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('camera')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">15%</div>
                                                                    <img src="media/images/icons/beer.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('baltika&nbsp;3')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/coctail.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('cocktail')</p>
                                                                </div>
                                                                <div
                                                                    class="t-info sm-info-card__t-info sm-info-card__t-info--mb0onmob">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/baltika-9.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('baltika&nbsp;9')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/uniform.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('T-SHIRT')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">50%</div>
                                                                    <img src="media/images/icons/skirt--blue.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('cyan')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">30%</div>
                                                                    <img src="media/images/icons/skirt--green.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('green')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/skirt--pink.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('pink')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/eye.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('PUPIL')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/eye--yellow.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('yellow')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/eye--red.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('red')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/pattern.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('PATTERN')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/flowers.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('flowers')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/leafs.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('leaves')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/hat.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('HAT')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">60%</div>
                                                                    <img src="media/images/icons/fruits.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('fruits')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">40%</div>
                                                                    <img src="media/images/icons/safari.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('safari')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="var-content-swiper__slide swiper-slide">
                                            <div class="var-content-swiper__content">
                                                <div class="var-content-swiper__content-row">
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/dash-bg.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('BACKGROUND')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <img src="media/images/icons/colors.svg" alt="img"
                                                                     width="488" height="64"
                                                                     class="sm-info-card__img">
                                                                <div class="sm-info-card__small-tags">
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/clr-palette.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('COLORING')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <img src="media/images/icons/clr-palette--y-g-lg-b.svg"
                                                                     alt="img" width="488"
                                                                     height="64" class="sm-info-card__img">
                                                                <div
                                                                    class="sm-info-card__small-tags sm-info-card__small-tags--less-than-6-items">
                                                                    <div class="small-tag sm-info-card__small-tag">40%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">30%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">20%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">10%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/mouth.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('MOUTH')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">

                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">70%</div>
                                                                    <img src="media/images/icons/mouth--close.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('closed')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/mouth--open++.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('unfolded')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/mouth--open.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('open')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/lasor.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('Laser')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/no.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('none')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">8%</div>
                                                                    <img src="media/images/icons/laser--blue.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        синий</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">8%</div>
                                                                    <img src="media/images/icons/laser--red.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('red')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">4%</div>
                                                                    <img src="media/images/icons/laser--yellow.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('yellow')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="var-content-swiper__content-row var-content-swiper__content-row--items-full-width">

                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card sm-info-card--padding-bottom-higher">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/gun.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('OBJECT')</p>
                                                            </div>
                                                            <div
                                                                class="sm-info-card__content sm-info-card__content--md-margins sm-info-card__content--items-margin-bottom-50">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/no.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('none')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">15%</div>
                                                                    <img src="media/images/icons/gun.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Makarov pistol')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">5%</div>
                                                                    <img src="media/images/icons/stick.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('traffic wand')</p>
                                                                </div>
                                                                <div
                                                                    class="t-info sm-info-card__t-info sm-info-card__t-info--mb0onmob">
                                                                    <div class="t-info__small-tag small-tag">5%</div>
                                                                    <img src="media/images/icons/racija.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('radio')</p>
                                                                </div>
                                                                <div
                                                                    class="t-info sm-info-card__t-info sm-info-card__t-info--mb0onmob">
                                                                    <div class="t-info__small-tag small-tag">5%</div>
                                                                    <img src="media/images/icons/dubinka.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('baton')</p>
                                                                </div>
                                                                <div
                                                                    class="t-info sm-info-card__t-info sm-info-card__t-info--mb0onmob">
                                                                    <div class="t-info__small-tag small-tag">5%</div>
                                                                    <img src="media/images/icons/naruchniki.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('handcuffs')</p>
                                                                </div>
                                                                <div
                                                                    class="t-info sm-info-card__t-info sm-info-card__t-info--mb0onmob">
                                                                    <div class="t-info__small-tag small-tag">5%</div>
                                                                    <img src="media/images/icons/lupa.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('magnifier')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/rank.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('RANK')</p>
                                                            </div>
                                                            <div
                                                                class="sm-info-card__content sm-info-card__content--items-margin-bottom-50">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">60%</div>
                                                                    <img src="media/images/icons/rank1.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Lieutenant')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/rank2.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Captain')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/rank3.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Major')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">6%</div>
                                                                    <img src="media/images/icons/rank4.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Lieutenant Colonel')</p>
                                                                </div>
                                                                <div
                                                                    class="t-info sm-info-card__t-info sm-info-card__t-info--mb0onmob">
                                                                    <div class="t-info__small-tag small-tag">4%</div>
                                                                    <img src="media/images/icons/rank5.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Colonel')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="var-content-swiper__content-row var-content-swiper__content-row--flex-start">
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/uniform.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('UNIFORM')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">100%</div>
                                                                    <img src="media/images/icons/skirt--base.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('basic')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">100%</div>
                                                                    <img src="media/images/icons/furazhka.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('cap')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/eye.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('PUPIL')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/eye--yellow.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('yellow')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/eye--red.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('red')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="var-content-swiper__slide swiper-slide">
                                            <div class="var-content-swiper__content">
                                                <div class="var-content-swiper__content-row">
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/dash-bg.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('BACKGROUND')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <img src="media/images/icons/colors.svg" alt="img"
                                                                     width="488" height="64"
                                                                     class="sm-info-card__img">
                                                                <div class="sm-info-card__small-tags">
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/clr-palette.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('COLORING')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <img src="media/images/icons/clr-palette--y-g-lg-b.svg"
                                                                     alt="img" width="488"
                                                                     height="64" class="sm-info-card__img">
                                                                <div
                                                                    class="sm-info-card__small-tags sm-info-card__small-tags--less-than-6-items">
                                                                    <div class="small-tag sm-info-card__small-tag">40%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">30%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">20%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">10%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/mouth.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('MOUTH')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">

                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">70%</div>
                                                                    <img src="media/images/icons/mouth--close.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('closed')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/mouth--open++.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('unfolded')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/mouth--open.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('open')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/lasor.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('Laser')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/no.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('none')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">8%</div>
                                                                    <img src="media/images/icons/laser--blue.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('blue')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">8%</div>
                                                                    <img src="media/images/icons/laser--red.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('red')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">4%</div>
                                                                    <img src="media/images/icons/laser--yellow.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('yellow')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="var-content-swiper__content-row var-content-swiper__content-row--items-full-width">

                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card sm-info-card--padding-bottom-higher">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/gun.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('OBJECT')
                                                                </p>
                                                            </div>
                                                            <div
                                                                class="sm-info-card__content sm-info-card__content--md-margins sm-info-card__content--items-margin-bottom-50">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">60%</div>
                                                                    <img src="media/images/icons/no.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('none')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info ">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/gun.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Makarov pistol')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/coctail.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        коктейль</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info ">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/stick.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('traffic wand')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/camera.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('camera')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info ">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/beer.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('baltika&nbsp;3')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info ">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/racija.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('radio')</p>
                                                                </div>
                                                                <div
                                                                    class="t-info sm-info-card__t-info sm-info-card__t-info--mb0onmob">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/dubinka.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('baton')</p>
                                                                </div>
                                                                <div
                                                                    class="t-info sm-info-card__t-info sm-info-card__t-info--mb0onmob">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/naruchniki.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('handcuffs')</p>
                                                                </div>
                                                                <div
                                                                    class="t-info sm-info-card__t-info sm-info-card__t-info--mb0onmob">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/lupa.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('magnifier')</p>
                                                                </div>
                                                                <div
                                                                    class="t-info sm-info-card__t-info sm-info-card__t-info--mb0onmob">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/baltika-9.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('baltika&nbsp;9')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/eye.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('PUPIL')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/eye--yellow.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('yellow')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/eye--red.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('red')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div
                                                    class="var-content-swiper__content-row var-content-swiper__content-row--flex-start">
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/uniform.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('T-SHIRT')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">50%</div>
                                                                    <img src="media/images/icons/skirt--blue.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('cyan')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">30%</div>
                                                                    <img src="media/images/icons/skirt--green.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('green')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/skirt--pink.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('pink')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/pattern.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('PATTERN & HAT')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">100%</div>
                                                                    <img src="media/images/icons/furazhka.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('cap')
                                                                    </p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/flowers.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('fruits')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/leafs.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('leaves')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="variations__swiper-slide swiper-slide">
                                <div class="var-content-swiper variations__var-content-swiper swiper">
                                    <div class="var-content-swiper__wrapper swiper-wrapper">
                                        <div class="var-content-swiper__slide swiper-slide">
                                            <div class="var-content-swiper__content">
                                                <div
                                                    class="var-content-swiper__content-row var-content-swiper__content-row--flex-start">
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/dash-bg.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('BACKGROUND')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <img src="media/images/icons/colors.svg" alt="img"
                                                                     width="488" height="64"
                                                                     class="sm-info-card__img">
                                                                <div class="sm-info-card__small-tags">
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/clr-palette.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('COLORING')
                                                                </p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <img src="media/images/icons/colros--two.svg" alt="img"
                                                                     width="488" height="64"
                                                                     class="sm-info-card__img">
                                                                <div
                                                                    class="sm-info-card__small-tags sm-info-card__small-tags--less-than-6-items">
                                                                    <div class="small-tag sm-info-card__small-tag">50%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">50%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/mouth.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('MOUTH')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">50%</div>
                                                                    <img src="media/images/icons/mouth--open.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('open')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">30%</div>
                                                                    <img src="media/images/icons/mouth--close.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('closed')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/mouth--laser.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Laser')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/eye.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('PUPIL')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/eye--yellow.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('yellow')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/eye--red.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('red')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="var-content-swiper__content-row var-content-swiper__content-row--flex-start">
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/rank.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('RANK')</p>
                                                            </div>
                                                            <div
                                                                class="sm-info-card__content sm-info-card__content--md-margins">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">78,1%</div>
                                                                    <img src="media/images/icons/general.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('General')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">21,9%</div>
                                                                    <img src="media/images/icons/marshall.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Marshal')</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card sm-info-card--padding-bottom-higher">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/gun.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('OBJECT')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">60%</div>
                                                                    <img src="media/images/icons/no.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('none')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">30%</div>
                                                                    <img src="media/images/icons/gun.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Makarov pistol')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/vziatka.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('bribe')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="var-content-swiper__slide swiper-slide">
                                            <div class="var-content-swiper__content">
                                                <div
                                                    class="var-content-swiper__content-row var-content-swiper__content-row--flex-start">
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/dash-bg.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('BACKGROUND')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <img src="media/images/icons/colors.svg" alt="img"
                                                                     width="488" height="64"
                                                                     class="sm-info-card__img">
                                                                <div class="sm-info-card__small-tags">
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/clr-palette.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('COLORING')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <img src="media/images/icons/colros--two.svg" alt="img"
                                                                     width="488" height="64"
                                                                     class="sm-info-card__img">
                                                                <div
                                                                    class="sm-info-card__small-tags sm-info-card__small-tags--less-than-6-items">
                                                                    <div class="small-tag sm-info-card__small-tag">50%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">50%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/mouth.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('MOUTH')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">50%</div>
                                                                    <img src="media/images/icons/mouth--open.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('open')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">30%</div>
                                                                    <img src="media/images/icons/mouth--close.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('closed')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/mouth--laser.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Laser')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/eye.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('PUPIL')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/eye--yellow.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('yellow')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/eye--red.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('red')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/gun.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('OBJECT')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/no.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('none')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/martini.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('martinis')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="var-content-swiper__content-row var-content-swiper__content-row--flex-start">
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/rank.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('RANK')</p>
                                                            </div>
                                                            <div
                                                                class="sm-info-card__content sm-info-card__content--md-margins">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">78,1%</div>
                                                                    <img src="media/images/icons/general.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('General')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">21,9%</div>
                                                                    <img src="media/images/icons/marshall.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Marshal')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/uniform.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('T-SHIRT')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">50%</div>
                                                                    <img src="media/images/icons/skirt--blue.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('cyan')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">30%</div>
                                                                    <img src="media/images/icons/skirt--green.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('green')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/skirt--pink.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('pink')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/pattern.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('PATTERN')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/flowers.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('flowers')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/leafs.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('leaves')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="var-content-swiper__slide swiper-slide">
                                            <div class="var-content-swiper__content">
                                                <div
                                                    class="var-content-swiper__content-row var-content-swiper__content-row--flex-start">
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card sm-info-card--padding-bottom-higher">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/rank.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('UNIFORM')</p>
                                                            </div>
                                                            <div
                                                                class="sm-info-card__content sm-info-card__content--md-margins sm-info-card__content--items-margin-bottom-50">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">47%</div>
                                                                    <img src="media/images/icons/marshall.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Marshal')</p>
                                                                </div>
                                                                <div
                                                                    class="t-info sm-info-card__t-info sm-info-card__t-info--mb0onmob">
                                                                    <div class="t-info__small-tag small-tag">47%</div>
                                                                    <img src="media/images/icons/skirt--base.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('Marshal&nbsp;on vacation')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/clr-palette.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('COLORING')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <img src="media/images/icons/colros--two.svg" alt="img"
                                                                     width="488" height="64"
                                                                     class="sm-info-card__img">
                                                                <div
                                                                    class="sm-info-card__small-tags sm-info-card__small-tags--less-than-6-items">
                                                                    <div class="small-tag sm-info-card__small-tag">50%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">50%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/mouth.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('MOUTH')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">50%</div>
                                                                    <img src="media/images/icons/mouth--open.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('open')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">30%</div>
                                                                    <img src="media/images/icons/mouth--close.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('closed')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/mouth--laser.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Laser')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/gun.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('OBJECT')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/gun.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Makarov pistol')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/martini.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('martinis')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="variations__swiper-slide swiper-slide">
                                <div class="var-content-swiper variations__var-content-swiper swiper">
                                    <div class="var-content-swiper__wrapper swiper-wrapper">
                                        <div class="var-content-swiper__slide swiper-slide">
                                            <div class="var-content-swiper__content">
                                                <div
                                                    class="var-content-swiper__content-row var-content-swiper__content-row--flex-start">
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/dash-bg.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('BACKGROUND')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <img src="media/images/icons/colors.svg" alt="img"
                                                                     width="488" height="64"
                                                                     class="sm-info-card__img">
                                                                <div class="sm-info-card__small-tags">
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">
                                                                        16,6%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/clr-palette.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">
                                                                    @lang('COLORING')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <img src="media/images/icons/colors--three.svg"
                                                                     alt="img" width="488" height="64"
                                                                     class="sm-info-card__img">
                                                                <div
                                                                    class="sm-info-card__small-tags sm-info-card__small-tags--3-items">
                                                                    <div class="small-tag sm-info-card__small-tag">40%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">40%
                                                                    </div>
                                                                    <div class="small-tag sm-info-card__small-tag">20%
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/mouth.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('MOUTH')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/mouth--open.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('open')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/mouth--close.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('closed')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/eye.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('PUPIL')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/eye--yellow.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('yellow')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/eye--red.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('red')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/lasor.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang('Laser')</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/no.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('none')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/laser--blue.png"
                                                                         alt="icon" width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('yes')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="var-content-swiper__content-row var-content-swiper__content-row--flex-start">
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/gun.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang("OBJECT LEFT")</p>
                                                            </div>
                                                            <div class="sm-info-card__content">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">70%</div>
                                                                    <img src="media/images/icons/no.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('none')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/ussr.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('credentials')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">10%</div>
                                                                    <img src="media/images/icons/knife.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('Finland&nbsp;knife')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="var-content-swiper__content-column">
                                                        <div class="sm-info-card">
                                                            <div class="sm-info-card__head">
                                                                <img src="media/images/icons/gun--left.svg" alt="icon"
                                                                     width="30" height="30"
                                                                     class="sm-info-card__icon">
                                                                <p class="title title--s sm-info-card__title">@lang("OBJECT RIGHT")</p>
                                                            </div>
                                                            <div
                                                                class="sm-info-card__content sm-info-card__content--flex-start">
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">80%</div>
                                                                    <img src="media/images/icons/no.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">@lang('none')</p>
                                                                </div>
                                                                <div class="t-info sm-info-card__t-info">
                                                                    <div class="t-info__small-tag small-tag">20%</div>
                                                                    <img src="media/images/icons/mauser.png" alt="icon"
                                                                         width="54" height="54"
                                                                         class="t-info__icon">
                                                                    <p class="semi-15-text t-info__semi-15-text">
                                                                        @lang('mauser')</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="media/images/icons/red-book-ellipse.svg" alt="img" width="778" height="623"
                         class="variations__bg">
                </div>
            </div>
        </div>

        <div class="folders">
            <img src="media/images/icons/folders-bg.svg" alt="img" width="454" height="565" class="folders__bg">
            <div class="container">
                <div class="folders__inner">
                    <p class="heading folders__heading" data-aos="fade-up">Генералиссимус</p>
                    <div class="folders__content" data-aos="fade-up">
                        <img src="media/images/icons/shield.svg" alt="img" width="65" height="65" class="folders__icon">
                        <img src="media/images/icons/lock-1.svg" alt="img" width="250" height="250"
                             class="folders__decor-left">
                        <img src="media/images/icons/lock-2.svg" alt="img" width="213" height="213"
                             class="folders__decor-right">
                        <div class="folders__img-box">
                            <img src="media/images/folder.png" alt="img" width="228" height="260" class="folders__img">
                            <div class="folders__tag">2D</div>
                        </div>
                        <div class="folders__img-box">
                            <img src="media/images/folder.png" alt="img" width="228" height="260" class="folders__img">
                            <div class="folders__tag">3D</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="tape-swiper" data-aos="fade-up" data-swiper-name="celebrities">
            <div class=" container">
                <p class="tape-swiper__heading">@lang("Mintosaurs for Influencers")</p>
            </div>
            <div class="tape-swiper__swiper swiper">
                <div class="tape-swiper__swiper-wrapper tape-swiper__swiper-wrapper--padding swiper-wrapper">
                    <a href="https://tonometerbot.com/@/nemorgenshtern" target="_blank"
                       class="tape-swiper__swiper-slide swiper-slide">
                        <img src="media/images/dinos/05.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                        <span class="btn btn--no-hover tape-swiper__swiper-btn">
                <span class="tape-swiper__swiper-btn-text">
                  @lang("Morgenshtern")
                </span>
                <img src="media/images/icons/swiper-morg.png" alt="img" width="32" height="32"
                     class="tape-swiper__swiper-btn-icon">
              </span>
                    </a>
                    <div class="tape-swiper__swiper-slide tape-swiper__swiper-slide--blured swiper-slide">
                        <img src="media/images/dinos/02.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide tape-swiper__swiper-slide--blured swiper-slide">
                        <img src="media/images/dinos/02.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide tape-swiper__swiper-slide--blured swiper-slide">
                        <img src="media/images/dinos/02.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide tape-swiper__swiper-slide--blured swiper-slide">
                        <img src="media/images/dinos/03.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide tape-swiper__swiper-slide--blured swiper-slide">
                        <img src="media/images/dinos/04.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide tape-swiper__swiper-slide--blured swiper-slide">
                        <img src="media/images/dinos/01.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide tape-swiper__swiper-slide--blured swiper-slide">
                        <img src="media/images/dinos/02.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide tape-swiper__swiper-slide--blured swiper-slide">
                        <img src="media/images/dinos/03.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide tape-swiper__swiper-slide--blured swiper-slide">
                        <img src="media/images/dinos/04.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                    <div class="tape-swiper__swiper-slide tape-swiper__swiper-slide--blured swiper-slide">
                        <img src="media/images/dinos/01.png" alt="img" width="244" height="243"
                             class="tape-swiper__slide-img">
                    </div>
                </div>
            </div>
        </div>

        <div class="s-info" data-aos="fade-right">
            <div class="container">
                <div class="s-info__inner">
                    <p class="s-info__heading">@lang('Would you like to get a Mintosaurus with your personal design? Write:')</p>
                    <a href="https://t.me/filimono" class="s-info__btn">
                        <svg class="s-info__btn-svg" width="20" height="20" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path class="s-info__btn-path"
                                  d="M17.2208 3.0975L2.44583 8.795C1.4375 9.2 1.44333 9.7625 2.26083 10.0133L6.05416 11.1967L14.8308 5.65917C15.2458 5.40667 15.625 5.5425 15.3133 5.81917L8.2025 12.2367H8.20083L8.2025 12.2375L7.94083 16.1475C8.32416 16.1475 8.49333 15.9717 8.70833 15.7642L10.5508 13.9725L14.3833 16.8033C15.09 17.1925 15.5975 16.9925 15.7733 16.1492L18.2892 4.2925C18.5467 3.26 17.895 2.7925 17.2208 3.0975Z"/>
                        </svg>
                        <span class="s-info__btn-text">@filimono</span>
                    </a>
                    <p class="s-info__text">
                        <sup>*</sup> @lang('Conditions: you are a famous person and your appearance is remarkable')
                    </p>
                </div>
            </div>
        </div>
        <div class="b-info-card" id="_2" data-aos="fade-left">
            <div class="container">
                <div class="b-info-card__title heading">@lang('Project leader')</div>
                <div class="b-info-card__inner">
                    <img src="media/images/kirill.png" alt="img" width="392" height="348" class="b-info-card__img">
                    <div class="b-info-card__content">
                        <div class="btn btn--flat b-info-card__supheading">
                            <span class="btn-text">@lang('Project leader')</span>
                        </div>
                        <p class="heading b-info-card__heading">@lang('Kirill Filimonov')</p>
                        <p class="body-text b-info-card__body-text">@lang('The man who stood at the origins of TON. Widely known in the community. Kirill always launches breakthrough things that excite the market and gather talented people around him. And all this for a multilingual audience.')</p>
                        <p class="body-text b-info-card__body-text">
                            @lang("His projects"):<br>
                            @lang("Telegram channels"): <b><a href="https://t.me/givemetonru" target="_blank">@givemetonru</a></b>,
                            <b><a href="https://t.me/tonelite_open" target="_blank">@tonelite_open</a></b>, <b><a
                                    href="https://t.me/tonblogru" target="_blank">@tonblogru</a></b>, <b><a
                                    href="https://t.me/givemetons" target="_blank">@givemetons</a></b>,
                            <b><a href="https://t.me/tonblogen" target="_blank">@tonblogen</a></b>, <b><a
                                    href="https://t.me/givemetonzh" target="_blank">@givemetonzh</a></b>
                        </p>
                        <p class="body-text b-info-card__body-text">
                            @lang("SuperApp"): <b><a href="https://t.me/tonometerbot" target="_blank">@tonometerbot</a></b>
                        </p>
                        <p class="body-text b-info-card__body-text">
                            @lang("Website"): <b><a href="https://ru.ton-telegram.network"
                                                    target="_blank">ru.ton-telegram.network</a></b>
                        </p>
                        <div class="social-links b-info-card__social-links">
                            <a href="https://instagram.com/givemegram" target="_blank" class="social-links__link">
                                <svg class="social-links__svg" width="20" height="20" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path class="social-links__path"
                                          d="M10 1.66667C12.2642 1.66667 12.5467 1.675 13.435 1.71667C14.3225 1.75833 14.9267 1.8975 15.4584 2.10417C16.0084 2.31583 16.4717 2.6025 16.935 3.065C17.3588 3.48158 17.6866 3.98549 17.8959 4.54167C18.1017 5.0725 18.2417 5.6775 18.2834 6.565C18.3225 7.45333 18.3334 7.73583 18.3334 10C18.3334 12.2642 18.325 12.5467 18.2834 13.435C18.2417 14.3225 18.1017 14.9267 17.8959 15.4583C17.6873 16.0148 17.3593 16.5188 16.935 16.935C16.5183 17.3586 16.0144 17.6865 15.4584 17.8958C14.9275 18.1017 14.3225 18.2417 13.435 18.2833C12.5467 18.3225 12.2642 18.3333 10 18.3333C7.73585 18.3333 7.45335 18.325 6.56502 18.2833C5.67752 18.2417 5.07335 18.1017 4.54169 17.8958C3.98529 17.6871 3.48129 17.3591 3.06502 16.935C2.64119 16.5185 2.3133 16.0146 2.10419 15.4583C1.89752 14.9275 1.75835 14.3225 1.71669 13.435C1.67752 12.5467 1.66669 12.2642 1.66669 10C1.66669 7.73583 1.67502 7.45333 1.71669 6.565C1.75835 5.67667 1.89752 5.07333 2.10419 4.54167C2.31272 3.98515 2.64069 3.4811 3.06502 3.065C3.48141 2.64103 3.98538 2.31311 4.54169 2.10417C5.07335 1.8975 5.67669 1.75833 6.56502 1.71667C7.45335 1.6775 7.73585 1.66667 10 1.66667ZM10 5.83333C8.89495 5.83333 7.83514 6.27232 7.05374 7.05372C6.27234 7.83512 5.83335 8.89493 5.83335 10C5.83335 11.1051 6.27234 12.1649 7.05374 12.9463C7.83514 13.7277 8.89495 14.1667 10 14.1667C11.1051 14.1667 12.1649 13.7277 12.9463 12.9463C13.7277 12.1649 14.1667 11.1051 14.1667 10C14.1667 8.89493 13.7277 7.83512 12.9463 7.05372C12.1649 6.27232 11.1051 5.83333 10 5.83333V5.83333ZM15.4167 5.625C15.4167 5.34873 15.3069 5.08378 15.1116 4.88843C14.9162 4.69308 14.6513 4.58333 14.375 4.58333C14.0988 4.58333 13.8338 4.69308 13.6385 4.88843C13.4431 5.08378 13.3334 5.34873 13.3334 5.625C13.3334 5.90127 13.4431 6.16622 13.6385 6.36157C13.8338 6.55692 14.0988 6.66667 14.375 6.66667C14.6513 6.66667 14.9162 6.55692 15.1116 6.36157C15.3069 6.16622 15.4167 5.90127 15.4167 5.625ZM10 7.5C10.6631 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.6631 12.5 10 12.5C9.33698 12.5 8.70109 12.2366 8.23225 11.7678C7.76341 11.2989 7.50002 10.663 7.50002 10C7.50002 9.33696 7.76341 8.70107 8.23225 8.23223C8.70109 7.76339 9.33698 7.5 10 7.5V7.5Z"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com/filimono_k?s=21" target="_blank" class="social-links__link">
                                <svg class="social-links__svg" width="20" height="20" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path class="social-links__path"
                                          d="M19.7025 4.11417C19.0067 4.4225 18.2592 4.63083 17.4733 4.725C18.2842 4.23983 18.8908 3.47622 19.18 2.57667C18.4182 3.02916 17.5844 3.34766 16.715 3.51833C16.1303 2.89405 15.3559 2.48027 14.5119 2.34123C13.668 2.20218 12.8017 2.34566 12.0477 2.74938C11.2936 3.15309 10.694 3.79447 10.3418 4.57392C9.9896 5.35337 9.9046 6.22729 10.1 7.06C8.5564 6.9825 7.04635 6.58129 5.66784 5.88242C4.28934 5.18355 3.07319 4.20263 2.09832 3.00333C1.76499 3.57833 1.57332 4.245 1.57332 4.955C1.57295 5.59416 1.73035 6.22354 2.03155 6.78728C2.33276 7.35102 2.76846 7.8317 3.29999 8.18667C2.68355 8.16705 2.08072 8.00049 1.54166 7.70083V7.75083C1.54159 8.64728 1.85168 9.51615 2.41931 10.21C2.98693 10.9038 3.77713 11.3799 4.65582 11.5575C4.08398 11.7123 3.48444 11.7351 2.90249 11.6242C3.1504 12.3955 3.63332 13.07 4.28363 13.5533C4.93394 14.0365 5.71909 14.3043 6.52916 14.3192C5.15402 15.3987 3.45573 15.9842 1.70749 15.9817C1.39781 15.9817 1.08839 15.9637 0.780823 15.9275C2.55539 17.0685 4.62111 17.674 6.73082 17.6717C13.8725 17.6717 17.7767 11.7567 17.7767 6.62667C17.7767 6.46 17.7725 6.29167 17.765 6.125C18.5244 5.57581 19.1799 4.89575 19.7008 4.11667L19.7025 4.11417Z"/>
                                </svg>
                            </a>
                            <a href="https://t.me/filimono" target="_blank" class="social-links__link">
                                <svg class="social-links__svg" width="20" height="20" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path class="social-links__path"
                                          d="M17.2208 3.0975L2.44583 8.795C1.4375 9.2 1.44333 9.7625 2.26083 10.0133L6.05416 11.1967L14.8308 5.65917C15.2458 5.40667 15.625 5.5425 15.3133 5.81917L8.2025 12.2367H8.20083L8.2025 12.2375L7.94083 16.1475C8.32416 16.1475 8.49333 15.9717 8.70833 15.7642L10.5508 13.9725L14.3833 16.8033C15.09 17.1925 15.5975 16.9925 15.7733 16.1492L18.2892 4.2925C18.5467 3.26 17.895 2.7925 17.2208 3.0975Z"/>
                                </svg>
                            </a>

                            <a href="https://www.youtube.com/c/givemeton" target="_blank" class="social-links__link">
                                <svg class="social-links__svg" width="24" height="24" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path class="social-links__path"
                                          d="M12.0765 2.99854H12.21C13.443 3.00304 19.6905 3.04804 21.375 3.50104C21.8842 3.63929 22.3483 3.90877 22.7207 4.28255C23.0932 4.65633 23.361 5.12131 23.4975 5.63104C23.649 6.20104 23.7555 6.95554 23.8275 7.73404L23.8425 7.89004L23.8755 8.28004L23.8875 8.43604C23.985 9.80704 23.997 11.091 23.9985 11.3715V11.484C23.997 11.775 23.9835 13.146 23.8755 14.574L23.8635 14.7315L23.85 14.8875C23.775 15.7455 23.664 16.5975 23.4975 17.2245C23.3615 17.7345 23.0938 18.1997 22.7212 18.5735C22.3487 18.9474 21.8844 19.2167 21.375 19.3545C19.635 19.8225 13.0215 19.8555 12.105 19.857H11.892C11.4285 19.857 9.5115 19.848 7.5015 19.779L7.2465 19.77L7.116 19.764L6.8595 19.7535L6.603 19.743C4.938 19.6695 3.3525 19.551 2.622 19.353C2.11273 19.2153 1.6486 18.9462 1.27609 18.5726C0.903575 18.1991 0.63577 17.7342 0.4995 17.2245C0.333 16.599 0.222 15.7455 0.147 14.8875L0.135 14.73L0.123 14.574C0.0489714 13.5576 0.0079498 12.5391 0 11.52L0 11.3355C0.003 11.013 0.015 9.89854 0.096 8.66854L0.1065 8.51404L0.111 8.43604L0.123 8.28004L0.156 7.89004L0.171 7.73404C0.243 6.95554 0.3495 6.19954 0.501 5.63104C0.63704 5.12111 0.904743 4.6559 1.27727 4.28206C1.6498 3.90822 2.11405 3.63887 2.6235 3.50104C3.354 3.30604 4.9395 3.18604 6.6045 3.11104L6.8595 3.10054L7.1175 3.09154L7.2465 3.08704L7.503 3.07654C8.93056 3.0306 10.3587 3.00509 11.787 3.00004H12.0765V2.99854ZM9.6 7.81354V15.0405L15.8355 11.4285L9.6 7.81354Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="b-info-card__links">
                        <a href="https://t.me/tonometerbot" target="_blank" class="circle-tag">
                            <img src="media/images/rg1.png" alt="img" width="48" height="48" class="circle-tag__img">
                        </a>
                        <a href="https://t.me/givemetonru" target="_blank" class="circle-tag">
                            <img src="media/images/fri2.png" alt="img" width="48" height="48" class="circle-tag__img">
                        </a>
                        <a href="https://t.me/c/1664352641/5" target="_blank" class="circle-tag">
                            <img src="media/images/ton.png" alt="img" width="48" height="48" class="circle-tag__img">
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </main>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <a href="https://ru.ton.org" target="_blank" class="l-link footer__l-link">
                    <span class="l-link__text">@lang('Based on')</span>
                    <img src="media/images/ton-logo-text.svg" alt="icon" width="96" height="40" class="l-link__icon">
                </a>
                <div class="logo footer__logo">
                    <img src="media/images/logo-main.svg" alt="logo" width="130" height="137" class="logo__img">
                </div>
                @if(\Mcamara\LaravelLocalization\Facades\LaravelLocalization::getCurrentLocale() === 'en')
                    <a href="https://t.me/mintosaurs" target="_blank" class="l-link footer__l-link">
                        <span class="l-link__text">@lang('Project channel')</span>
                        <img src="media/images/telegram.svg" alt="icon" width="40" height="40" class="l-link__icon">
                    </a>
                @else
                    <a href="https://t.me/mintosaurs_ru" target="_blank" class="l-link footer__l-link">
                        <span class="l-link__text">@lang('Project channel')</span>
                        <img src="media/images/telegram.svg" alt="icon" width="40" height="40" class="l-link__icon">
                    </a>
                @endif
                
            </div>
        </div>
    </footer>
</div>
<script defer src="js/488.js"></script>
<script defer src="js/app.js"></script>
</body>

</html>
