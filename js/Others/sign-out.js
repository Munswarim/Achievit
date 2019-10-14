const signOut = document.querySelector('#sign-out');
signOut.addEventListener('click', (event) => {
	event.preventDefault();
	auth.signOut().then(() => {
		localStorage.setItem('EMAIL', '');
		localStorage.setItem('USERNAME', '');
		localStorage.setItem('USERID', '');
		localStorage.setItem('USERTYPE', '');
		window.location.href="../Guest/sign_in.html";
	});
})