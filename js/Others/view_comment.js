"use strict";

const init = function(e){
	
	let comment_arr = JSON.parse(localStorage.getItem('comment'));
	let email_arr = JSON.parse(localStorage.getItem('email'));
	let date_arr = JSON.parse(localStorage.getItem('date'));
	let container = document.querySelector('.container');
	container.className='container myform';

	var senderInfo=[]
	var msg=[];
	var div=[];
	
	if(comment_arr==null)
	{
		div = document.createElement('div');
		div.style.height='200px';
		div.innerHTML='<br><br><p align="center"><i>Nothing to show</i><p>';
		container.appendChild(div);
		return;
	}

	for(var i=0; i<comment_arr.length; i++)
	{
		senderInfo[i] = document.createElement('textarea');
		msg[i]=document.createElement('textarea');
		senderInfo[i].id='comment';
		senderInfo[i].value = 'Sender : ' + email_arr[i] + '\nTime   : ' + date_arr[i]; 
		senderInfo[i].disabled = true;
		senderInfo[i].style.display = "block";
		senderInfo[i].style.margin = "auto";
		senderInfo[i].setAttribute('rows','2');
		senderInfo[i].style.fontSize = "15";
		msg[i].id='comment';
		msg[i].value='\n' + comment_arr[i] + '\n';
		msg[i].disabled = true;
		msg[i].style.display = "block";
		msg[i].style.margin = "auto";
		msg[i].setAttribute('rows','10');
		msg[i].style.fontSize = "15";
		container.appendChild(senderInfo[i]);
		container.appendChild(msg[i]);
		div[i] = document.createElement('div');
		div[i].style.height='50px';
		container.appendChild(div[i]);
	}
};
document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM content loaded');
	init();});