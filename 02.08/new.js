/**********************************
LastEditTime: 2021-02-09 20:06:41
Author: Amero
Description: 
Version: 
FilePath: \MyProject\Clock-02.08\new.js
************************************/
$(document).ready(function() {
	const deg = 6;
	const hr = $(".hr");
	const mn = $(".mn");
	const sc = $(".sc");
	$.extend({
		'ChangeTime':function(){
			let day = new Date();
			let hh = day.getHours() * 30;
			let mm = day.getMinutes() * deg;
			let ss = day.getSeconds() * deg;
			
			let hhdeg = Number(hh) + Number(mm / 12);
			
			hr.css('transform', 'rotateZ(' + hhdeg + 'deg)');
			mn.css('transform', 'rotateZ(' + mm + 'deg)');
			sc.css('transform', 'rotateZ(' + ss + 'deg)');
		}
	});
	setInterval($.ChangeTime,100);
})
