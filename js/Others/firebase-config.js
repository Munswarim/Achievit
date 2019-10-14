// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyAMP1PV_vtqm3cQqloOEz12NlPa212L9II",
	authDomain: "achievit-80845.firebaseapp.com",
	databaseURL: "https://achievit-80845.firebaseio.com",
	projectId: "achievit-80845",
	storageBucket: "achievit-80845.appspot.com",
	messagingSenderId: "1010844894414",
	appId: "1:1010844894414:web:e7da7b1b8f70cd572d3c9f",
	measurementId: "G-J6S8XP2J1D"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', function(){});