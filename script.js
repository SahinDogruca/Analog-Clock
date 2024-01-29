var secs = document.getElementById("secs");
var mins = document.getElementById("mins");
var hours = document.getElementById("hours");

setInterval(function () {
	var date = new Date();
	secs.style.transform = `rotate(${date.getSeconds() * 6}deg)`;
	mins.style.transform = `rotate(${date.getMinutes() * 6}deg)`;
	hours.style.transform = `rotate(${date.getHours() * 6}deg)`;
}, 1000);
