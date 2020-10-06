const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

let itemsArray=[];

const liMaker = (text) => {//è come scrivere function liMaker di text e poi mettere la funzione
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}


if(localStorage.getItem('items')){
    itemsArray=JSON.parse(localStorage.getItem('items'));
    for (let index = 0; index < itemsArray.length; index++) {
        const element = array[index];
        liMaker(element);
    }
}


//liMaker("test riga 1");liMaker("test riga 2");liMaker("test riga 3"); aggiunge gli items 

form.addEventListener('submit', function (e) {
    e.preventDefault(); //evita che venga ricaricata la pagina

    itemsArray.push(input.value);
    localStorage.setItem('items',JSON.stringify(itemsArray));

    liMaker(input.value);
    input.value = '';
})

