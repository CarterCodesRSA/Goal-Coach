import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { firebaseApp } from './firebase'

import App from './components/App'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		console.log(user, ' has signed in to the application')
		browserHistory.push('/app')
	} else {
		console.log('No user has signed up')
		browserHistory.replace('/signin')
	}
})

ReactDOM.render(
	<Router path="/" history={browserHistory}>
		<Route path="/app" component={App} />
		<Route path="/signin" component={SignIn} />
		<Route path="/signup" component={SignUp} />
	</Router>,

	document.getElementById('root')
)
