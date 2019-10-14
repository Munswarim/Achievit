const email=localStorage.getItem('EMAIL');
const search=localStorage.getItem('SEARCH');
const table=document.querySelector('#table');
setNavBar();
db.collection('URL').get().then(snapshot => {
	searchURL(snapshot.docs, search, table);
});
const searchURL = (data, search, table) => {
	const init = table.innerHTML;
	console.log('Searching '+search+'...')
	data.forEach(doc => {
		const URL = doc.data();
		var add=false;
		if(`${URL.uploader}` == email || `${URL.publicity}`=='Public')
		{
			if(`${URL.keywords}`.toUpperCase().includes(search.toUpperCase()))
				add=true;
			else
			{
				let array = search.split(" ");
				for(let i=0; i<array.length; i++)
					if(`${URL.keywords}`.toUpperCase().includes(array[i].toUpperCase()))
					{
						add=true;
						break;
					}
			}
		}
		if(add)
		{
			const newTableRow =
			`<tr>
				<td id="title"><a href="${URL.url}">${URL.title}</a></td>
				<td id="time">${URL.time}</td>
				<td id="keywords">${URL.keywords}</td>
			</tr>`;
			table.innerHTML+=newTableRow;
			console.log('found')
		}
		else
			console.log('Not matched...');
	})
	if(init==table.innerHTML)
	{
		const newTableRow =
		`<tr>
			<td id="title"><a href="#">N/A</a></td>
			<td id="time">--:--:--</td>
			<td id="keywords">N/A</td>
		</tr>`;
		table.innerHTML+=newTableRow;
	}
}

function setNavBar()
{
	const type=localStorage.getItem('USERTYPE');
	const menu=document.querySelector('.box-1');
	const body=document.getElementsByTagName('BODY')[0];
	if(type=='Teacher')
	{
		menu.innerHTML=
		`<button class="button-1" onclick="window.location.href = 'index.html';">Home</button>
		<button class="button-1" onclick="window.location.href = 'courses.html';">Courses</button>
		<button class="button-1" onclick="window.location.href = 'url.html';">My URLs</button>
		<button class="button-1 FilePhile" onclick="window.location.href = 'https://ishraq10199.github.io/FilePhile/index.html';">FilePhile</button>
		<div class="blockbreak"></div>
		
		<button class="button-1" onclick="window.location.href = 'Profile.html';">Profile</button>
		<button class="button-1" id="sign-out">Sign out</button>
        <div class="searchbar">
			<form id="searchForm">
				<input type="text" id="search-by-keywords" name="Search" placeholder="What are you looking for?" onclick="placeholder='Search by using keywords';" title="Find by keywords">
				<input type="submit" value="Search" name="search">
			</form>
		</div>
		<div class="pause-play">
			<button id="pause-play" >| |</button>
		</div>`;
		//body.innerHTML+=`<script src="../js/Others/sign-out.js"></script>`;
	}
	else if(type=='Student')
	{
		menu.innerHTML=
		`<button class="button-1" onclick="window.location.href = 'index.html';">Home</button>
		<button class="button-1" onclick="window.location.href = 'courses.html';">Courses</button>
		<button class="button-1" onclick="window.location.href = 'url.html';">My URLs</button>
		<button class="button-1 FilePhile" onclick="window.location.href = 'https://ishraq10199.github.io/FilePhile/index.html';">FilePhile</button>
		<div class="blockbreak"></div>
		
		<button class="button-1" onclick="window.location.href = 'Profile.html';">Profile</button>
		<button class="button-1" id="sign-out">Sign out</button>
        <div class="searchbar">
			<form id="searchForm">
				<input type="text" id="search-by-keywords" name="Search" placeholder="What are you looking for?" onclick="placeholder='Search by using keywords';" title="Find by keywords">
				<input type="submit" value="Search" name="search">
			</form>
		</div>
		<div class="pause-play">
			<button id="pause-play" >| |</button>
		</div>`;
		//body.innerHTML+=`<script src="../js/Others/sign-out.js"></script>`;
	}
	else if(type=='Other')
	{
		menu.innerHTML=
		`<button class="button-1" onclick="window.location.href = 'index.html';">Home</button>
		<button class="button-1" onclick="window.location.href = '#';" disabled title="Unavailable" style="cursor: not-allowed;">Courses</button>
		<button class="button-1" onclick="window.location.href = 'url.html';">My URLs</button>
		<button class="button-1 FilePhile" onclick="window.location.href = 'https://ishraq10199.github.io/FilePhile/index.html';">FilePhile</button>
		<div class="blockbreak"></div>
		
		<button class="button-1" onclick="window.location.href = 'Profile.html';">Profile</button>
		<button class="button-1" id="sign-out">Sign out</button>
        <div class="searchbar">
			<form id="searchForm">
				<input type="text" id="search-by-keywords" name="Search" placeholder="What are you looking for?" onclick="placeholder='Search by using keywords';" title="Find by keywords">
				<input type="submit" value="Search" name="search">
			</form>
		</div>
		<div class="pause-play">
			<button id="pause-play" >| |</button>
		</div>`;
		//body.innerHTML+=`<script src="../js/Others/sign-out.js"></script>`;
	}
}