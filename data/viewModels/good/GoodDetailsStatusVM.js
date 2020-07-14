import { createBreadcrumbsForGood } from './BreadcrumbsNavVM';
import shopBasketAmountVM from './ShopBasketAmountVM';
import statusOfAddingGoodToBasketVM from './StatusOfAddingGoodToBasketVM';

export default (goodData) => ({
  breadcrumbsNavVM: createBreadcrumbsForGood(goodData.name),
  shopBasketAmountVM: shopBasketAmountVM(),
  statusOfAddingGoodToBasketVM: statusOfAddingGoodToBasketVM(goodData.name),
});
