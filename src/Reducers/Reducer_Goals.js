import { SET_GOALS } from '../Actions/types'

export default (state = [], action) => {
	switch (action.type) {
		case SET_GOALS:
			const { goals } = action
			return goals
		default:
			return state
	}
}
