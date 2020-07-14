import shopBasketAmountVM from './ShopBasketAmountVM';
import { createBreadcrumbsForBasket } from '../good/BreadcrumbsNavVM';

export default () => ({
  breadcrumbsNavVM: createBreadcrumbsForBasket(),
  shopBasketAmountVM: shopBasketAmountVM(),
});
