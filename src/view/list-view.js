import './list-view.css';
import View from './view.js';
import EditorView from './editor-view.js';
import CardView from './card-view.js';

/**
 * @template Option
 * @typedef {Option & {
 *  isSelected: boolean
 * }} Selectable
 */

/**
 * @typedef {{
 *  value: PointType
 * }} Type
 *
 * @typedef {{
 *  id: string
 *  types: Array<Selectable<Type>>
 *  destinations: Array<Selectable<Destination>>
 *  dateFrom: Date
 *  dateTo: Date
 *  basePrice: number
 *  offers: Array<Selectable<Offer>>
 *  isFavorite: boolean
 *  isEditable: boolean
 *  isSaving?: boolean
 *  isDeleting?: boolean
 * }} ItemState
 *
 * @typedef {{
 *  items: Array<ItemState>
 * }} State
 *
 * @extends {View<State>}
 */
class ListView extends View {
  constructor() {
    super();
    this.classList.add('trip-events__list');
    this.setAttribute('role', 'list');
  }

  render() {
    const views = this.state.items.map((item) => {
      const view = item.isEditable ? new EditorView() : new CardView();

      view.classList.add('trip-events__item');
      view.setAttribute('role', 'listitem');
      view.setState(item);
      return view;
    });
    this.replaceChildren(...views);
  }
}

customElements.define('list-view', ListView);
export default ListView;


