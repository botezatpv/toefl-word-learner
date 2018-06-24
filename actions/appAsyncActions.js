import * as actions from './appSimpleActions';

export const prepareQuestion = (questionMode) => {
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
    let mode = questionMode ? questionMode : Math.floor(Math.random()*2);
    /**
     * mode = 0 - display word and ask definition
     * mode = 1 - display definition ask word
     */
    let questionWord;
    let questionAnswer1;
    let questionAnswer2;
    let questionAnswer3;
    let correctAnswer;
    if (mode == 0) {
      questionWord = questionWordsArray[randomQuestionWord];
      questionAnswer1 = getState().words[page][questionWordsArray[selectedWords[0]]];
      questionAnswer2 = getState().words[page][questionWordsArray[selectedWords[1]]];
      questionAnswer3 = getState().words[page][questionWordsArray[selectedWords[2]]];
      correctAnswer = getState().words[page][questionWordsArray[randomQuestionWord]];
    } else if (mode === 1) {
      questionWord = getState().words[page][questionWordsArray[randomQuestionWord]];
      questionAnswer1 = questionWordsArray[selectedWords[0]];
      questionAnswer2 = questionWordsArray[selectedWords[1]];
      questionAnswer3 = questionWordsArray[selectedWords[2]];
      correctAnswer = questionWordsArray[randomQuestionWord];
    } else if (mode === 2) {
      questionWord = getState().words[page][questionWordsArray[randomQuestionWord]];
      correctAnswer = questionWordsArray[randomQuestionWord];
    }

    if (questionWord !== getState().words.questionWord) {
      dispatch(actions.generateQuestion(questionWord, questionAnswer1, questionAnswer2, questionAnswer3, correctAnswer));
      dispatch(actions.answer(''));
    } else {
      dispatch(prepareQuestion(mode));
    }
  };
};
