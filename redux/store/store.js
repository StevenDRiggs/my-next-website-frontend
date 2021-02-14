import { createStore, applyMiddleware, compose } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/rootReducer'


const composeEnhancers = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose
const makeStore = context => {
  return createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ))
}



export const storeWrapper = createWrapper(makeStore, {debug: true})

