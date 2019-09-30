var EMAIL;
auth.onAuthStateChanged(user => {
	if(user)
	{
		console.log("User is signed in.");
	}
	else
	{
		console.log("User is not signed in.");
	}
})
document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM content loaded');
})