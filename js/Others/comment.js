"use strict";

const init = function(e){
	let btn = document.querySelector("#btn");
	btn.addEventListener('click', function(event){
		event.preventDefault();
		let comment = document.getElementById("comment").value;
		let email = document.getElementById("email");
		let date = new Date();
		if(email == undefined)
			email = 'example@domain';
		else
			email = email.value;
		if(email == '' || comment == '')
			return;
		//console.log(email);
		//console.log(comment);
		let comment_arr;
		let email_arr;
		let date_arr;
		try
		{
			comment_arr=JSON.parse(localStorage.getItem('comment'));
			email_arr=JSON.parse(localStorage.getItem('email'));
			date_arr=JSON.parse(localStorage.getItem('date'));
			comment_arr[comment_arr.length]=comment;
			email_arr[email_arr.length]=email;
			date_arr[date_arr.length]=date;
		}
		catch(err)
		{
			comment_arr=[];
			email_arr=[];
			date_arr=[]
			comment_arr[0]=comment;
			email_arr[0]=email;
			date_arr[0]=date;
		}
		finally
		{
			//console.log(comment_arr);
			//console.log(email_arr);
			localStorage.setItem('comment', JSON.stringify(comment_arr));
			localStorage.setItem('email', JSON.stringify(email_arr));
			localStorage.setItem('date', JSON.stringify(date_arr));
		}
		//window.document.location = '../Teacher/courses.html';
	});
};
document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM content loaded');
	init();});