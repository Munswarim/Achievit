const playButton = document.querySelector('#pause-play');
const video = document.querySelector('#video')
if(localStorage.getItem("PLAYING")=='false')
{
	video.style.display="none";
	playButton.innerHTML="▶️";
	playButton.setAttribute('title','Play background video');
}
else
{
	video.style.display="block";
	playButton.innerHTML="| |";
	playButton.setAttribute('title','Pause background video');
}

playButton.addEventListener('click', function(e){
	if(playButton.innerHTML=="| |")
	{
		localStorage.setItem("PLAYING", 'false');
		video.style.display="none";
		playButton.innerHTML="▶️";
		playButton.setAttribute('title','Play background video');
	}
	else if(playButton.innerHTML=="▶️")
	{
		localStorage.setItem("PLAYING", 'true');
		video.style.display="block";
		playButton.innerHTML="| |";
		playButton.setAttribute('title','Pause background video');
	}	
})

document.addEventListener('DOMContentLoaded', function(){});