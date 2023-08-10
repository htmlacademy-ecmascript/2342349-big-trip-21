import View from './view';
import {html} from '../util';

class AddButtonView extends View {
  createHtml() {
    return html`
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    `;
  }
}

customElements.define('add-button-view', AddButtonView);
export default AddButtonView;


