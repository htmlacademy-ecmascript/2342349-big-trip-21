import Model from './model.js';
import points from '../data/poins.json';
import offers from '../data/offers.json';
import destinations from '../data/destinations.json';
import PointModel from './point-model.js';

class AppModel extends Model {

  constructor() {
    super();

    /**
     * @type {Array<Point>}
     */
    this._points = [];

    /**
     * @type {Array<Destination>}
     */
    this._destinations = [];

    /**
     * @type {Array<OfferGroup>}
     */
    this._offerGroups = [];

    /**
     *
     * @type {Record<SortType, (pointA: PointModel, pointB: PointModel) => number>}
     */
    this.sortCallbacks = {
      day: (pointA, pointB) => pointA.dateFrom.valueOf() - pointB.dateFrom.valueOf(),
      event: () => 0,
      time: (pointA, pointB) =>
        (pointB.dateTo.valueOf() - pointB.dateFrom.valueOf()) - (pointA.dateTo.valueOf() - pointA.dateFrom.valueOf()),
      price: (pointA, pointB) => pointB.basePrice - pointA.basePrice,
      offers: () => 0,
    };

    /**
     * @type {Record<FilterType, (point: PointModel) => boolean>}
     */
    this.filterCallbacks = {
      everything: () => true,
      future: (point) => point.dateFrom.valueOf() > Date.now(),
      present: (point) => point.dateFrom.valueOf() <= Date.now() && point.dateTo.valueOf() >= Date.now(),
      past: (point) => point.dateTo.valueOf() < Date.now()
    };
  }

  /**
   * @returns {Promise<void>}
   */
  async ready() {
    // TODO get server data
    // @ts-ignore
    this._points = points;
    // @ts-ignore
    this._destinations = destinations;
    // @ts-ignore
    this._offerGroups = offers;
  }

  /**
   * @param {{
   *  filter?: FilterType
   *  sort?: SortType
   * }} options
   *
   * @return {Array<PointModel>}
   */
  getPoints(options = {}) {
    const defaultFilter = this.filterCallbacks.everything;
    const defaultSort = this.sortCallbacks.day;
    const filter = this.filterCallbacks[options.filter] ?? defaultFilter;
    const sort = this.sortCallbacks[options.sort] ?? defaultSort;
    return this._points.map(this.createPoint).filter(filter).sort(sort);
  }

  /**
   * @param {Point} data
   * @returns {PointModel}
   */
  createPoint(data = Object.create(null)) {
    return new PointModel(data);
  }

  /**
   * @param {PointModel} model
   * @returns {Promise<void>}
   */
  async addPoint(model) {
    // TODO: Добавить данные на сервере
    const data = model.toJSON();
    data.id = crypto.randomUUID();
    this._points.push(data);
  }

  /**
   * @param {PointModel} model
   * @returns {Promise<void>}
   */
  async updatePoint(model) {
    //TODO: Обновить данные на сервере
    const data = model.toJSON();
    const index = this._points.findIndex((point) => point.id === data.id);
    this._points.splice(index, 1, data);
  }

  /**
   * @param {string} id
   * @returns {Promise<void>}
   */
  async deletePoint(id) {
    // TODO: Удалить данные на сервере
    const index = this._points.findIndex((point) => point.id === id);
    this._points.splice(index, 1);
  }

  /**
   * @returns {Array<Destination>}
   */
  getDestinations() {
    return structuredClone(this._destinations);
  }

  /**
   * @returns {Array<OfferGroup>}
   */
  getOfferGroups() {
    return structuredClone(this._offerGroups);
  }
}

export default AppModel;
