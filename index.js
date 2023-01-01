const api = "https://api.adviceslip.com/advice"

const generateBtn = document.querySelector('.dice')
const showQuotes = document.querySelector('.quotes')
const showId = document.querySelector('.id');

fetch(api).then((data) => {
    return data.json();
    // console.log(data.json());
}).then((app) => {
    console.log(app.slip);
    showQuotes.innerHTML = app.slip.advice;
    showId.innerHTML = app.slip.id
});

generateBtn.addEventListener('click', () =>{
    fetch(api).then((data) => {
        return data.json();
        // console.log(data.json());
    }).then((app) => {
        console.log(app.slip);
        showQuotes.innerHTML = app.slip.advice;
        showId.innerHTML = app.slip.id
    });
})