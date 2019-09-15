"use strict";

const init = function(e){
	let btn = document.querySelector("#btn");
	btn.addEventListener('click', function(event){
		event.preventDefault();
		let course_title = document.getElementById("Course title").value;
		let course_code = document.getElementById("Course code").value;
		let credit_hr = '0.00';//document.getElementById("Credit hr").value;
		let joining_code = document.getElementById("Joining code").value;
		localStorage.setItem('course-title', course_title);
		localStorage.setItem('course-code', course_code);
		localStorage.setItem('credit-hr', credit_hr);
		localStorage.setItem('joining-code', joining_code);
		/*console.log(course_title);
		console.log(course_code);
		console.log(credit_hr);
		console.log(joining_code);*/
		window.document.location = '../Teacher/courses.html';
	});
};
document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM content loaded');
	init();});