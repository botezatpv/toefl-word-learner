import * as actions from './appSimpleActions';

export const prepareQuestion = () => {
  return (dispatch, getState) => {
    let page = getState().words.displayMethod;
    let questionWordsArray = Object.keys(getState().words[page]);
    let selectedWords = [];
    for (let i = 0; i < 3; i++) {
      let randomWordIndex = Math.floor(Math.random()*questionWordsArray.length);
      if (!selectedWords.includes(randomWordIndex)) {
        selectedWords.push(randomWordIndex);
      } else {
        i--;
      }
    }
    let randomQuestionWord = selectedWords[Math.floor(Math.random()*selectedWords.length)];

    let questionWord = questionWordsArray[randomQuestionWord];
    let questionAnswer1 = getState().words[page][questionWordsArray[selectedWords[0]]];
    let questionAnswer2 = getState().words[page][questionWordsArray[selectedWords[1]]];
    let questionAnswer3 = getState().words[page][questionWordsArray[selectedWords[2]]];
    let correctAnswer = getState().words[page][questionWordsArray[randomQuestionWord]];
    if (questionWord !== getState().words.questionWord) {
      dispatch(actions.generateQuestion(questionWord, questionAnswer1, questionAnswer2, questionAnswer3, correctAnswer));
    } else {
      dispatch(prepareQuestion());
    }
  };
};
