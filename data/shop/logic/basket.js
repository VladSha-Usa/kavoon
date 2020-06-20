import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

const goods = new BehaviorSubject([]);
const dataOfGood = new BehaviorSubject({});
const statusOfAdding = new BehaviorSubject(false);
const statusOfEmptyBasket = new BehaviorSubject(false);
const count = goods.pipe(
  map((goodsList) =>
    goodsList.reduce((sum, item) => {
      if (item.additionGoodData) {
        return sum + item.count + item.additionGoodData.count;
      } else {
        return sum + item.count;
      }
    }, 0)
  )
);

function increase(good) {
  good.count++;
  goods.next(goods.value);
}
function decrease(good) {
  good.count--;
  goods.next(goods.value);
}
function countForGood(good) {
  return goods.pipe(
    map((goodsList) =>
      goodsList
        .filter((item) => item.id === good.id)
        .reduce((sum, item) => sum + item.count, 0)
    )
  );
}
function showMessageOfEmptyBasket() {
  console.log(goods);

  if (goods.value.length === 0) {
    setTimeout(() => {
      statusOfEmptyBasket.next(true);
    }, 2000);
  }
  if (goods.value.length === 0) {
    setTimeout(() => {
      statusOfEmptyBasket.next(false);
    }, 3500);
  }
  return;
}
function init() {
  const data = JSON.parse(localStorage.getItem("BasketData")) ?? [];
  goods.next(data);
  const subscriber = goods.subscribe((value) =>
    localStorage.setItem("BasketData", JSON.stringify(value))
  );
  setInterval(() => {
    const data = JSON.parse(localStorage.getItem("BasketData")) ?? [];
    goods.next(data);
  }, 100);
  return () => {
    subscriber.unsubscribe();
  };
}
function addGood() {
  const newValue = goods.value;
  newValue.push(dataOfGood.value);
  goods.next(newValue);
  if (goods.value.some((good) => good === dataOfGood.value)) {
    statusOfAdding.next(true);
    setTimeout(() => {
      statusOfAdding.next(false);
    }, 1500);
  } else {
    statusOfAdding.next(false);
  }
}
function colectDataOfGood(data) {
  const newData = dataOfGood.value;
  if (data === "deleteAddGood") {
    delete newData.additionGoodData;
  } else {
    Object.assign(newData, data);
  }
  dataOfGood.next(newData);
}
function deleteGood(id) {
  const newValue = goods.value.filter((good) => good.id !== id);
  goods.next(newValue);
}
const BasketLogic = {
  addGood,
  goods,
  count,
  statusOfAdding,
  statusOfEmptyBasket,
  increase,
  decrease,
  countForGood,
  init,
  colectDataOfGood,
  deleteGood,
};

export default BasketLogic;
