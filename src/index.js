import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './app'

const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(
  React.createElement(ReduxApp),
  document.getElementById('app')
);

// Tells that hot module must be used
module.hot.accept();
