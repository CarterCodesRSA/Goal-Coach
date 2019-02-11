import React, { Component } from 'react'

class GoalItem extends Component {
	completeGoal() {}

	render() {
		const { email, title } = this.props.goal
		return (
			<div style={{ margin: '5px' }}>
				<strong>{title}</strong>
				<span style={{ marginRight: '5px' }}> submitted by: {email}</span>
				<button
					className="btn btn-sm btn-primary"
					onClick={() => this.completeGoal}
				>
					Complete Goal
				</button>
			</div>
		)
	}
}

export default GoalItem
