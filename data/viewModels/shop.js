import basketModel from '../logic/basket';
import shopStatusVM from './shop/ShopStatusVM';
import goodsListVM from './shop/GoodsListVM';

const shopVM = {
  init: basketModel.init,
  shopStatusVM: shopStatusVM(),
  goodsListVM: goodsListVM(),
};

function factory() {
  return shopVM;
}

export default factory;
