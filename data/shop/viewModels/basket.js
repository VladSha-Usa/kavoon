const basketData = {
  breadcrumbs: [
    { name: 'Список товарів', src: '/shop' },
    { name: 'Сумка-тубус на вилку 10 л.', src: '/shop/good1' },
    { name: 'Список товарів', src: '#' },
  ],
  mainGoods: [
    {
      src: '/img/basket-img/photo-1.jpg',
      srcSet:
        '/img/basket-img/photo-1@2x.jpg 2x, img/basket-img/photo-1@3x.jpg 3x',
      name: 'Сумка-тубус на вилку.',
      volume: '10л',
      mainTextile: 'Оксфорд',
      mainColor: 'Оранджевий',
      additionalColor: 'Жовтий Назва 2',
      brandOfAccessories: 'Марка назва марки 1',
      colorOfAccessories: 'Чорний',
      colorOfSlings: 'Оранджевий',
      price: 1300,
    },
  ],
  additionGoods: [
  ],
};
export default basketData;
