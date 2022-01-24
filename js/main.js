import { touchSlide } from './modules/touchSlide.js';
import { pages } from './modules/pages.js';
import { clickSlide } from './modules/clickSlide.js';

window.addEventListener('DOMContentLoaded', (e) => {
  pages();
  clickSlide();
  touchSlide();
});
