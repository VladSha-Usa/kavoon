import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

const goods = new BehaviorSubject([]);
const dataOfGood = new BehaviorSubject({});
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
function init() {
  const data = JSON.parse(localStorage.getItem("BasketData")) ?? [];
  goods.next(data);
  const subscriber = goods.subscribe((value) =>
    localStorage.setItem("BasketData", JSON.stringify(value))
  );
  setInterval(() => {
    const data = JSON.parse(localStorage.getItem("BasketData")) ?? [];
    goods.next(data);
  }, 1000);
  return () => {
    subscriber.unsubscribe();
  };
}
function addGood() {
  const newValue = goods.value;
  newValue.push(dataOfGood.value);
  goods.next(newValue);
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
const BasketLogic = {
  addGood,
  goods,
  count,
  increase,
  decrease,
  countForGood,
  init,
  colectDataOfGood,
};

export default BasketLogic;
