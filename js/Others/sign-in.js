const signIn = document.querySelector('#sign-in');
signIn.addEventListener('submit', (e) => {
	e.preventDefault();
	const userId=signIn['User-ID'].value;
	const eMail =signIn['E-mail'].value;
	const password=signIn['Password'].value;
	if( !(eMail.includes("@")) || !(eMail.includes(".")) )
	{
		alert("Inappropriate format of email address ( " + eMail + " ) is detected.");
		return;
	}
	if(eMail=="" || userId=="" || password=="")
	{
		alert("You cannot sign in unless all the fields in the form are properly filled.");
		return;
	}
	if( !(eMail.includes("@")) || !(eMail.includes(".")) )
	{
		alert("Inappropriate format of email address ( " + eMail + " ) is detected.");
		return;
	}
	if(password.length<6)
	{
		alert("Sorry. Your password isn't supposed to be this short. It has to contain at least 6 alphanumeric characters.");
		signIn['Password'].value="";
		return;
	}
	
	let userID;
	let userName;
	let type;
	db.collection('User Info').get().then(snapshot => {
		getUserInfo(snapshot.docs);
	});
	const getUserInfo = (data) => {
		data.forEach(doc => {
			const UserInfo = doc.data()
			if(`${UserInfo.email}` == eMail)
			{
				userID=`${UserInfo.userID}`;
				type=`${UserInfo.userType}`;
				userName=`${UserInfo.userName}`;
				localStorage.setItem('EMAIL', eMail);
				localStorage.setItem('USERID', userID);
				localStorage.setItem('USERNAME', userName);
			}	
		})//.then(() => {
		if(userID!=userId)
		{
			alert("Your user ID appears to be incorrect.");
			return;
		}
		auth.signInWithEmailAndPassword(eMail, password).then( cred => { 
			console.log(cred);
			if(eMail == 'admin@achievit.com')
			{
				window.location.href='./comments.html';
			}
			else if(type=='Teacher')
				window.location.href='../Teacher/index.html';
			else if(type=='Student')
				window.location.href='../Student/index.html';
			else if(type=='Other')
				window.location.href='../Others/index.html';
		}).catch(err => {
			alert("Your email address / password appears to be incorrect.");
		})
			
		//})
	}
	console.log(userId, eMail, password);
});