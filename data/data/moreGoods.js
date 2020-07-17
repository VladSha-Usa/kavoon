import goodsData from './goods';

const moreGoods = () => {
  let goods = new Set();
  while (goods.size < 4)
    goods.add(goodsData[Math.floor(Math.random() * Goods.length)]);
  return Array.from(goods);
};

export default moreGoods;
