import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCompleted } from '../Actions/Actions'
import { completeGoalRef } from '../firebase'

class CompleteGoalList extends Component {
	componentDidMount() {
		completeGoalRef.on('value', snap => {
			let CompleteGoalList = []
			snap.forEach(completedGoal => {
				const { email, title } = completedGoal.val()
				CompleteGoalList.push({ email, title })
			})
			console.log('completed goals', CompleteGoalList)
			this.props.setCompleted(CompleteGoalList)
		})
	}

	clearCompleted() {
		completeGoalRef.set([])
	}

	render() {
		console.log('this.props.completeGoals', this.props.completeGoals)
		return (
			<div>
				{this.props.completeGoals.map((completedGoal, index) => {
					const { title, email } = completedGoal
					return (
						<div key={index} className="mb-2">
							<strong>{title}</strong> completed by: <em>{email}</em>
						</div>
					)
				})}
				<button
					className="btn btn-primary"
					onClick={() => this.clearCompleted()}
				>
					Clear All
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { completeGoals } = state
	return {
		completeGoals
	}
}

export default connect(
	mapStateToProps,
	{ setCompleted }
)(CompleteGoalList)
