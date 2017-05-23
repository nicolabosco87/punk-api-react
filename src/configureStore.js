import { createStore, applyMiddleware } from 'redux'
import app from './reducers'

import thunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga'
import dataSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()

import { createEpicMiddleware } from 'redux-observable'
import fetchUserEpic from './epic.js'


console.log(fetchUserEpic);

const epicMiddleware = createEpicMiddleware(fetchUserEpic)

export default function configureStore() {
  //let store = createStore(app, applyMiddleware(thunk)) // With Thunk


  //let store = createStore(app, applyMiddleware(sagaMiddleware)) // With Sagas
  //sagaMiddleware.run(dataSaga)

  const store = createStore(app, applyMiddleware(epicMiddleware)) // With Observables

  return store
}