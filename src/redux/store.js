import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { persistStore } from 'redux-persist'

const persistedStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
export default persistedStore;
