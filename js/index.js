const scrollOff = () => document.body.style.overflow = 'hidden';
const scrollOn = () => document.body.style.overflow = '';

const dropdownInit = () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    if (dropdowns.length) return false;

    dropdowns.forEach((dropdown) => {
        const items = dropdown.querySelector('.dropdown-item');

        items.forEach((item) => {
            item.addEventListener('click', ({ currentTarget }) => {
                if (currentTarget.classList.contains('active')) {
                    currentTarget.classList.remove('active');
                } else {
                    currentTarget.classList.add('active');
                }
            })
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

const init = () => {
    console.log('init();');
    burgerMenu();
    dropdownInit();
    // dropdown();
}

document.addEventListener('DOMContentLoaded', init);