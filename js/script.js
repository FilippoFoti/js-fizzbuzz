// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// bonus1
// Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.

// bonus2
// Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

// alert
// alert('Benvenuti in FizzBuzz')


// GRID
const gridElem = document.querySelector(".grid");
// Scrivo tutti i numeri
for (let i = 1; i <= 100; i++) {
// VARIABILI
    let text;
    let classColor;
// Numeri multipli di 3 e di 5
    if (i % 3 === 0 && i % 5 === 0) {
        classColor = "red";
        text = "FizzBuzz";
        console.log("FizzBuzz");
// Numeri multipli di 3
    } else if (i % 3 === 0) {
        classColor = "blue";
        text = "Fizz";
        console.log("Fizz");
// Numeri multipli di 5
    } else if (i % 5 === 0) {
        classColor = "yellow";
        text = "Buzz";
        console.log("Buzz");
// Numeri non multipli di 3 o 5
    } else {
        text = i;
        console.log(i);
    }
    gridElem.innerHTML += `<div class="box ${classColor}">${text}</div>`;
};