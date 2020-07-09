import basketModel from '../logic/basket';
import basketStatusVM from './basket/BasketStatusVM';
import basketInfoOrderWireframeVM from './basket/BasketInfoOrderWireframeVM';

const basketVM = {
  init: basketModel.init,
  basketStatusVM: basketStatusVM(),
  basketInfoOrderWireframeVM: basketInfoOrderWireframeVM(),
};

function factory() {
  return basketVM;
}

export default factory;
