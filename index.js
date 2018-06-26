import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
// import './node_modules/onsenui/stylus/blue-basic-theme.styl';
import './styles/index.styl';

import App from './components/App';
import wordLearnHelper from './reducers';

if (ons.platform.isAndroid()) {
  require('./styles/Android.styl');
}

/**
 * Taking root element wich will be transformed
 */
const rootElement = document.getElementById('root');

/**
 * Adding redux store
 */
const store = createStore(
  wordLearnHelper,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

/**
 * Rendering page
 */
ons.ready(() => render(
  <AppContainer>
    <Provider store={store}>
      <App/>
    </Provider>
  </AppContainer>,
  rootElement
  )
);


/**
 * Hot reload support
 */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootElement
    );
  });
}
