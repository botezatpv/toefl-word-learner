import React from 'react';
import * as Ons from 'react-onsenui';
import PropTypes from 'prop-types';
// import {wordList} from '../reducers/words';
import {wordList} from '../reducers/wordsInput';
export default class AppComponent extends React.Component {
  static propTypes = {
    words: PropTypes.object.isRequired,
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
