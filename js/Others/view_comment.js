"use strict";

const init = function(e){
	
	let comment_arr = JSON.parse(localStorage.getItem('comment'));
	let email_arr = JSON.parse(localStorage.getItem('email'));
	let date_arr = JSON.parse(localStorage.getItem('date'));
	let container = document.querySelector('.container');
	container.className='container myform';
	var textarea=[]
	var div=[];
	for(var i=0; i<comment_arr.length; i++)
	{
		textarea[i] = document.createElement('textarea');
		textarea[i].id='comment';
		textarea[i].value = email_arr[i] + ' < ' + date_arr[i] + ' >\n\n' + comment_arr[i];
		textarea[i].disabled = true;
		textarea[i].style.display = "block";
		textarea[i].style.margin = "auto";
		textarea[i].setAttribute('rows','10');
		container.appendChild(textarea[i]);
		div[i] = document.createElement('div');
		div[i].style.height='50px';
		container.appendChild(div[i]);
	}

};
document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM content loaded');
	init();});