<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Google Tag Manager -->
    <script>(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-WH8JR73');</script>
    <!-- End Google Tag Manager -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@lang('Mintosaurs — legendary TON NFT')</title>
    <link rel="shortcut icon" href="{{asset('/media/images/favicon.png')}}"/>
    <meta name="description"
          сontent="@lang('Rare and almost priceless creatures from the red list of TON blockchain.')">
    <meta name="robots" content="index, follow">
{{--    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>--}}
    <link href="{{asset('css/index.css')}}" rel="stylesheet">
</head>

<body>
<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WH8JR73"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
<div id="root">
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="logo header__logo">
                    <img src="#" data-src="{{asset('media/images/logo-main.svg')}}" alt="logo" width="167" height="167"
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
                                    <img src="#" data-src="{{asset('media/images/ru-flag.png')}}" alt="icon" width="20" height="20"
                                         class="i-link__icon">
                                    <span class="i-link__text">Rus Version</span>
                                </a>
                            @else
                                <a href="/" class="i-link">
                                    <img src="#" data-src="{{asset('media/images/eng-flag.png')}}" alt="icon" width="20" height="20"
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

                <img src="#" data-src="{{asset('media/images/map-decor.svg')}}" alt="img" width="276" height="171"
                     class="header__decor-map">
            </div>
        </div>
    </header>
    <main class="main">
        <div class="main-scr">
            @yield('content')
        </div>
    </main>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                @if(\Mcamara\LaravelLocalization\Facades\LaravelLocalization::getCurrentLocale() === 'en')
                    <a href="https://ton.org" target="_blank" class="l-link footer__l-link">
                        <span class="l-link__text">@lang('Based on')</span>
                        <img src="#" data-src="media/images/ton-logo-text.svg" alt="icon" width="96" height="40"
                             class="l-link__icon">
                    </a>
                @else
                    <a href="https://ru.ton.org" target="_blank" class="l-link footer__l-link">
                        <span class="l-link__text">@lang('Based on')</span>
                        <img src="#" data-src="media/images/ton-logo-text.svg" alt="icon" width="96" height="40"
                             class="l-link__icon">
                    </a>
                @endif

                <div class="logo footer__logo">
                    <img src="#" data-src="media/images/logo-main.svg" alt="logo" width="130" height="137" class="logo__img">
                </div>
                @if(\Mcamara\LaravelLocalization\Facades\LaravelLocalization::getCurrentLocale() === 'en')
                    <a href="https://t.me/mintosaurs" target="_blank" class="l-link footer__l-link">
                        <span class="l-link__text">@lang('Project channel')</span>
                        <img src="#" data-src="media/images/telegram.svg" alt="icon" width="40" height="40" class="l-link__icon">
                    </a>
                @else
                    <a href="https://t.me/mintosaurs_ru" target="_blank" class="l-link footer__l-link">
                        <span class="l-link__text">@lang('Project channel')</span>
                        <img src="#" data-src="media/images/telegram.svg" alt="icon" width="40" height="40" class="l-link__icon">
                    </a>
                @endif

            </div>
        </div>
    </footer>
</div>

<script defer src="js/app.js"></script>

</body>

</html>

