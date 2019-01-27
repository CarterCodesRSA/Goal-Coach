import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { firebaseApp } from './firebase'

import Reducer from './Reducers/Reducers'

import { logUser } from './Actions/Actions'
import App from './components/App'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

const store = createStore(Reducer)

firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		console.log(user, ' has signed in to the application')
		const { email } = user
		store.dispatch(logUser(email))
		browserHistory.push('/app')
	} else {
		console.log('No user has signed up')
		browserHistory.replace('/signin')
	}
})

ReactDOM.render(
	<Provider store={store}>
		<Router path="/" history={browserHistory}>
			<Route path="/app" component={App} />
			<Route path="/signin" component={SignIn} />
			<Route path="/signup" component={SignUp} />
		</Router>
	</Provider>,

	document.getElementById('root')
)
