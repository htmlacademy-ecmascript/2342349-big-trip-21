import Model from './model.js';

class PointModel extends Model {

  /**
   * @param {Point} point
   */
  constructor(point) {
    super();
    this.id = point.id;
    this.basePrice = point.base_price;
    this.dateFrom = new Date(point.date_from);
    this.dateTo = new Date(point.date_to);
    this.destinationId = point.destination;
    this.isFavorite = point.is_favorite;
    this.offerIds = structuredClone(point.offers);
    this.type = point.type;
  }

  /**
   * @returns {Point}
   */
  toJSON() {
    return {
      'id': this.id,
      'base_price': this.basePrice,
      'date_from': this.dateFrom.toISOString(),
      'date_to': this.dateTo.toISOString(),
      'destination': this.destinationId,
      'is_favorite': this.isFavorite,
      'offers': structuredClone(this.offerIds),
      'type': this.type
    };
  }
}

export default PointModel;
