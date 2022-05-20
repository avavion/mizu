const scrollOff = () => document.body.style.overflow = 'hidden';
const scrollOn = () => document.body.style.overflow = '';

const dropdownInit = () => {
    const items = document.querySelectorAll('[data-faq-item]');

    if (!items.length) return false;


    items.forEach((item) => {
        item.addEventListener('click', ({ currentTarget }) => {
            if (currentTarget.classList.contains('active')) {
                currentTarget.classList.remove('active');
            } else {
                currentTarget.classList.add('active');
            }
        })
    });
}

const burgerMenu = () => {
    const modal = document.getElementById('mobile');

    if (!modal) return false;

    const burger = document.querySelector('.burger');

    if (!burger) return false;

    const show = () => {
        modal.classList.add('active');
        scrollOff();
    }

    const hide = () => {
        modal.classList.remove('active');
        scrollOn();
    }

    burger.addEventListener('click', show);

    modal.addEventListener('click', (event) => {
        if (event.currentTarget === modal) {
            hide();
        }
    })
}

const slider = (selector) => {
    const parent = document.querySelector(selector);

    if (!parent) return false;

    const container = parent.querySelector('.swiper');

    const timeline = parent.querySelector('.timeline');
    const items = timeline.querySelectorAll('.item');

    const clear = () => {
        for (const item of items) {
            item.classList.remove('active');
        }
    }

    const setActive = (index) => {
        clear();
        items[index].classList.add('active');
    }

    const swiper = new Swiper(container, {
        autoHeight: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 120,
        autoplay: {
            delay: 5000
        },
        on: {
            init: ({ activeIndex }) => setActive(activeIndex),
            slideChange: ({ activeIndex }) => setActive(activeIndex)
        }
    });
}

const init = () => {
    slider('.section-slider');
    burgerMenu();
    dropdownInit();
}

document.addEventListener('DOMContentLoaded', init);