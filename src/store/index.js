import mainReducer from './main/reducers'
import authReducer from './auth/reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    main: mainReducer
})

export default rootReducer