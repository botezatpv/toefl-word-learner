import React from 'react';
import * as Ons from 'react-onsenui';
import PropTypes from 'prop-types';

import {
  answer,
  prepareQuestion,
  selectPage,
} from '../actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import {wordList} from '../reducers/words';
import {wordList} from '../reducers/wordsInput';
class App extends React.Component {
  static propTypes = {
    words: PropTypes.object.isRequired,
  }

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
    this.props.answer(e.target.value);
  }

  generateNewQuestion(mode) {
    this.props.prepareQuestion(mode);
  }

  selectPage(e) {
    this.props.selectPage(e.target.value);
    // this.generateNewQuestion();
  }

  render() {
    // let questionAnswer1 = this.checkAnswer(this.props.words.questionAnswer1);
    // let questionAnswer2 = this.checkAnswer(this.props.words.questionAnswer2);
    // let questionAnswer3 = this.checkAnswer(this.props.words.questionAnswer3);
    return (
      <Ons.Page>
        <div className='bookPageSelect'>
          <h4>Select page</h4>
          <select
            onChange={this.selectPage}
          >
            {Object.keys(wordList).map((value, key) => <option key={key} dangerouslySetInnerHTML={{__html: value}} />)}
            </select>
        </div>
        <div className='main-screen'>
          <h2
            dangerouslySetInnerHTML={{__html: this.props.words.questionWord}}
          />
          {/* <button
            className={questionAnswer1}
            onClick={this.guessWord}
            value={this.props.words.questionAnswer1}
            disabled={questionAnswer1 !== ''}
            dangerouslySetInnerHTML={{__html: this.props.words.questionAnswer1}}
          />
          <button
            className={questionAnswer2}
            onClick={this.guessWord}
            value={this.props.words.questionAnswer2}
            disabled={questionAnswer2 !== ''}
            dangerouslySetInnerHTML={{__html: this.props.words.questionAnswer2}}
          />
          <button
            className={questionAnswer3}
            onClick={this.guessWord}
            value={this.props.words.questionAnswer3}
            disabled={questionAnswer3 !== ''}
            dangerouslySetInnerHTML={{__html: this.props.words.questionAnswer3}}
          /> */}
          <input
            className={this.checkAnswer(this.props.words.answer)}
            onChange={this.guessWord}
            value={this.props.words.answer}
          />
        </div>
        <div className='control-section'>
        <button
          onClick={() => this.generateNewQuestion(2)}
        >Next word</button>
        </div>
      </Ons.Page>
    );
  }
}

const mapStateToProps = (state) => ({
  words: state.words,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  answer,
  prepareQuestion,
  selectPage,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

