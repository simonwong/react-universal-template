import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = []
let storeEnhancers // 状态增强器

if (process.env.NODE_ENV === 'production') {
  storeEnhancers = compose(
    applyMiddleware(...middlewares, sagaMiddleware)
  )
} else {
  storeEnhancers = compose(
    applyMiddleware(...middlewares, sagaMiddleware),
    // TODO: ???可视化开发工具
    (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f,
  )
}

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, storeEnhancers)

  sagaMiddleware.run(rootSaga)

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
