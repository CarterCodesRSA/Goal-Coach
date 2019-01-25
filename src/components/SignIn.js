import React, { Component } from 'react'
import { firebaseApp } from '../firebase'
import { Link } from 'react-router'

class SignIn extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			error: {}
		}
	}

	signIn() {
		console.log('the state is: ', this.state)
		const { email, password } = this.state

		firebaseApp
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch(error => {
				console.log(error)
				this.setState({ error })
				console.log('Error state', this.state)
			})
	}

	render() {
		return (
			<div className="form-inline" style={{ margin: '5%' }}>
				<h2>Sign In</h2>
				<div className="form-group">
					<input
						className="form-control"
						style={{ marginRight: '5px' }}
						type="text"
						placeholder="Email Address"
						onChange={e => this.setState({ email: e.target.value })}
					/>
					<input
						className="form-control"
						style={{ marginRight: '5px' }}
						type="password"
						placeholder="Password"
						onChange={e => this.setState({ password: e.target.value })}
					/>
					<button className="btn btn-primary" onClick={() => this.signIn()}>
						Sign Up
					</button>
				</div>
				<div>{this.state.error.message}</div>
				<div className="text-primary">
					<Link to={'/signup'}>Sign Up</Link>
				</div>
			</div>
		)
	}
}
export default SignIn
