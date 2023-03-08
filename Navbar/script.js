const btn = document.querySelector(".navbar-btn");
const links = document.querySelector(".navbar-links");

btn.addEventListener('click', () => {
    let value = links.classList.contains("collapse")

    if (value) {
       links.classList.remove('collapse')
       btn.classList.remove('change')
    }
    else {
       links.classList.add('collapse')
       btn.classList.add('change')
    }
})