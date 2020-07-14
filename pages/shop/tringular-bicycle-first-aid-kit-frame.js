import GoodPage from '../../components/goodPage';
import vmFactory from '../../data/viewModels/goodVM';
import { triangularBicycleFirstAidKitFrame } from '../../data/data/goods';

const TriangularBicycleFirstAidKitFrame = () => (
  <GoodPage vm={vmFactory(triangularBicycleFirstAidKitFrame)} />
);

export default TriangularBicycleFirstAidKitFrame;
