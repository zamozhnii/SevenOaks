window.addEventListener('DOMContentLoaded', init);

function init() {
    const d = document;
    // SLIDER
    const slider = d.querySelector('.slider__wrap');
    const titles = d.querySelectorAll('.slider__welcome-text-bold');
    slider.addEventListener('click', e => {
        let target = e.target;
        if (target.tagName === 'BUTTON') {
            if (target.classList.contains('slider__btn-arrow-right')) {
                for (let i = 0; i < titles.length; i++) {
                    if (titles[i].classList.contains('active-title')) {
                        let activeRight = titles[i];
                        activeRight.classList.remove('active-title');
                        let nextRight = activeRight.nextElementSibling;
                        if (nextRight === null) {
                            titles[0].classList.add('active-title');
                            break;
                        }
                        nextRight.classList.add('active-title');
                        break;
                    }
                }
            }
            if (target.classList.contains('slider__btn-arrow-left')) {
                for (let i = 0; i < titles.length; i++) {
                    if (titles[i].classList.contains('active-title')) {
                        let activeLeft = titles[i];
                        activeLeft.classList.remove('active-title');
                        let nextLeft = activeLeft.previousElementSibling;
                        if (nextLeft === null) {
                            titles[titles.length - 1].classList.add('active-title');
                            break;
                        }
                        nextLeft.classList.add('active-title');
                        break;
                    }
                }
            }
        }
    });

    // POPUP

    const btnPopup = d.querySelector('#subscribe');
    const modalPopup = d.querySelector('.modal-popup-window');

    btnPopup.addEventListener('click', () => {
        modalPopup.style.display = 'flex';
        d.body.style.overflow = 'hidden';

        const btnClose = d.querySelector('.close-modal-popup');
        btnClose.addEventListener('click', () => {
            modalPopup.style.display = 'none';
            d.body.style.overflow = '';
        });
    });
}