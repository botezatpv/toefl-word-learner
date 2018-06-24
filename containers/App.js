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

  componentDidMount() {
    this.generateNewQuestion();
  }

  checkAnswer(question, returnBool = false) {
    if (this.props.words.answer !== '' && this.props.words.answer !== null && this.props.words.answer !== undefined) {
      if (question === this.props.words.correctAnswer) {
        this.generateNewQuestion(2);
        return returnBool ? true : 'correct-button';
      } else {
        return returnBool ? false : 'error-button';
      }
    } else {
      return returnBool ? false : '';
    }
  }
  guessWord(e) {
    this.props.simpleActions.answer(e.target.value);
  }

  generateNewQuestion(mode) {
    this.props.asyncActions.prepareQuestion(mode);
  }

  selectPage(e) {
    this.props.simpleActions.selectPage(e.target.value);
    this.generateNewQuestion();
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
