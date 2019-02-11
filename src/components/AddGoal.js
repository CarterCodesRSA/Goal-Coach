import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goalRef } from '../firebase'

class AddGoal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: ''
		}
	}

	addGoal() {
		const { title } = this.state
		const { email } = this.props.user
		console.log('add goal state', this)
		goalRef.push({ email: email, title: title })
	}

	render() {
		return (
			<div className="form-inline">
				<div className="form-group">
					<input
						type="text"
						placeholder="Add Goal"
						className="form-control"
						style={{ marginRight: '5px' }}
						onChange={e => this.setState({ title: e.target.value })}
					/>
					<button className="btn btn-success" onClick={() => this.addGoal()}>
						Add Goal
					</button>
				</div>
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
)(AddGoal)
