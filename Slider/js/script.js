document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
let left = 0;
function sliderLeft() {
	let line = document.getElementById('line');
	left = left - 800;
	if (left < -5600) {
		left = 0;
	}
	line.style.left = left + 'px';
}
function sliderRight() {
	let line = document.getElementById('line');
	left += 800;
	if (left > 0) {
		left -= 5600;
	}
	line.style.left = left + 'px';
}