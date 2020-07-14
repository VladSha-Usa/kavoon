import basketModel from '../../logic/basket';

export default (name) => ({
  statusOfAdding: basketModel.statusOfAdding,
  name,
  statusOfEmptyBasket: basketModel.statusOfEmptyBasket,
  count: basketModel.count,
});
