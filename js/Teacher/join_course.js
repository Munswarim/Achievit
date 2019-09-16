"use strict";

const init = function(e){
	let btn = document.querySelector("#btn");
	btn.addEventListener('click', function(event){
		event.preventDefault();
		let course_title = document.getElementById("Course title").value;
		let course_code = document.getElementById("Course code").value;
		let credit_hr = '0.00';//document.getElementById("Credit hr").value;
		let joining_code = document.getElementById("Joining code").value;
		
		if(course_title == '' || course_code == '' || credit_hr == 'none' || joining_code == '')
		{
			window.document.location = './courses.html';
			return;
		}

		let course_title_arr;
		let course_code_arr;
		let credit_hr_arr;
		let joining_code_arr;

		try
		{
			course_title_arr=JSON.parse(localStorage.getItem('course-title'));
			course_code_arr=JSON.parse(localStorage.getItem('course-code'));
			credit_hr_arr=JSON.parse(localStorage.getItem('credit-hr'));
			joining_code_arr=JSON.parse(localStorage.getItem('joining-code'));
			
			course_title_arr[course_title_arr.length]=course_title;
			course_code_arr[course_code_arr.length]=course_code;
			credit_hr_arr[credit_hr_arr.length]=credit_hr;
			joining_code_arr[joining_code_arr.length]=joining_code;
		}
		catch(err)
		{
			course_title_arr=[];
			course_code_arr=[]
			credit_hr_arr=[];
			joining_code_arr=[];
			
			course_title_arr[0]=course_title;
			course_code_arr[0]=course_code;
			credit_hr_arr[0]=credit_hr;
			joining_code_arr[0]=joining_code;
		}
		finally
		{
			localStorage.setItem('course-title', JSON.stringify(course_title_arr));
			localStorage.setItem('course-code', JSON.stringify(course_code_arr));
			localStorage.setItem('credit-hr', JSON.stringify(credit_hr_arr));
			localStorage.setItem('joining-code', JSON.stringify(joining_code_arr));
			window.document.location = '../Teacher/courses.html';
		}
		/*console.log(course_title);
		console.log(course_code);
		console.log(credit_hr);
		console.log(joining_code);*/
	});
};
document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM content loaded');
	init();});