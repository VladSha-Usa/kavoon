import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

const good = {
  src: "/img/basket-img/photo-1.jpg",
  srcSet: "/img/basket-img/photo-1@2x.jpg 2x, img/basket-img/photo-1@3x.jpg 3x",
  name: "Сумка-тубус на вилку.",
  volume: "10л",
  mainTextile: "Оксфорд",
  mainColor: "Оранджевий",
  additionalColor: "Жовтий Назва 2",
  brandOfAccessories: "Марка назва марки 1",
  colorOfAccessories: "Чорний",
  colorOfSlings: "Оранджевий",
  price: 1300,
  count: 1,
  id: 1,
};
const goods = new BehaviorSubject([]);
const count = goods.pipe(
  map((goodsList) => goodsList.reduce((sum, item) => sum + item.count, 0))
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
  console.log(data);
}

function addGood(good) {
  const newValue = goods.value.filter((goodItem) => goodItem.goodId);
  localStorage.setItem("BasketData", JSON.stringify(newValue));
  newValue.push(good);
  goods.next(newValue);
}

const BasketLogic = {
  addGood,
  goods,
  count,
  increase,
  decrease,
  countForGood,
  init,
};

export default BasketLogic;
