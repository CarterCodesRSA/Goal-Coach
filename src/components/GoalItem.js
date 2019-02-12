import React, { Component } from 'react'
import { completeGoalRef, goalRef } from '../firebase'
import { connect } from 'react-redux'

class GoalItem extends Component {
	completeGoal() {
		const { email } = this.props.user
		const { title, serverKey } = this.props.goal
		console.log('serverKey: ', serverKey)
		console.log('email', email, 'title', title)
		goalRef.child(serverKey).remove()
		completeGoalRef.push({ email, title })
	}

	render() {
		const { email, title } = this.props.goal
		return (
			<div style={{ margin: '5px' }}>
				<strong>{title}</strong>
				<span style={{ marginRight: '5px' }}> submitted by: {email}</span>
				<button
					className="btn btn-sm btn-primary"
					onClick={() => this.completeGoal()}
				>
					Complete Goal
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { user } = state
	return {
		user
	}
}

export default connect(
	mapStateToProps,
	null
)(GoalItem)
