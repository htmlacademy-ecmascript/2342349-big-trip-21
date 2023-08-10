import './list-view.css';
import View from './view';
import EditorView from './editor-view';
import CardView from './card-view';

class ListView extends View {
  constructor() {
    super();
    this.classList.add('trip-list');
    this.setAttribute('role', 'list');
  }

  render() {
    const viewData = (new Array(4)).fill(0);
    let views = viewData.map((_, index) => {
      const view = (index === 0) ? new EditorView() : new CardView();

      view.classList.add('trip-list__item');
      view.setAttribute('role', 'listitem');
      view.render();
      return view;
    });
    this.replaceChildren(...views);
  }
}

customElements.define('list-view', ListView);
export default ListView;


