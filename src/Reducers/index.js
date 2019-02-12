import { combineReducers } from 'redux'

import user from './Reducer_User'
import goals from './Reducer_Goals'
import completeGoals from './Reducer_CompletedGoals'

export default combineReducers({
	user,
	goals,
	completeGoals
})
