import {combineReducers} from 'redux';
import words from './wordsReducer';
/**
 * Putting reducers to store.
 */
const wordLearnHelper = combineReducers({
  words: words,
});

export default wordLearnHelper;
