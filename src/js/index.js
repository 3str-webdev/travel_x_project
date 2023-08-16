import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Keyboard,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper/modules";
import { mobileNav, siteLoader } from "./modules";

mobileNav();
siteLoader();

new Swiper(".swiper", {
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
