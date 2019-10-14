const newURL=document.querySelector('#new-URL');
console.log('Ready');
newURL.addEventListener('submit', (e) => {
	e.preventDefault();
	const email=localStorage.getItem('EMAIL');
	const url=document.querySelector('#url').value;
	const urlTitle=document.querySelector('#url-title').value;
	const publicity=(document.querySelector('#Public').checked) ? 'Public' : 'Private';
	const course=(document.querySelector('#inclusion').checked) ? selection() : 'N/A';
	const keywords=document.querySelector('#key-words').value;
	if(url=='' || urlTitle=='' || publicity=='' || course=='' || keywords=='')
	{
		alert("Before we proceed, please be sure that all the fields in the form are properly filled.");
		return;
	}
	db.collection('URL').add({
			uploader : email,
			url : url,
			title : urlTitle,
			publicity : publicity,
			course : course,
			keywords : keywords,
			time : String(new Date())
		}).then(() => {
			alert("Thank you for your support. The URL has been uploaded to our collection. You will now be redirected to your URL archives.");
			window.location.href = "url.html";
		})
})
function selection()
{
	let courses='';
	let courseList = document.getElementsByTagName('OPTION');
	for(let i=0; i<courseList.length; i++)
	{
		if(courseList[i].selected)
		{
			courses+=courseList[i].innerHTML+', ';
			console.log(courses);
		}

	}
	if(courses=='')
		return 'N/A';
	return courses.substring(0,courses.length-2);
}