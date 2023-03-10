// alert
alert('Benvenuti in FizzBuzz')

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