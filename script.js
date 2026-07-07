const track = document.querySelector(".track");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const products = document.querySelectorAll(".product");

let current = 0;

const cardWidth = 300;
const gap = 30;
const move = cardWidth + gap;

// viewport
const visibleCards = 3;

//
const maxSlide = products.length - visibleCards;

nextButton.addEventListener("click", function () {

	if (current < maxSlide) {
		current++;

		track.style.transform =
			`translateX(-${current * move}px)`;
	}

});

prevButton.addEventListener("click", function () {

	if (current > 0) {
		current--;

		track.style.transform =
			`translateX(-${current * move}px)`;
	}

});
