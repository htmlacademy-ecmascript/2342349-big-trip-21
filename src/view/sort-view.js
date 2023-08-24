import View from './view.js';
import {html} from '../util.js';

class SortView extends View {
  constructor() {
    super();
    this.classList.add('trip-sort');
  }

  createHtml() {
    return html`
        <!-- <form class="trip-events__trip-sort  trip-sort" action="#" method="get"> -->
        ${this.state.items.map((item) => html`
          <div class="trip-sort__item  trip-sort__item--day">
              <input class="trip-sort__input  visually-hidden"
                     id="sort-${item.value}"
                     name="trip-sort"
                     type="radio"
                     value="sort-${item.value}"
                     ${item.isSelected ? 'checked' : ''}
                     ${item.isDisabled ? 'disabled' : ''}
              >
              <label class="trip-sort__btn"
                     for="sort-${item.value}"
              >${item.value}
              </label>
          </div>
        `)}
    `;
  }
}

customElements.define('sort-view', SortView);
export default SortView;


