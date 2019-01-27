import { SIGN_IN } from './types'

export function logUser(email) {
	const action = {
		type: SIGN_IN,
		email
	}
	return action
}
