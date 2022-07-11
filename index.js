const servicesButtons = document.querySelectorAll('.services-button');
const blockDescriptionOfServices = document.querySelectorAll('.services-show_description');
const stagesMainSlider = document.querySelector('.stages_main');
const stagesButtonLeft = document.querySelector('.button_left');
const stagesButtonRight = document.querySelector('.button_right');

const showHide = () => {
    for (let i = 0; i < servicesButtons.length; i++) {
        servicesButtons[i].setAttribute('numBtn', i)
        servicesButtons[i].addEventListener('click', () => {
            for (let i = 0; i < blockDescriptionOfServices.length; i++) {
                blockDescriptionOfServices[i].setAttribute('numBlock', i)
            }
            if (blockDescriptionOfServices[i].getAttribute("numBlock") == servicesButtons[i].getAttribute("numBtn")) {
                blockDescriptionOfServices[i].classList.toggle("active");
                servicesButtons[i].classList.toggle("active");
            }
        });
    }

}
showHide();

let offset = 0;
stagesButtonRight.addEventListener('click', () => {
    offset = offset + 550;
    if (offset > 2750) {
        offset = 0;
    }
    stagesMainSlider.style.left = -offset + "px";
})
stagesButtonLeft.addEventListener('click', () => {
    offset = offset - 550;
    if (offset < 0) {
        offset = 2750;
    }
    stagesMainSlider.style.left = -offset + "px";
})


