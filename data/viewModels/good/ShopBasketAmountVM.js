import basketModel from '../../logic/basket';

export const createShopBasketAmount = () => ({
  count: basketModel.count,
  href: '/shop/basket',
});
