import Firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAi5VBszS9lcNqzI_59oP0I56dgjBlfMs0",
    authDomain: "movie-aggregator-a8855.firebaseapp.com",
    databaseURL: "https://movie-aggregator-a8855.firebaseio.com",
    projectId: "movie-aggregator-a8855",
    storageBucket: "movie-aggregator-a8855.appspot.com",
    messagingSenderId: "428388110248",
    appId: "1:428388110248:web:08515c03344ad711d8d79d",
    measurementId: "G-5PTC94R000"
};

const firebase = Firebase.initializeApp(config)

export { firebase }
