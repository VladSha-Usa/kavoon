const createBreadcrumbsForGood = ( name ) => {
  return {
    breadcrumbs: [
      {

      },
      {
        
      }
    ]
  }
};

const createBreadcrumbsForBasket = () => ({
  breadcrumbs: [
    { name: 'Список товарів', src: '/shop' },
    { name: 'Твій кошик', src: '#' },
  ],
});

export { createBreadcrumbsForGood, createBreadcrumbsForBasket };

export default (goodData) => ({
  breadcrumbs: goodData,
});
