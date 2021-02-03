const price = document.getElementById("price");
const slider = document.getElementById("myRange");
const discountSwitch = document.getElementsByTagName("input")[1];
let activeDiscount = false;

slider.oninput = function () {
	var value = ((this.value - this.min) / (this.max - this.min)) * 100;
	this.style.background =
		"linear-gradient(to right, hsl(174, 86%, 45%) 0%, hsl(174, 86%, 45%) " +
		value +
		"%, hsl(174, 77%, 80%) " +
		value +
		"%, hsl(174, 77%, 80%) 100%)";
};

function updateSlider() {
	pageViews = document.getElementById("views");
	pageViews.innerHTML = slider.value;
	updatePrice();
}

function updatePrice() {
	let cost = (slider.value * 0.16).toFixed(2);

	if (activeDiscount) {
		price.innerText = (cost - cost * 0.25).toFixed(2);
	} else {
		price.innerText = cost;
	}
}

function toggle() {
	activeDiscount = !activeDiscount;
	updatePrice();
}

slider.addEventListener("input", updateSlider);
discountSwitch.addEventListener("click", toggle);
