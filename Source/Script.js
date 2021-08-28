const timeElement = document.getElementById("clock-text");
const amPmElement = document.getElementById("clock-ampm");
const dateElement = document.getElementById("clock-date");

class SimpleDigitalClock {
	start() {
		this.update();
		setInterval(this.update, 1000);
	}

	update() {
		const now = new Date();
		const hours = (now.getHours() % 12 || 12).toString().padStart(2, "0");
		const minutes = (now.getMinutes()).toString().padStart(2, "0");
		const seconds = (now.getSeconds()).toString().padStart(2, "0");

		timeElement.innerText = `${hours}:${minutes}.${seconds}`;

		amPmElement.innerText = now.getHours() > 12 ? "PM" : "AM";

		let str = now.toString().split(" ");

		dateElement.innerText = `${str[0]}, ${str[1]} ${str[2]}, ${str[3]}`;

	}
};

new SimpleDigitalClock()
	.start();