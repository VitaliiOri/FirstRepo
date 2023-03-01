const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025', 'purple', 'pink', 'grey', 'yellow'];

const button = document.getElementById('btn');
const color = document.querySelector('.color');


button.addEventListener('click', () => {
    const random = randomNumber();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
});

function randomNumber () { 
    return Math.floor(Math.random() * colors.length);
} 