/**********************************
LastEditTime: 2021-02-09 19:28:36
Author: Amero
Description: 
Version: 
FilePath: \MyProject\Clock-02.08\Clock.js
************************************/
const deg = 6;
const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');

function Myfunction() {
	setInterval(() => {
		let day = new Date();
		let hh = day.getHours()*30;
		let mm = day.getMinutes() * deg;
		let ss = day.getSeconds() * deg;
		
		let hhdeg = Number(hh)+Number(mm/12);

		hr.style.transform = 'rotateZ('+hhdeg+'deg)';
		mn.style.transform = 'rotateZ(' + mm + 'deg)';
		sc.style.transform = 'rotateZ(' + ss + 'deg)';
	});
	
}
Myfunction();
