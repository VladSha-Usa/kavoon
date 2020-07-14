import GoodPage from '../../components/goodPage';
import vmFactory from '../../data/viewModels/goodVM';
import { bagBigFork } from '../../data/data/goods';

const Good1 = () => <GoodPage vm={vmFactory(bagBigFork)} />;

export default Good1;
