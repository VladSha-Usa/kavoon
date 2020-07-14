import shopBasketAmountVM from '../good/ShopBasketAmountVM';
import goodsData from '../goods';

export default () => ({
  countGoodsInShop: goodsData.length,
  shopBasketAmountVM: shopBasketAmountVM(),
});
