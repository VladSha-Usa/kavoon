import basketModel from '../../logic/basket';
import goodDetailsWizardTitleVM from './GoodDetailsWizardTitleVM';
import goodDetailsWizardAddOtherVM from './GoodDetailsWizardAddOtherVM';
import goodDetailsOrderBtnVM from './GoodDetailsOrderBtnVM';

export default (good) => ({
  colectDataOfGood: basketModel.colectDataOfGood,
  fabrics: good.fabrics,
  goodDetailsWizardTitleVM: goodDetailsWizardTitleVM({
    name: good.name,
    price: good.price,
    volume: good.volume,
  }),
  goodDetailsWizardAddOtherVM: goodDetailsWizardAddOtherVM(),
  goodDetailsOrderBtnVM: goodDetailsOrderBtnVM(),
});
