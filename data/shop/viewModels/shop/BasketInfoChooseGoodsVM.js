import basketModel from '../../logic/basket';

export default () => ({
  goods: basketModel.goods,
  count: basketModel.count,
  countForGood: basketModel.countForGood,
  increase: basketModel.increase,
  decrease: basketModel.decrease,
  deleteGood: basketModel.deleteGood,
});
