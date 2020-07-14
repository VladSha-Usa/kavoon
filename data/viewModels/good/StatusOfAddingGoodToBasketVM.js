import basketModel from '../../logic/basket';

export default (goodData) => ({
  statusOfAdding: basketModel.statusOfAdding,
  name: goodData,
  statusOfEmptyBasket: basketModel.statusOfEmptyBasket,
  count: basketModel.count,
});
