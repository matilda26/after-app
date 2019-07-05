import loginState from '@state/reducers/login'
import httpState from '@state/reducers/http'
import middleState from '@state/reducers/middle'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const rootReducer = combineReducers({
  loginState,
  httpState,
  middleState
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
)

export default store
