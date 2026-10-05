const viewport = document.querySelector(".viewport");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

if (viewport && nextButton && prevButton){
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
}

// ===== Header & Demo Banner Heights =====
const banner = document.querySelector('.demo-banner');
const header = document.querySelector('header');

const updateLayoutHeights = () => {
    const bannerHeight = banner.getBoundingClientRect().height;
    const headerHeight = header.getBoundingClientRect().height;

    document.documentElement.style.setProperty(
        '--demo-banner-height',
        `${bannerHeight}px`
    );

    document.documentElement.style.setProperty(
        '--header-height',
        `${headerHeight}px`
    );
};

const resizeObserver = new ResizeObserver(updateLayoutHeights);

if (banner) resizeObserver.observe(banner);
if (header) resizeObserver.observe(header);

updateLayoutHeights();

