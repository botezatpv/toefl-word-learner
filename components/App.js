import React from 'react';
import * as Ons from 'react-onsenui';
import PropTypes from 'prop-types';
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
            <option value={'page0'}>All pages</option>
            <option value={'page1'}>Page 1</option>
            <option value={'page2'}>Page 2</option>
            <option value={'page3'}>Page 3</option>
            <option value={'page4'}>Page 4</option>
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
