const signUp = document.querySelector('#sign-up');
signUp.addEventListener('submit', (e) => {
	e.preventDefault();

	const username=signUp['User-name'].value;
	const eMail=signUp['E-mail'].value;
	var x;
		if(signUp['Teacher'].checked)
			x=signUp['Teacher'].value;
		else if(signUp['Student'].checked)
			x=signUp['Student'].value;
		else if(signUp['Other'].checked)
			x=signUp['Other'].value;
		else
			x="";
	const type=x;
	const userId=signUp['User-ID'].value;
	const password=signUp['Password'].value;
	const rpassword=signUp['rPassword'].value;
	if(eMail=="" || username=="" || userId=="" || type=="" || password=="")
	{
		alert("Before you submit, please ensure that all the fields in the form are properly filled.");
		return;
	}
	if( !(eMail.includes("@")) || !(eMail.includes(".")) )
	{
		alert("Inappropriate format of email address ( " + eMail + " ) is detected.");
		return;
	}
	if(password.length<6)
	{
		alert("Sorry. Your password must contain at least 6 alphanumeric characters.");
		signUp['Password'].value="";
		signUp['rPassword'].value="";
		return;
	}
	if(rpassword!=password)
	{	
		alert("Unfortunately, your passwords did not match. Please make sure to put your passwords correctly.");
		signUp['Password'].value="";
		signUp['rPassword'].value="";
		return;
	}

	auth.createUserWithEmailAndPassword(eMail, password).then( cred => { 
		console.log(cred);
		db.collection('User Info').add({
			email : eMail,
			userName : username,
			userType : type,
			userID : userId
		}).then(() => {
			alert(username + ", welcome to Achievit. You will now be redirected to our sign-in page.");
			window.location.href = "sign_in.html";
		})
	}).catch(err =>{
		alert("This email address ( " + eMail +" ) is already in use by another account.");
	})
	
});