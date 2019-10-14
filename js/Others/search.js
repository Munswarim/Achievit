const searchForm=document.querySelector('#searchForm');
searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('processing...');
	const searchByKeywords = document.querySelector('#search-by-keywords').value;
	if(searchByKeywords=='')
	{
		alert('Search action requires keywords');
		return;
	}
	console.log(searchByKeywords);
	localStorage.setItem('SEARCH', searchByKeywords);
	window.location.href='../Guest/search_result.html';
})