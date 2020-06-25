import basketModel from '../logic/basket';

const basketVM = {
  breadcrumbs: [
    { name: 'Список товарів', src: '/shop' },
    { name: 'Корзина', src: '#' },
  ],

  additionGoods: 
};

function factory() {
  return basketVM;
}

export default factory;
