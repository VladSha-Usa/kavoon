import basketStatusVM from "./shop/BasketStatusVM";
import basketInfoChooseGoodsVM from "./shop/BasketInfoChooseGoodsVM";

const basketVM = {
  basketStatusVM: basketStatusVM(),
  basketInfoChooseGoodsVM: basketInfoChooseGoodsVM(),
};

function factory() {
  return basketVM;
}

export default factory;
