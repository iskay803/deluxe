var swiper = new Swiper(".process-slider", {
    slidesPerView: "auto",
    spaceBetween: 63,
    breakpoints: {
        768: {
            spaceBetween: 88,
        }
    }
});

var swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    navigation: {
        nextEl: ".swiper-button-next",
    },
});

new WOW().init();

addEventListener('scroll', (event) => {
    const targetEl = document.querySelector('.our-success-block');
    const rect = targetEl.getBoundingClientRect();

    if (targetEl.classList.contains('calculated')) {
        return;
    }

    if (rect.top < 0 ) {
        return;
    }

    if (rect.bottom >= window.innerHeight) {
        return;
    }

    targetEl.classList.add('calculated');

    function startCounter(el) {
        const maxValue = el.textContent;
        let i = 0;

        const iteration = function () {
            setTimeout(function () {
                el.textContent = i++;

                if (i <= maxValue) {
                    iteration();
                }
            }, 100)
        }
        iteration();
    }

    targetEl.querySelectorAll('.my-counter').forEach(function (el) {
        startCounter(el);
    });
});