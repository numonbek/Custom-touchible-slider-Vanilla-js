let slider = document.querySelector('.carousel-wrapper');
let innerSlider = document.querySelector('.carousel');

let pressed = false;
let startX;
let x;

function touchSlide() {
  console.log('touchSlide');

  slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing';
    innerSlider.style.transition = 'none';
  });

  slider.addEventListener('mouseenter', (e) => {
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mouseup', (e) => {
    slider.style.cursor = 'grab ';
  });

  window.addEventListener('mouseup', (e) => {
    pressed = false;
    innerSlider.style.transition = 'all 1s ease';
  });

  slider.addEventListener('mousemove', (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;

    checkBoundary();
  });

  function checkBoundary() {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();
    if (parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = '0px';
    } else if (inner.right < outer.right) {
      innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
  }
}

export { touchSlide };
