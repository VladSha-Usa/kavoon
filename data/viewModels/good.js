import basketModel from '../logic/basket';
import goodDetailsStatusVM from './good1/GoodDetailsStatusVM';
import goodDetailsChooseVM from './good1/GoodDetailsChooseVM';
import goodDetailsSpecificationVM from './good1/GoodDetailsSpecificationVM';
import goodDetailsThingsTookVM from './good1/GoodDetailsThingsTookVM';
import goodDetailsImgGalleryVM from './good1/GoodDetailsImgGalleryVM';
import goodDetailsSeeMoreVM from './good1/GoodDetailsSeeMoreVM';

const factory = (good) => {
  const goodVM = {
    colectDataOfGood: basketModel.colectDataOfGood,
    init: basketModel.init,
    name: good.name,
    price: good.price,
    image: good.image,
    srcSet: good.srcSet,
    volume: good.volume,
    goodDetailsStatusVM: goodDetailsStatusVM(),
    goodDetailsChooseVM: goodDetailsChooseVM(),
    goodDetailsSpecificationVM: goodDetailsSpecificationVM(),
    goodDetailsThingsTookVM: goodDetailsThingsTookVM(),
    goodDetailsImgGalleryVM: goodDetailsImgGalleryVM(),
    goodDetailsSeeMoreVM: goodDetailsSeeMoreVM(),
  };
  return goodVM;
};

export default factory;
