
var left = 0;
var timer;

function autoSlider() {
	timer = setTimeout(function () {
		let line = document.getElementById('line');
		left = left - 1000;
		if (left < -3000) {
			left = 0;
			clearTimeout(timer);
		}
		line.style.left = left + 'px';
		autoSlider();
	}, 3000);
}
autoSlider();