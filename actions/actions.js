export const GENERATE_QUESTION = 'GENERATE_QUESTION';
export const ANSWER = 'ANSWER';
export const SELECT_PAGE = 'SELECT_PAGE';

export const generateQuestion = (questionWord, questionAnswer1, questionAnswer2, questionAnswer3, correctAnswer) => ({
  type: GENERATE_QUESTION,
  questionWord: questionWord,
  questionAnswer1: questionAnswer1,
  questionAnswer2: questionAnswer2,
  questionAnswer3: questionAnswer3,
  correctAnswer: correctAnswer,
});

export const answer = (answer) => ({
  type: ANSWER,
  answer: answer,
});

export const selectPage = (page) => ({
  type: SELECT_PAGE,
  page: page,
});

export const prepareQuestion = (questionMode) => (dispatch, getState) => {
  const state = getState();
  const answers = {...generateRandomWord(state)};
  dispatch(generateQuestion(answers.questionWord, answers.questionAnswer1, answers.questionAnswer2, answers.questionAnswer3, answers.correctAnswer));
  dispatch(answer(''));
};

const generateRandomWord = (state) => {
  const words = state.words;
  const page = words.page;
  if (state.words.mode === 0) {
    return selectWordsToDisplay(words[page], 3, false);
  } else if (words.mode === 1) {
    return selectWordsToDisplay(words[page], 3, true);
  }
};


const selectWordsToDisplay = (words, numberOfWords = 3, deffinitionAsQuestion = false) => {
  const wordsKeys = Object.keys(words);
  const selectedWords = {};
  const correctAnswer = Math.floor(Math.random() * numberOfWords);
  for (let i = 0; i < numberOfWords; i++) {
    let randomWordIndex = Math.floor(Math.random()*wordsKeys.length);
    const selectedWord = wordsKeys[randomWordIndex];
    if (selectedWords[selectedWord] == undefined) {
      if (deffinitionAsQuestion) {
        selectedWords['questionAnswer'+ (i+1)] = selectedWord;
        if (i == correctAnswer) {
          selectedWords['questionWord'] = words[selectedWord];
          selectedWords['correctAnswer'] = selectedWord;
        }
      } else {
        selectedWords['questionAnswer'+ (i+1)] = words[selectedWord];
        if (i == correctAnswer) {
          selectedWords['questionWord'] = selectedWord;
          selectedWords['correctAnswer'] = words[selectedWord];
        }
      }
    } else {
      i--;
    }
  }
  return selectedWords;
};
