const myBtn = document.querySelector('#sendBtn')
const msgIn = document.querySelector('#messageIn')
const msgOut = document.querySelector('#messageOut')

myBtn.addEventListener('click', () => {
    const content = msgIn.value;
    if (content === '') {
        alert("Please Enter Valid Value!");
    } else {
        msgOut.innerHTML = content;
        msgIn.value = '';
    }
});