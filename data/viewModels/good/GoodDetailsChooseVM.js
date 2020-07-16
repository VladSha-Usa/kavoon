import goodDetailsPrevSliderVM from './GoodDetailsPrevSliderVM';
import goodDetailsWizardVM from './GoodDetailsWizardVM';

export default (good) => ({
  goodDetailsPrevSliderVM: goodDetailsPrevSliderVM(good.gallery),
  goodDetailsWizardVM: goodDetailsWizardVM(good),
});
