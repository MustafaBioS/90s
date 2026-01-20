const viewCount = document.querySelector('.viewCount');

document.addEventListener('DOMContentLoaded', ()=> {

const count = document.querySelector('.count');

fetch("https://countapi.mileshilliard.com/api/v1/hit/Views")
    .then(res => res.json())
    .then(data => {
        count.textContent = data.value;
    })

const egypt = document.querySelector('.egypt');
const earth = document.querySelector('.earth');

egypt.addEventListener('click', ()=> {
    window.location.href = "https://en.wikipedia.org/wiki/Egypt";
})

earth.addEventListener('click', ()=> {
    window.location.href = "https://earth.google.com/web/";
})

})
