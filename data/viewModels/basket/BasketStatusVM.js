import { createBreadcrumbsForBasket } from '../good/BreadcrumbsNavVM';
import { createShopBasketAmount } from '../good/ShopBasketAmountVM';

export default () => ({
  breadcrumbsNavVM: createBreadcrumbsForBasket(),
  shopBasketAmountVM: createShopBasketAmount(),
});
