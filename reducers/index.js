import {combineReducers} from 'redux';
import Cable from './Cable';
import Load from './Load';
import Install from './Install';
import Results from './Results';
import Options from './Options';
import ReductionFactors from './ReductionFactors';
/**
 * Putting reducers to store.
 */
const cableSizingApp = combineReducers({
  Load,
  Cable,
  Install,
  Results,
  Options,
  ReductionFactors
});

export default cableSizingApp;
