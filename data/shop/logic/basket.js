import { BehaviorSubject } from 'rxjs';
import {
  map,
} from 'rxjs/operators';

const goods = new BehaviorSubject([]);

const count = goods.pipe(map((goodsList) => goodsList.reduce((sum, item) => sum + item.count, 0)));
goods.subscribe((goodsList) => {
  const { localStorage } = window;
  localStorage.setItem('basket', JSON.stringify(goodsList));
});

function addGood(good) {
  const newValue = goods.value;
  newValue.push(good);
  goods.next(newValue);
}

const BasketLogic = {
  addGood,
  goods,
  count,
};

export default BasketLogic;
