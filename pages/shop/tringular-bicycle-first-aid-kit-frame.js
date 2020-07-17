import GoodPage from '../../components/goodPage';
import vmFactory from '../../data/viewModels/goodVM';
import { triangularBicycleFirstAidKitFrame } from '../../data/data/goods';
import Goods from '../../data/data/goods';
import detailsImgGallery from '../../data/data/detailsImgGallery';

const TriangularBicycleFirstAidKitFrame = () => (
  <GoodPage
    vm={vmFactory(triangularBicycleFirstAidKitFrame, Goods, detailsImgGallery)}
  />
);

export default TriangularBicycleFirstAidKitFrame;
