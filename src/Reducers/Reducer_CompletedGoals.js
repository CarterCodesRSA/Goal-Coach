import { SET_COMPLETED } from '../Actions/types'

export default (state = [], action) => {
	switch (action.type) {
		case SET_COMPLETED:
			const { completeGoals } = action
			console.log('completeGoals: ', completeGoals)
			return completeGoals
		default:
			return state
	}
}
