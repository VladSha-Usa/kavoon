import basketModel from '../logic/basket';

import basetStatusVM from './shop/BasketStatusVM';

const basketVM = {
  baskerStatusVM: basetStatusVM(),
  goods: basketModel.goods,
  additionGoods: [],
};

function factory() {
  return basketVM;
}

export default factory;
