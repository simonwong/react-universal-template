import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import App from './containers'
import configureStore from './configureStore'

import './styles/common.scss'

const store = configureStore()

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
)

if (module.hot) {
    // TODO: ???
    module.hot.accept()
}
