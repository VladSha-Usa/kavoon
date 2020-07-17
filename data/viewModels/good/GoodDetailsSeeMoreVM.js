export default (Goods) =>
  Goods.map((goodData) => {
    return {
      name: goodData.name,
      volume: goodData.volume,
      price: goodData.price,
      image: goodData.image,
      srcSet: goodData.srcSet,
      href: `/shop/${goodData.id}`,
    };
  })
    .sort(function () {
      return 0.5 - Math.random();
    })
    .slice(0, 4);
