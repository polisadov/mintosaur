(function () {
  'use strict';

  function ScrollToAnchor(t) { var e = this; void 0 === t && (t = {}); var n = t.offset; void 0 === n && (n = 0); var o = t.duration; void 0 === o && (o = 800), this.offset = n, this.duration = o; var r = function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t }, i = Array.prototype.slice.call(document.getElementsByTagName("a")).filter(function (t) { return function (t) { return -1 != (t.href && t.href.indexOf("#")) }(t) }), a = i.filter(function (t) { return function (t) { return t.pathname == window.location.pathname || "/" + t.pathname == window.location.pathname && t.search == location.search }(t) }); document.addEventListener("click", function (t) { var i = a.filter(function (e) { return t.target === e })[0]; i && (t.preventDefault(), function (t) { var i = t.getAttribute("href"), a = document.querySelector(i), u = a.getAttribute("data-anchor-offset"); n = u || e.offset; var c = function (t) { return Math.floor(t.getBoundingClientRect().top) }(a), f = window.pageYOffset || document.documentElement.scrollTop, l = f, d = f + c - n, m = !1, s = null, h = function (t) { if (m) { return document.documentElement.scrollTop = d, a.focus(), void window.history.pushState("", "", i); } (l == d || t - s >= o) && (m = !0); var e = r((t - s) / o), n = l + (d - l) * e; document.documentElement.scrollTop = n, requestAnimationFrame(h); }; requestAnimationFrame(function (t) { s = t, h(t); }); }(i)); }); }

  var smoothScroll = new ScrollToAnchor({
    offset: 200,
    duration: 1000,
  });

}());

import Swiper, { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './../styles/index.scss';
import AOS from 'aos';

Swiper.use([Autoplay, EffectFade]);

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}



window.onload = () => {
  AOS.init({ easing: 'ease-in-out-sine', disable: 'mobile' });
}

const tapeSwipers = document.querySelectorAll('.tape-swiper');

tapeSwipers.forEach(tape => {
  const swiperBlock = tape.querySelector('.swiper');
  const swiperName = tape.getAttribute('data-swiper-name');

  if (swiperName === "celebrities") {
    const swiper = new Swiper(swiperBlock, {
      slidesPerView: 3,
      spaceBetween: 16,
      allowTouchMove: false,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        1199: {
          loop: true,
          centeredSlides: true,
          slidesPerView: 6,
        },
      },
    });

    if (window.innerWidth > 1199) swiper.slideTo(8)

  } else {
    const swiper = new Swiper(swiperBlock, {
      slidesPerView: 3,
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        1199: {
          slidesPerView: 6,
        },
      },
    });
  }

})


const teamSwiperBlock = document.querySelector('.team-swiper');

if (window.innerWidth >= 768) {
  const teamSwiper = new Swiper(teamSwiperBlock, {
    slidesPerView: 'auto',
    spaceBetween: 16,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    breakpoints: {
      768: {
        slidesPerView: 4,
        loop: false,
      },
      1199: {
        slidesPerView: 5,
        spaceBetween: 26,
      },
    },
  });
} else {
  const teamSwiper = new Swiper(teamSwiperBlock, {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    breakpoints: {
      768: {
        slidesPerView: 4,
        loop: false,
      },
      1199: {
        slidesPerView: 5,
        spaceBetween: 26,
      },
    },
  });
}

const faqBlocks = document.querySelectorAll('.faq__items');

faqBlocks.forEach(block => {
  const items = block.querySelectorAll('.faq-item');

  const closeFaqs = () => {
    items.forEach(item => {
      const head = item.querySelector('.faq-item__head'),
        body = item.querySelector('.faq-item__body');
      item.classList.remove('faq-item--active');
      head.classList.remove('faq-item__head--active');
      body.style.height = 0;
    })
  }

  const openFaq = (faq) => {
    const head = faq.querySelector('.faq-item__head'),
      body = faq.querySelector('.faq-item__body');
    faq.classList.add('faq-item--active');
    head.classList.add('faq-item__head--active');
    body.style.height = body.scrollHeight + 'px';
  }

  const isActiveFaq = (faq) => faq.classList.contains('faq-item--active');


  items.forEach(el => {
    const elHead = el.querySelector('.faq-item__head');
    elHead.addEventListener('click', () => {
      if (isActiveFaq(el)) {
        closeFaqs();
      } else {
        closeFaqs();
        openFaq(el);
      }
    })
  })

})

// const headerHam = document.querySelector('.header__ham');
const navMenu = document.querySelector('.nav');
const burger = document.querySelector('.header__burger');

const toggleNavTriggers = document.querySelectorAll('.toggle-nav-menu-trigger');

// const toggleHam = () => headerHam.classList.toggle('active');
const toggleBurger = () => burger.classList.toggle('burger--active');
const toggleNavMenu = () => {
  navMenu.classList.toggle('nav--active');
}

toggleNavTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    toggleBurger()
    toggleNavMenu()
  })
})

const varNavBtns = document.querySelectorAll('.var-nav__btn');

const varNavSwiperBlock = document.querySelector('.var-nav__swiper')
const varNavSwiper = new Swiper(varNavSwiperBlock, {
  slidesPerView: 1,
  allowTouchMove: false,
  effect: "fade",
});

const variationsSwiperBlock = document.querySelector('.variations__swiper');
const variationsSwiper = new Swiper(variationsSwiperBlock, {
  slidesPerView: 1,
  allowTouchMove: false,
  effect: "fade",
  thumbs: varNavSwiper
});

const numbers = ['first', 'second', 'third']

const inner = document.querySelector('.var-nav__inner');


const clearVarNavBtnsStyling = () => {

  inner.classList.remove('var-nav__inner--' + numbers[0]);
  inner.classList.remove('var-nav__inner--' + numbers[1]);
  inner.classList.remove('var-nav__inner--' + numbers[2]);
  varNavBtns.forEach(btn => {
    btn.classList.remove('var-nav__btn--active');
  })
}

varNavBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    varNavSwiper.slideTo(i);
    variationsSwiper.slideTo(i);
    clearVarNavBtnsStyling();
    btn.classList.add('var-nav__btn--active');
    inner.classList.add('var-nav__inner--' + numbers[i])
  })
})

const categoriesBtnsBlocks = document.querySelectorAll('.var-nav__swiper-slide');

categoriesBtnsBlocks.forEach((categoriesBtnsBlock, i) => {

  const swiperBlock = document.querySelectorAll('.var-content-swiper')[i];
  const swiper = new Swiper(swiperBlock, {
    slidesPerView: 1,
    autoHeight: true,
    allowTouchMove: false,
    effect: "fade",
  });

  const btns = categoriesBtnsBlock.querySelectorAll('.category-btn');

  const clearBtnsStyling = () => {
    btns.forEach(b => {
      b.classList.remove('category-btn--active');
    })
  }

  btns.forEach((btn, j) => {
    btn.addEventListener('click', () => {
      swiper.slideTo(j)
      clearBtnsStyling();
      btn.classList.add('category-btn--active');
    })
  })

})


