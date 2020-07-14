import { createBreadcrumbsForGood } from './BreadcrumbsNavVM';
import { createShopBasketAmount } from './ShopBasketAmountVM';
import statusOfAddingGoodToBasketVM from './StatusOfAddingGoodToBasketVM';

export default (goodData) => ({
  breadcrumbsNavVM: createBreadcrumbsForGood(goodData.name),
  shopBasketAmountVM: createShopBasketAmount(),
  statusOfAddingGoodToBasketVM: statusOfAddingGoodToBasketVM(goodData.name),
});
