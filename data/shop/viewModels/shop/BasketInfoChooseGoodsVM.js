import { map } from "rxjs/operators";
import basketModel from "../../logic/basket";
import basketMainGoodVM from "./BasketMainGoodVM";
export default () => ({
  goods: basketModel.goods.pipe(
    map((goods) => goods.map((good) => basketMainGoodVM(good)))
  ),
  count: basketModel.count,
  basketMainGoodVM: basketMainGoodVM(),
});
