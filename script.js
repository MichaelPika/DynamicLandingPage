const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const userName = document.getElementById("name");
const focus = document.getElementById("focus");

function showTime() {
	let today = new Date();
	let hour = today.getHours();
	let min = today.getMinutes();
	let sec = today.getSeconds();

	hour = hour % 12 || 12;
	const amPm = hour >= 12 ? "PM" : "AM";

	time.innerHTML = `<span>${hour}</span><span>:</span><span>${addZero(
		min
	)}</span><span>:</span><span>${addZero(sec)}</span> <span>${amPm}<span>`;

	setTimeout(showTime, 1000);
}

function addZero(n) {
	return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setBgGreet() {
	let today = new Date(),
		hour = today.getHours();

	if (hour < 12) {
		document.body.style.backgroundImage = "url('./image/morning.jpg')";
		greeting.textContent = "Good Morning, ";
	} else if (12 < hour < 18) {
		document.body.style.backgroundImage = "url('./image/afternoon.jpg')";
		greeting.textContent = "Good Afternoon, ";
	} else {
		document.body.style.backgroundImage = "url('./image/night.jpg')";
		greeting.textContent = "Good Evening, ";
		document.body.style.color = "white";
	}
}

function getName() {
	if (localStorage.getItem("name") === null) {
		userName.textContent = "[Enter Name]";
	} else {
		userName.textContent = localStorage.getItem("name");
	}
}

function setName(e) {
	if (e.type === "keydown") {
		if (e.key === "Enter") {
			localStorage.setItem("name", e.target.innerText);
			userName.blur();
		}
	} else {
		localStorage.setItem("name", e.target.innerText);
	}
}

function getFocus() {
	if (localStorage.getItem("focus") === null) {
		focus.textContent = "[Enter Focus]";
	} else {
		focus.textContent = localStorage.getItem("focus");
	}
}

function setFocus(e) {
	if (e.type === "keydown") {
		if (e.key === "Enter") {
			localStorage.setItem("focus", e.target.innerText);
			focus.blur();
		}
	} else {
		localStorage.setItem("focus", e.target.innerText);
	}
}

userName.addEventListener("keydown", setName);
userName.addEventListener("blur", setName);
focus.addEventListener("keydown", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
setBgGreet();
getName();
getFocus();
