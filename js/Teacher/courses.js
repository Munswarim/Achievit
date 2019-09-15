"use strict";
const init = function(e)
	{

		let data = [];
		data[0] = localStorage.getItem('course-code');
		data[1] = localStorage.getItem('credit-hr');
		data[2] = localStorage.getItem('course-title');
		data[3] = localStorage.getItem('joining-code');

		if(data[0] != '' && data[1] != 'none' && data[2] != '' && data[3] != '')
		{
			let td = [];

			for(var i=0; i<4; i++)
			{	
				td[i] = document.createElement('td');
				if(i!=2)
					td[i].appendChild(document.createTextNode(data[i]));
				else
				{
					td[i].innerHTML = '<a href ="#">' + data[i] + '</a>';
				}
			}

			td[0].id = 'course-code';
			td[1].id = 'credit-hr';
			td[2].id = 'course-title';
			td[3].id = 'joining-code';

			let tr = document.createElement('tr');

			for(var i=0; i<4; i++)
			{
				tr.appendChild(td[i]);
			}

			let table = document.getElementById("table");
			table.appendChild(tr);
		}
	};
document.addEventListener('DOMContentLoaded',function()
		{
			init();
		});