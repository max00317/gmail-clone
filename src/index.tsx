// External imports
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// Local imports
import App from './containers/App'
import rootReducer from './reducers/index'
import middleware from './middleware'

// Assets
import 'antd/dist/antd.css'
import './index.css'

const store = createStore(rootReducer, composeWithDevTools(middleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
