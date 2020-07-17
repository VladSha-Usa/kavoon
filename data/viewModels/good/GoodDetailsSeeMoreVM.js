export default (Goods) => {
  let n = 4;
  var result = new Array(n),
    len = Goods.length,
    taken = new Array(len);
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = Goods[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result.map((goodData) => {
    return {
      name: goodData.name,
      volume: goodData.volume,
      price: goodData.price,
      image: goodData.image,
      srcSet: goodData.srcSet,
      href: `/shop/${goodData.id}`,
    };
  });
};
