let btnAdd = document.querySelector(`#increment`).addEventListener(`click`, function(){
    let boxValueUp = document.querySelector(`#box`).innerHTML += 1;
});

let btnMinus = document.querySelector(`#decrement`).addEventListener(`click`, function(){
    let boxValueDown = document.querySelector(`#box`).innerHTML -= 1;
});