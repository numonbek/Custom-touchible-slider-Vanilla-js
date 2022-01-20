import { data } from './data.js';
const content = document.querySelectorAll('.slide');
let n = 0;

function pages() {
  content.forEach((item, index) => {
    console.log(item);
    console.log(n);
    item.insertAdjacentHTML(
      'beforeend',
      ` <div class="card">
                        <div class="card__block">      
                            <div class="card__photo">
                                <img src=${data[n].photo} alt="">
                            </div>
                            <div class="card__date fontStyle--h2">
                                  ${data[n].date}
                            </div>
                            <div class="card__title">
                                  ${data[n].title}
                            </div>
                            <div class="card__description fontStyle--h2">
                                  ${data[n].text}
                            </div>
                        </div>
                      </div>`,
    );
    n < data.length - 1 ? n++ : (n = 0);
  });
}

export { pages };
