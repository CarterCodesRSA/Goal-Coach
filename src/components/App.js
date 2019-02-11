import React, { Component } from 'react'
import { firebaseApp } from '../firebase'
import { connect } from 'react-redux'
import AddGoal from './AddGoal'
import GoalList from './GoalList'

class App extends Component {
	signOut() {
		firebaseApp.auth().signOut()
	}

	render() {
		return (
			<div className="container">
				<h3>Goals Coach</h3>
				<AddGoal />
				<hr />
				<h4>Goals</h4>
				<GoalList />
				<hr />
				<button className="btn btn-danger" onClick={() => this.signOut()}>
					Sign Out
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('State', state)
	return {}
}

export default connect(
	mapStateToProps,
	null
)(App)
