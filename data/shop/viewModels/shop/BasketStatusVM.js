import basketModel from '../../logic/basket';

export default () => ({
  breadcrumbs: [
    { name: 'Список товарів', src: '/shop' },
    { name: 'Сумка-тубус на вилку 10 л.', src: '/shop/good1' },
    { name: 'Твій кошик' },
  ],
  count: basketModel.count,
});
