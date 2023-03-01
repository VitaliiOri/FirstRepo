const colorsHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', () => {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += colorsHex[randomNumber()];  
    }
    document.body.style.backgroundColor = hex;
    color.textContent = hex; 
})

function randomNumber () {
    return Math.floor(Math.random() * colorsHex.length);
} 