import { Kordura, Oxford } from './fabrics';

const bananaBagSmallFork = {
  id: 'banana-bag-small-fork',
  name: 'Сумка-табус маленька\nна вилку',
  price: 1300,
  volume: '6л',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const Goods = [
  bananaBagSmallFork,
];

export { bananaBagSmallFork };
export default Goods;
