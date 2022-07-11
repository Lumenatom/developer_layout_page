const servicesButtons = document.querySelectorAll('.services-button');
const blockDescriptionOfServices = document.querySelectorAll('.services-show_description');
const stagesMainSlider = document.querySelector('.stages_main');
const stagesButtonLeft = document.querySelector('.button_left');
const stagesButtonRight = document.querySelector('.button_right');
const examplesDescription = document.querySelectorAll('.examples_description');
const examplesImageBlock = document.querySelectorAll('.examples_image-block');

const showHideServices = () => {
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
showHideServices();

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

const showHideExamples = () => {
    for (let i = 0; i < examplesImageBlock.length; i++) {
        examplesImageBlock[i].setAttribute('numimg', i);
        examplesImageBlock[i].addEventListener('mouseover', () => {

            for (let i = 0; i < examplesDescription.length; i++) {
                examplesDescription[i].setAttribute('numdescript', i);
            }
            if (examplesDescription[i].getAttribute('numdescript') == examplesImageBlock[i].getAttribute('numimg')) {
                examplesDescription[i].classList.add("active")
            }
        });
        examplesImageBlock[i].addEventListener('mouseout', () => {

            for (let i = 0; i < examplesDescription.length; i++) {
                examplesDescription[i].setAttribute('numdescript', i);
            }
            if (examplesDescription[i].getAttribute('numdescript') == examplesImageBlock[i].getAttribute('numimg')) {
                examplesDescription[i].classList.remove("active")
            }
        });
    }

}
showHideExamples();