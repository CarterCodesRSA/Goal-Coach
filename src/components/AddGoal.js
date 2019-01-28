import React, { Component } from 'react'
import { goalRef } from '../firebase'

class AddGoal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: ''
		}
	}

	addGoal() {
		console.log('add goal state', this.state)
		goalRef.push({ email: 'test@test.com', title: this.state.title })
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
					<button className="btn btn-dark" onClick={() => this.addGoal()}>
						Add Goal
					</button>
				</div>
			</div>
		)
	}
}

export default AddGoal
