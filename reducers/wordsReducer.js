import {
  GENERATE_QUESTION,
  ANSWER,
  SELECT_PAGE,
} from '../actions/actions';

import {wordList} from './wordsInput';

let initialState = {
  ...wordList,
  questionWord: '',
  questionAnswer1: '',
  questionAnswer2: '',
  questionAnswer3: '',
  correctAnswer: '',
  answer: '',
  page: 'Unit1',
  type: 0,
  mode: 0,
};

const words = (state = initialState, action) => {
  switch (action.type) {
  case GENERATE_QUESTION:
    return {
      ...state,
      questionWord: action.questionWord,
      questionAnswer1: action.questionAnswer1,
      questionAnswer2: action.questionAnswer2,
      questionAnswer3: action.questionAnswer3,
      correctAnswer: action.correctAnswer,
      answer: '',
    };
  case ANSWER:
    return {
      ...state,
      answer: action.answer,
    };
  case SELECT_PAGE:
    return {
      ...state,
      page: action.page,
    };
  default:
    return state;
  }
};
export default words;
