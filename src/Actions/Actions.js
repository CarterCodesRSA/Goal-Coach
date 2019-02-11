import { SIGN_IN, SET_GOALS } from './types'

export function logUser(email) {
	const action = {
		type: SIGN_IN,
		email
	}
	return action
}

export function setGoals(goals) {
	const action = {
		type: SET_GOALS,
		goals
	}
	return action
}
