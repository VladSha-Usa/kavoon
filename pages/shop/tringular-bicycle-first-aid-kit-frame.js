import GoodPage from '../../components/goodPage';
import vmFactory from '../../data/viewModels/goodVM';
import { bagBigFork } from '../../data/data/goods';

const TriangularBicycleFirstAidKitFrame = () => (
  <GoodPage vm={vmFactory(bagBigFork)} />
);

export default TriangularBicycleFirstAidKitFrame;
