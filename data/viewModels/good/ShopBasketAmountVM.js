import basketModel from '../../logic/basket';

export default () => ({
  count: basketModel.count,
  href: '/shop/basket',
});
