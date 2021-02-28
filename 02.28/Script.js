/**********************************
LastEditTime: 2021-02-28 20:18:18
Author: Amero
Description: 
Version: 
FilePath: \My-Project\02.28\Script.js
************************************/
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

function clock() {
    setInterval(() => {
        let Vdate = new Date();
        let h = Vdate.getHours();
        let m = Vdate.getMinutes();
        let s = Vdate.getSeconds();
        let Am = 'AM';

        if (h > 12) {
            h = h - 12;
            Am = 'PM'
        }
        h = (h < 10) ? '0' + h : h;
        m = (m < 10) ? '0' + m : m;
        s = (s < 10) ? '0' + s : s;

        hour.innerHTML = h;
        minute.innerHTML = m;
        seconds.innerHTML = s;
        ampm.innerHTML = Am;
    }, 1000);
}
clock();