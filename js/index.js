const scrollOff = () => document.body.style.overflow = 'hidden';
const scrollOn = () => document.body.style.overflow = '';

const dropdown = (selector) => {
    const parent = document.querySelector(selector);

    if (!parent) return false;


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
    // dropdown();
}

document.addEventListener('DOMContentLoaded', init);