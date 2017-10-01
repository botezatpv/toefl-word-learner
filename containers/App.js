import AppComponent from '../components/App';
import * as AsyncActions from '../actions/appAsyncActions';
import * as SimpleActions from '../actions/appSimpleActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class App extends AppComponent {
  constructor(props) {
    super(props);
    this.guessWord = this.guessWord.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.generateNewQuestion = this.generateNewQuestion.bind(this);
    this.selectPage = this.selectPage.bind(this);
  }

  checkAnswer(question) {
    if (this.props.words.answer !== '' && this.props.words.answer !== null && this.props.words.answer !== undefined) {
      if (question === this.props.words.correctAnswer) {
        return 'correct-button';
      } else {
        return 'error-button';
      }
    } else {
      return '';
    }
  }
  guessWord(e) {
    this.props.simpleActions.answer(e.target.value);
  }

  generateNewQuestion(e) {
    this.props.asyncActions.prepareQuestion();
  }

  selectPage(e) {
    this.props.simpleActions.selectPage(e.target.value);
  }
}

const mapStateToProps = (state) => ({
  words: state.words,
});

/**
 * @ignore
 */
const mapDispatchToProps = (dispatch) => {
  return {
    asyncActions: bindActionCreators(AsyncActions, dispatch),
    simpleActions: bindActionCreators(SimpleActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
