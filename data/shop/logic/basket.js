import { BehaviorSubject } from 'rxjs';
import {
  map,
} from 'rxjs/operators';

const goods = new BehaviorSubject([]);

const count = goods.pipe(map((goods) => goods.reduce((sum, item) => sum + item.count, 0)));

function addGood(good) {
  console.log(good);
}

const BasketLogic = {
  addGood,
  goods,
  count,
};

export default BasketLogic;
