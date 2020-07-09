import goodsData from '../goods';
import goodListItemVM from './GoodListItemVM';

export default () => ({
  goodVMs: goodsData.map((goodData) => goodListItemVM(goodData)),
});
