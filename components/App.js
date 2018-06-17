import React from 'react';
import * as Ons from 'react-onsenui';
import PropTypes from 'prop-types';
import {wordList} from '../reducers/words';
export default class AppComponent extends React.Component {
  static propTypes = {
    words: PropTypes.object.isRequired,
  }
  render() {
    let questionAnswer1 = this.checkAnswer(this.props.words.questionAnswer1);
    let questionAnswer2 = this.checkAnswer(this.props.words.questionAnswer2);
    let questionAnswer3 = this.checkAnswer(this.props.words.questionAnswer3);
    return (
      <Ons.Page>
        <div className='bookPageSelect'>
          <h4>Select page</h4>
          <select
            onChange={this.selectPage}
          >
            {Object.keys(wordList).map((value, key) => <option>{value}</option>)}
            </select>
        </div>
        <div className='main-screen'>
          <h2>{this.props.words.questionWord}</h2>
          <button
            className={questionAnswer1}
            onClick={this.guessWord}
            value={this.props.words.questionAnswer1}
            disabled={questionAnswer1 !== ''}
          >{this.props.words.questionAnswer1}</button>
          <button
            className={questionAnswer2}
            onClick={this.guessWord}
            value={this.props.words.questionAnswer2}
            disabled={questionAnswer2 !== ''}
          >{this.props.words.questionAnswer2}</button>
          <button
            className={questionAnswer3}
            onClick={this.guessWord}
            value={this.props.words.questionAnswer3}
            disabled={questionAnswer3 !== ''}
          >{this.props.words.questionAnswer3}</button>
        </div>
        <div className='control-section'>
        <button
          onClick={this.generateNewQuestion}
        >Next word</button>
        </div>
      </Ons.Page>
    );
  }
}
