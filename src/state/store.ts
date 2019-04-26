import loginState from '@state/reducers/login'
import httpState from '@state/reducers/http'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const rootReducer = combineReducers({
  loginState,
  httpState
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
)

export default store
