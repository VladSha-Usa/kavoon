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
    // {
    //   picture: {
    //     src: '/img/good-to-complect-img/flash-light-petzl-tikkid.jpg',
    //     srcSet:
    //       '/img/good-to-complect-img/flash-light-petzl-tikkid@2x.jpg 2x, img/good-to-complect-img/flash-light-petzl-tikkid@3x.jpg 3x',
    //   },
    //   name: 'Ліхтарик Petzl Tikkid',
    //   price: 800,
    //   amount: 1,
    // },
  ],
};
export default basketData;
