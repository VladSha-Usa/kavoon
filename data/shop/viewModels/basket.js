import basketModel from '../logic/basket';

const basketVM = {
  breadcrumbs: [
    { name: 'Список товарів', src: '/shop' },
    { name: 'Корзина', src: '#' },
  ],
  goods: basketModel.goods,
  additionGoods: [],
};

function factory() {
  return basketVM;
}

export default factory;
