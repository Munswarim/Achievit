const email=localStorage.getItem('EMAIL');
const table=document.querySelector('#table')
db.collection('URL').get().then(snapshot => {
	getURL(snapshot.docs);
});
const getURL = (data) => {
	data.forEach(doc => {
		const URL = doc.data()
		if(`${URL.uploader}` == email)
		{
			const newTableRow =
			`<tr>
				<td id="title"><a href="${URL.url}">${URL.title}</a></td>
				<td id="edit"><button  onclick="window.location.href = 'edit_url.html';">Edit</button></td>
				<td id="included-in-course">${URL.course}</td>
				<td id="publicity">${URL.publicity}</td>
				<td id="keywords">${URL.keywords}</td>
			</tr>`;
			table.innerHTML+=newTableRow;
		}	
	})
}