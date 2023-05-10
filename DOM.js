// //selectores

// const title = document.querySelector('#title');
// const list = document.querySelector('#list');
// const listItem = document.querySelectorAll('.listItem');

// console.log(title);
// console.log(list);
// console.log(list.children[0]);
// console.log(listItem[0]);

// //Modificar
// //Atributos
// console.log(title.getAttribute('class'));
// console.log(title.setAttribute('href', '1'));

// // clases
// title.classList.add('blue');
// title.classList.add('red');
// console.log(title.classList.contains('blue'));
// title.classList.remove('blue');

// setInterval(() => {
//     title.classList.toggle('back')
// }, 500);

// [...list.children].forEach((element, index) => {
//     element.id = index + 1;
//     element.innerHTML = `Elemento nuevo ${index + 1}`;
//     element.classList.add('blue');
// });




// const lenghtlist = list.children.length;

// for (let index = 0; index < 10; index++) {
//     const li = document.createElement('li');
//     li.innerHTML = `Elemento nuevo ${lenghtlist + 1 + index}`; li.id = lenghtlist + 1 + index;
//     console.log(lenghtlist)
//     li.classList.add('listItem', 'blue');
//     list.append(li);
// }

let num1 = 8;
let num2 = 5;
let num1Ingresado = 0;
let num2Ingresado = 0;
let intentos1 = 2;
let intentos2 = 4;

while (intentos1 > 0 && num1 !== num1Ingresado && num2 !== num2Ingresado) {
    const promt = prompt('Ingrese dos numeros del 1 al 10 separados por un espacio').split(' ');
    num1Ingresado = Number(promt[0]);
    num2Ingresado = Number(promt[1]);
    intentos1 = intentos1 - 1;
    intentos2 = intentos2 - 1;
}

while (intentos2 > 0 && num1 !== num1Ingresado && num2 !== num2Ingresado) {
    const promt = prompt('Ingrese un numero del 1 al 10');
    num2Ingresado = Number(promt);
    intentos2 = intentos2 - 1;
}

if (num1 === num1Ingresado || num2 === num2Ingresado) {
    alert('Ganaste')
} else {
    alert('Perdiste')
}








