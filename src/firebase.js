import * as firebase from 'firebase'

var config = {
	apiKey: 'AIzaSyAUWJbyXh7L7K6smzo2jWd-nWE1Q7nF0fU',
	authDomain: 'goalcoach-2ca4e.firebaseapp.com',
	databaseURL: 'https://goalcoach-2ca4e.firebaseio.com',
	projectId: 'goalcoach-2ca4e',
	storageBucket: '',
	messagingSenderId: '37003153608'
}

export const firebaseApp = firebase.initializeApp(config)
