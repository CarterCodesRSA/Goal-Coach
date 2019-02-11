import { combineReducers } from 'redux'

import user from './Reducer_User'
import goals from './Reducer_Goals'

export default combineReducers({
	user,
	goals
})
