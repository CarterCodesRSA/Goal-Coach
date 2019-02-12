import * as firebase from 'firebase'

var config = {
	apiKey: 'AIzaSyAXvhUvcczLtHpNJ8R2LEgtGIYkVBJfZc4',
	authDomain: 'goalcoach-a9eb0.firebaseapp.com',
	databaseURL: 'https://goalcoach-a9eb0.firebaseio.com',
	projectId: 'goalcoach-a9eb0',
	storageBucket: 'goalcoach-a9eb0.appspot.com',
	messagingSenderId: '70153634105'
}

export const firebaseApp = firebase.initializeApp(config)

export const goalRef = firebase.database().ref('goals')
export const completeGoalRef = firebase.database().ref('completeGoals')
