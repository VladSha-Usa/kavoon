import { Kordura, Oxford, RainBlaBla } from './fabrics';

const triangularBicycleFirstAidKitFrame = {
  id: 'tringular-bicycle-first-aid-kit-frame',
  name: 'Трикутна велоаптечка\nна раму',
  volume: 0.5,
  price: 400,
  image: 'shop/Trykutna_veloaptechka.jpg',
  srcSet:
    '/shop/Trykutna_veloaptechka@2x.jpg 2x, shop/Trykutna_veloaptechka@3x.jpg 3x',
  href: 'shop/good1',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const bagBigFork = {
  id: 'bag-big-fork',
  name: 'Велика сумка-тубус \nна вилку',
  volume: 10,
  price: 1500,
  image: '/shop/Sumka-tubus_na_vylku_10l.jpg',
  srcSet:
    '/shop/Sumka-tubus_na_vylku_10l@2x.jpg 2x, /shop/Sumka-tubus_na_vylku_10l@3x.jpg 3x',
  href: 'shop/good1',
  fabrics: [Kordura, Oxford, RainBlaBla],
  colors: ['main', 'secondary', 'additional'],
};

const bananaBagSmallFork = {
  id: 'banana-bag-small-fork',
  name: 'Маленька Сумка-тубус\nна вилку',
  volume: 6,
  price: 1250,
  image: 'shop/Sumka-tubus_na_vylku_6l.jpg',
  srcSet:
    '/shop/Sumka-tubus_na_vylku_6l@2x.jpg 2x, /shop/Sumka-tubus_na_vylku_6l@3x.jpg 3x',
  href: 'shop/good1',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const bigBagTubeOnWheel = {
  id: 'big-bag-tube-on-wheel',
  name: 'Велика Сумка-тубус\nна кермо',
  volume: 6,
  price: 1150,
  image: 'shop/Sumka-tubus_na_kermo_6l.jpg',
  srcSet:
    '/shop/Sumka-tubus_na_kermo_6l@2x.jpg 2x, shop/Sumka-tubus_na_kermo_6l@3x.jpg 3x',
  href: 'shop/good1',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const smallBagTubeOnWheel = {
  id: 'small-bag-tube-on-wheel',
  name: 'Маленька Сумка-тубус\nна кермо',
  volume: 4,
  price: 1100,
  image: 'shop/Sumka-tubus_na_kermo_4l.jpg',
  srcSet:
    '/shop/Sumka-tubus_na_kermo_4l@2x.jpg 2x, shop/Sumka-tubus_na_kermo_4l@3x.jpg 3x',
  href: 'shop/good1',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const seatBag = {
  id: 'seat-bag',
  name: 'Підседільна сумка',
  volume: 5,
  price: 1150,
  image: 'shop/Sumka_pidsedilna.jpg',
  srcSet: '/shop/Sumka_pidsedilna@2x.jpg 2x, shop/Sumka_pidsedilna@3x.jpg 3x',
  href: 'shop/good1',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const innerFrameBag = {
  id: 'inner-frame-bag',
  name: 'Трикутна внутрірамна\nсумка',
  volume: '5',
  price: 700,
  image: '/shop/Sumka_trykutna_vnytriramna.jpg',
  srcSet:
    '/shop/Sumka_trykutna_vnytriramna@2x.jpg 2x, shop/Sumka_trykutna_vnytriramna@3x.jpg 3x',
  href: 'shop/good1',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const hamster = {
  id: 'hamster',
  name: 'Хом`ячок',
  volume: 1,
  price: 450,
  image: 'shop/Homjak.jpg',
  srcSet: '/shop/Homjak@2x.jpg 2x, shop/Homjak@3x.jpg 3x',
  href: 'shop/good1',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const Goods = [
  triangularBicycleFirstAidKitFrame,
  bagBigFork,
  bananaBagSmallFork,
  bigBagTubeOnWheel,
  smallBagTubeOnWheel,
  seatBag,
  innerFrameBag,
  hamster,
];

export {
  triangularBicycleFirstAidKitFrame,
  bagBigFork,
  bananaBagSmallFork,
  bigBagTubeOnWheel,
  smallBagTubeOnWheel,
  seatBag,
  innerFrameBag,
  hamster,
};
export default Goods;
