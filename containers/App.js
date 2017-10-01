import React, { Component } from 'react';
import * as InstallActions from '../actions/installActions/InstallAsyncActions';
import AppComponent from '../components/App';
import PushPage from './PushPage';
/**
 * Class that renders whole program.
 * @access private
 * @namespace AppPage
 * @memberof Component
 */
export default class App extends Component {
  /**
   * Create cable page.
   * @access private
   * @param {Object} props - navigation data
   * @param {{navigator: Object}} props.navigator - JS navigator.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator
   */
  constructor(props) {
    super(props);

    /**
     * Cable Page state.
     * @access private
     * @return {Object} State
     * @property {boolean} isOpen - Check if OnsenUI splitter is open.
     */
    this.state = {
      isOpen: false,
      navigator: {},
      loaded: false
    };
    // this.pushPage = this.pushPage.bind(this);
    this.splitterSide = this.splitterSide.bind(this);
    this.splitterContent = this.splitterContent.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  /**
   * Opening OnsenUI splitter.
   * @access private
   * @return {Object} State
   * @property {boolean} isOpen - Pass true value to isOpen state
   */
  show() {
    return this.setState({isOpen: true});
  }
  /**
   * Closing splitter
   * @access private
   * @return {Object} State
   * @property {boolean} isOpen- Pass false value to isOpen state
   */
  hide() {
    return this.setState({isOpen: false});
  }

  componentDidMount() {
    return this.hide();
  }
  pushPage(navigator, component, title, backButton) {
    let push = new PushPage();
    push.pushPage(navigator, component, title, backButton);
    return this.hide();
  }

}
