import { touchSlide } from './modules/touchSlide.js';
import { pages } from './modules/pages.js';
import { clickSlide } from './modules/clickSlide.js';
// import { habrSlide } from './modules/habrSlide.js';

window.addEventListener('DOMContentLoaded', (e) => {
  pages();
  clickSlide();
  touchSlide();
  // habrSlide();
});
