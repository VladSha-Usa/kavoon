import breadcrumbsNavVM from './BreadcrumbsNavVM';
import shopBasketAmountVM from './ShopBasketAmountVM';
import statusOfAddingGoodToBasketVM from './StatusOfAddingGoodToBasketVM';

export default (goodData) => ({
  breadcrumbsNavVM: breadcrumbsNavVM(goodData.breadcrumbs),
  shopBasketAmountVM: shopBasketAmountVM(),
  statusOfAddingGoodToBasketVM: statusOfAddingGoodToBasketVM(goodData.name),
});
