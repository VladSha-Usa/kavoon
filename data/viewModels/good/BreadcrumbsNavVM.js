const createBreadcrumbsForGood = (name) => ({
  breadcrumbs: [
    {
      name: 'Список товарів',
      src: '/shop',
    },
    {
      name: name,
      src: '#',
    },
  ],
});

const createBreadcrumbsForBasket = () => ({
  breadcrumbs: [
    { name: 'Список товарів', src: '/shop' },
    { name: 'Твій кошик', src: '#' },
  ],
});

export { createBreadcrumbsForGood, createBreadcrumbsForBasket };
