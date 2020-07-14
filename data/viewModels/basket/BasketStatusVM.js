import { createBreadcrumbsForBasket } from '../good/BreadcrumbsNavVM';
import shopBasketAmountVM from '../good/ShopBasketAmountVM';

export default () => ({
  breadcrumbsNavVM: createBreadcrumbsForBasket(),
  shopBasketAmountVM: shopBasketAmountVM(),
});
