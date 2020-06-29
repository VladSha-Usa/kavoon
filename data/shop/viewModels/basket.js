import basketStatusVM from "./shop/BasketStatusVM";
import basketInfoOrderWireframeVM from "./shop/BasketInfoOrderWireframeVM";

const basketVM = {
  basketStatusVM: basketStatusVM(),
  basketInfoOrderWireframeVM: basketInfoOrderWireframeVM(),
};

function factory() {
  return basketVM;
}

export default factory;
