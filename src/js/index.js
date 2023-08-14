// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Parallax,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Scrollbar, Keyboard, Parallax],

  direction: "horizontal",

  loop: true,
  parallax: true,
  speed: 1000,

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".slider-controls__count",
    type: "fraction",
  },

  navigation: {
    nextEl: "#slider-next",
    prevEl: "#slider-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
