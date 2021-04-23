import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'
import authReducer from './auth'
import featureReducers from './features'

const authConfig = {
  key: 'auth',
  storage,
  stateReconciler: hardSet
}

const reducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  feature: featureReducers,
})

export default reducer

