import * as CONST from './appConstants';

export const generateQuestion = (questionWord, questionAnswer1, questionAnswer2, questionAnswer3, correctAnswer) => ({
  type: CONST.GENERATE_QUESTION,
  questionWord: questionWord,
  questionAnswer1: questionAnswer1,
  questionAnswer2: questionAnswer2,
  questionAnswer3: questionAnswer3,
  correctAnswer: correctAnswer,
});

export const answer = (answer) => ({
  type: CONST.ANSWER,
  answer: answer,
});

export const selectPage = (page) => ({
  type: CONST.SELECT_PAGE,
  page: page,
});
