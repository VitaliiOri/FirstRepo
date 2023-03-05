const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const content = document.querySelector(".images");

let counter = 0;

nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);

function nextImg () {
    if (counter === 4) {
        counter = 0
    };
    counter++;
    content.style.background = `url(img/${counter}.jpg) center/cover no-repeat`;
};

function prevImg () {
    if (counter === 1) {
        counter = 5
    }
    counter--;
    content.style.background = `url(img/${counter}.jpg) center/cover no-repeat`;
};