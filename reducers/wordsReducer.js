import * as CONST from '../actions/appConstants';
// import {wordList} from './words';
import {wordList} from './wordsInput';
let initialState = {
  ...wordList,
  questionWord: '',
  questionAnswer1: '',
  questionAnswer2: '',
  questionAnswer3: '',
  correctAnswer: '',
  answer: '',
  displayMethod: 'Unit1',
};

const words = (state = initialState, action) => {
  switch (action.type) {
  case CONST.GENERATE_QUESTION:
    return {
      ...state,
      questionWord: action.questionWord,
      questionAnswer1: action.questionAnswer1,
      questionAnswer2: action.questionAnswer2,
      questionAnswer3: action.questionAnswer3,
      correctAnswer: action.correctAnswer,
      answer: '',
    };
  case CONST.ANSWER:
    return {
      ...state,
      answer: action.answer,
    };
  case CONST.SELECT_PAGE:
    return {
      ...state,
      displayMethod: action.page,
    };
  default:
    return state;
  }
};
export default words;
