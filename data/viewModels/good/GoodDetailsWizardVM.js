import basketModel from '../../logic/basket';
import goodDetailsWizardTitleVM from './GoodDetailsWizardTitleVM';
import goodDetailsWizardPickerVM from './GoodDetailsWizardPickerVM';
import goodDetailsWizardAddOtherVM from './GoodDetailsWizardAddOtherVM';
import goodDetailsOrderBtnVM from './GoodDetailsOrderBtnVM';

export default (good) => ({
  colectDataOfGood: basketModel.colectDataOfGood,
  good,
  goodDetailsWizardTitleVM: goodDetailsWizardTitleVM({
    name: good.name,
    price: good.price,
    volume: good.volume,
  }),
  goodDetailsWizardPickerVM: goodDetailsWizardPickerVM(),
  goodDetailsWizardAddOtherVM: goodDetailsWizardAddOtherVM(),
  goodDetailsOrderBtnVM: goodDetailsOrderBtnVM(),
});
