import { createStore } from 'redux'
import rootReducer from './reducers'
import middleware from '../middleware'

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware
)
