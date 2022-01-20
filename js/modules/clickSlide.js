const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slide = document.querySelectorAll('.slide');
const outer = document.querySelector('.carousel-wrapper');
const inner = document.querySelector('.carousel');
const dot = document.querySelectorAll('.dot');
let outerB = outer.getBoundingClientRect();
let innerB = inner.getBoundingClientRect();
let n = 0;

function clickSlide() {
  slide[n].style.borderColor = '#527CCD';
  dot[n].style.backgroundColor = '#527CCD';

  next.addEventListener('click', (e) => {
    clearBorder();
    n++;
    inner.style.left = `${inner.offsetLeft - 299}px`;
    let coord = slide[slide.length - 1].getBoundingClientRect();

    if (outerB.right > coord.right + 1) {
      inner.style.left = `${inner.offsetLeft + 299}px`;
      if (n <= slide.length - 1) {
        slide[n].style.borderColor = '#527CCD';
      } else {
        n = slide.length - 1;
        slide[n].style.borderColor = '#527CCD';
      }
    }

    if (parseInt(inner.style.left) > 0) {
      n = 0;
      inner.style.left = '0px';
      slide[n].style.borderColor = '#527CCD';
    } else if (innerB.right < outerB.right) {
      slide[n].style.borderColor = '#527CCD';
    }

    dot[n].style.backgroundColor = '#527CCD';
  });

  prev.addEventListener('click', (e) => {
    dot[n].style.backgroundColor = '#C8D9FB';
    clearBorder();
    n--;

    if (inner.offsetLeft <= outerB.width) {
      if (n >= 0) {
        inner.style.left = `${inner.offsetLeft + 299}px`;
        slide[n].style.borderColor = '#527CCD';
      } else {
        n = 0;
        slide[n].style.borderColor = '#527CCD';
        dot[n].style.backgroundColor = '#527CCD';
      }
    }

    if (parseInt(inner.style.left) > 0) {
      inner.style.left = '0px';
    }
  });
}

const clearBorder = (n) => {
  slide.forEach((item) => (item.style.borderColor = '#C8D9FB'));
};

export { clickSlide };
