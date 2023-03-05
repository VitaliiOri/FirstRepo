const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const clearBtn = document.querySelector(".btnClear");
const equalBtn = document.querySelector(".btnEqual");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        let numbers = btns[i].getAttribute('data-num');
        screen.value = screen.value + numbers;
    })  
}

clearBtn.addEventListener('click', () => {
    screen.value = "";
})

equalBtn.addEventListener('click', () => {
    if (screen.value === '') {
        alert("EMPTY! ");
    } else {
        screen.value = eval(screen.value);
    }   
})