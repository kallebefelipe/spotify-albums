import React from 'react';
import Jsx from './routes';
import ReactDOM from 'react-dom';
import setUpStore from './store/configureStore';
import { Provider } from 'react-redux';

import './assets/styles/style.sass';
import './assets/styles/style.css';

const store = setUpStore();

const Template = () => (
  <Provider store={store}>
    <Jsx />
  </Provider>
)

ReactDOM.render(
  <Template />,
  document.getElementById('root'),
);

// Check if hot reloading is enable. If it is, changes won't reload the page.
// This is related to webpack-dev-server and works on development only.
if (module.hot) {
  module.hot.accept();
}
