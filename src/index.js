import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './containers/App'

import './styles/common.scss'

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root')
)

if (module.hot) {
    // TODO: ???
    module.hot.accept()
}

// const render = (Component) => {
//     ReactDOM.render(
//         <AppContainer>
//             <Component />
//         </AppContainer>,
//         document.getElementById('root')
//     )
// }

// render(App)

// if (module.hot) {
//     module.hot.accept('./containers/App', () => {
//         render(App)
//     })
// }
