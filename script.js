const viewport = document.querySelector(".viewport");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

// Move 30% of the visible viewport every click
const STEP = 0.3;

function updateButtons() {

    const maxPosition =
        viewport.scrollWidth - viewport.clientWidth;

    if (viewport.scrollLeft <= 0) {

        prevButton.disabled = true;

    } else {

        prevButton.disabled = false;

    }

    if (viewport.scrollLeft >= maxPosition) {

        nextButton.disabled = true;

    } else {

        nextButton.disabled = false;

    }

}

nextButton.addEventListener("click", function () {

    const step = viewport.clientWidth * STEP;

    const maxPosition =
        viewport.scrollWidth - viewport.clientWidth;

    let position = viewport.scrollLeft + step;

    if (position > maxPosition) {

        position = maxPosition;

    }

    viewport.scrollTo({

        left: position,

        behavior: "smooth"

    });

});

prevButton.addEventListener("click", function () {

    const step = viewport.clientWidth * STEP;

    let position = viewport.scrollLeft - step;

    if (position < 0) {

        position = 0;

    }

    viewport.scrollTo({

        left: position,

        behavior: "smooth"

    });

});

viewport.addEventListener("scroll", updateButtons);

updateButtons();
