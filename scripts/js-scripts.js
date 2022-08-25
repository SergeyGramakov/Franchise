// функции range-inputs
function rangeSumChangeValue() {
    let rangeInput = document.querySelector('.js-range-slider-sum');
    let containerResult = document.querySelector('.input-sum-result');

    // вырезаем значение только второго, активного ренжа
    let result = rangeInput.value.slice(7, 14);
    parseInt(result);

    containerResult.innerHTML = result;
}

function rangeMonthChangeValue() {
    let rangeInput = document.querySelector('.js-range-slider-months');
    let containerResult = document.querySelector('.input-months-result');

    let result = rangeInput.value.slice(2, 4);

    switch (result) {
        case '1':
            result += ' месяц';
            break;

        case '2':
        case '3':
        case '4':
            result += ' месяца';
            break;

        default:
            result += ' месяцев'
            break;
    }

    containerResult.innerHTML = result;
}

// плавная прокрутка до якорей
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// слайдеры фото
const swiperAbout = new Swiper(".about__slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "cards",
    grabCursor: true,
    speed: 500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});

const swiperReviews = new Swiper(".reviews__slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            speed: 1100,
        },

        375: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            speed: 600,
        }
    },
});