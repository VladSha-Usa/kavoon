import shopBasketAmountVM from './ShopBasketAmountVM';
import goodsData from '../goods';

export default () => ({
  countGoodsInShop: goodsData.length,
  shopBasketAmountVM: shopBasketAmountVM(),
});
