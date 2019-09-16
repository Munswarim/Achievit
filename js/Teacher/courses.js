"use strict";
const init = function(e)
	{

		let course_code=[];
		let credit_hr=[];
		let course_title=[];
		let joining_code=[];

		course_code = JSON.parse(localStorage.getItem('course-code'));
		credit_hr = JSON.parse(localStorage.getItem('credit-hr'));
		course_title = JSON.parse(localStorage.getItem('course-title'));
		joining_code = JSON.parse(localStorage.getItem('joining-code'));

		if(course_code != null && credit_hr != null && course_title != null && joining_code != null)
		{
			let td=[];
			let tr=[];
			let table = document.getElementById("table");
			for(var i=0; i<course_title.length; i++)
			{
				td[i]=[];
				for(var j=0; j<4; j++)
				{	
					td[i][j] = document.createElement('td');
				}
				
				td[i][0].appendChild(document.createTextNode(course_code[i]));
				td[i][1].appendChild(document.createTextNode(credit_hr[i]));
				td[i][2].innerHTML = '<a href ="#">' + course_title[i] + '</a>';
				td[i][3].appendChild(document.createTextNode(joining_code[i]));

				td[i][0].id = 'course-code';
				td[i][1].id = 'credit-hr';
				td[i][2].id = 'course-title';
				td[i][3].id = 'joining-code';
				console.log(td[i]);
				tr[i] = document.createElement('tr');

				for(var j=0; j<4; j++)
				{
					tr[i].appendChild(td[i][j]);
				}
				table.appendChild(tr[i]);
			}
		}
	};
document.addEventListener('DOMContentLoaded',function()
		{
			console.log('DOM content loaded');
			init();
		});