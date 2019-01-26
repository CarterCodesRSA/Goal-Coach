import React, { Component } from 'react'
import { firebaseApp } from '../firebase'

class App extends Component {
	signOut() {
		firebaseApp.auth().signOut()
	}

	render() {
		return (
			<div>
				<button className="btn btn-darnger" onClick={() => this.signOut()}>
					Sign Out
				</button>
			</div>
		)
	}
}

export default App
