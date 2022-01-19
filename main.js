/* 

Questo è un commento!

document.writeln('Hello World!');

alert('Hello World!');

console.log('Hello World!');

document.getElementById('bersaglio').innerHTML = "<p>Hello World!</p>";

*/

// Let ci consente di definire una variabile riassegnabile
let pippo;
pippo = 10;
pippo = "ciao";

// const ci consente di definire una variabile non modificabile
const pigreco = 3.14;

// var funziona come la let, ma è usabile ancor prima di essere inizializzata e 
// non deve essere usata!
var pluto = 10;
//console.log(pluto);

// questo non si fa!!!
variabile = "ciao";


/*  Giochiamo con le stringhe */

let primaStringa = "Ciao";
let secondaStringa = "Mondo!";

let risultato = 'Dentro questo DIV ho scritto: ' + primaStringa + ' ' + secondaStringa;

let concatenazione = `Dentro questo DIV ho scritto: ${primaStringa} ${secondaStringa}` ;

/*
console.log(risultato);
console.log(concatenazione);
*/


/* Operazioni matematiche disponibili */

let somma = 4 + 5;
console.log("La somma tra 4 e 5 fa: " + somma);

let sottrazione = 5 - 3;
console.log("La differenza tra 5 e 4 fa: " + sottrazione);

let moltiplicazione = somma * sottrazione;
console.log("La moltiplicazione tra " + somma + " e " + sottrazione + " fa: " + moltiplicazione);

let divisione = moltiplicazione / 3;
console.log("La divisione tra " + moltiplicazione + " e 3 fa: " + divisione);

let modulo = 8 % 3;
console.log(modulo);


/* Uniamo stringhe a numeri */

let primoValore = 5.5;
let secondoValore = "20";
let terzoValore = 10;


let risultatoSomma = primoValore + secondoValore + terzoValore;
//console.log("La somma vale: " + risultatoSomma);



/* Recupero un valore e lo utilizzo per i miei scopi */

/*
let name = prompt('Inserisci il tuo nome');
let cognome = prompt('Inserisci il tuo cognome');

document.getElementById('name').innerHTML = "Ciao " + name + " " + cognome;
*/


/* Calcolo anno di nascita */
/*
const annoAttuale = 2022;

let eta = prompt("Quanti anni hai?");

let annoNascita = annoAttuale - eta;

document.getElementById('annoNascita').innerHTML = annoNascita;
*/


/* Calcolo anno attuale */
/*
const annoNascita = 1986;

let eta = prompt("Quanti anni hai?");

eta = parseInt(eta);

let annoAttuale = annoNascita + eta;

document.getElementById('annoAttuale').innerHTML = annoAttuale;
*/


//camel case
let annoDiNascita;

//pascal case
let AnnoDiNascita;

//snake case
let anno_di_nascita;

//con alcuni linguaggi, ma non con js
//esiste la kabab case
/*

let anno-di-nascita;

*/

