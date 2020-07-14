import basketModel from '../../logic/basket';
import { triangularBicycleFirstAidKitFrame } from '../../data/goods';
import goodDetailsWizardTitleVM from './GoodDetailsWizardTitleVM';
import goodDetailsWizardPickerVM from './GoodDetailsWizardPickerVM';
import goodDetailsWizardAddOtherVM from './GoodDetailsWizardAddOtherVM';
import goodDetailsOrderBtnVM from './GoodDetailsOrderBtnVM';

export default (good) => ({
  colectDataOfGood: basketModel.colectDataOfGood,
  good: triangularBicycleFirstAidKitFrame,
  goodDetailsWizardTitleVM: goodDetailsWizardTitleVM({
    name: good.name,
    price: good.price,
    volume: good.volume,
  }),
  goodDetailsWizardPickerVM: goodDetailsWizardPickerVM(),
  goodDetailsWizardAddOtherVM: goodDetailsWizardAddOtherVM(),
  goodDetailsOrderBtnVM: goodDetailsOrderBtnVM(),
});
