import React, { Component } from 'react'
import { goalRef } from '../firebase'
import { connect } from 'react-redux'
import { setGoals } from '../Actions/Actions'
import GoalItem from './GoalItem'

class GoalList extends Component {
	componentDidMount() {
		goalRef.on('value', snap => {
			let goalList = []
			snap.forEach(goal => {
				let { email, title } = goal.val()
				const serverKey = goal.key
				goalList.push({ email, title, serverKey })
			})
			console.log(goalList)
			this.props.setGoals(goalList)
		})
	}

	render() {
		console.log('This.props.goals', this.props)
		return (
			<div>
				<div>
					{this.props.goals.map((goal, index) => {
						return <GoalItem key={index} goal={goal} />
					})}
				</div>
			</div>
		)
	}
}
function mapStateToProps(state) {
	const goals = state.goals
	return {
		goals
	}
}

export default connect(
	mapStateToProps,
	{ setGoals }
)(GoalList)
