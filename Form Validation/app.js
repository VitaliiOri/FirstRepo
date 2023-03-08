const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const usernameV = username.value.trim();
    const emailV = email.value.trim();
    const passwordV = password.value.trim();
    const password2V = password2.value.trim();

    if (usernameV === '') {
        setErrorFor(username, 'User cannot be blank');
    }
    else {
        setSuccessFor(username);
    }

    if (emailV === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailV)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (passwordV === '') {
        setErrorFor(password, 'Password cannot be blank');
    }
    else {
        setSuccessFor(password);
    }
    if (password2V === '') {
        setErrorFor(password2, 'Password cannot be blank');
    } else if (password2V !== passwordV) {
        setErrorFor(password2, 'Passwords does not match');
    }
    else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formC = input.parentElement;
    const small = formC.querySelector('small');

    small.innerText = message;

    formC.className = 'form-control error';
}

function setSuccessFor(input) {
    const formC = input.parentElement;
    formC.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}