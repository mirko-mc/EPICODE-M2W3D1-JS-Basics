/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
    return num1 === num2 ? `Dato che i due numeri sono uguali allora la somma dei due numeri moltiplicata per 3 è ${(num1 + num2) * 3}` : `La somma dei due numeri è ${somma = num1 + num2}`;
}
alert(crazySum(parseInt(prompt("ESERCIZIO 1 - Scrivi una funzione chiamata 'crazySum' che riceve due numeri interi come parametri. La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3\nDammi il primo numero")), parseInt(prompt("ESERCIZIO 1\nDammi il secondo numero"))));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(numBound) {
    return (numBound >= 20 && numBound <= 400) || numBound === 400 ? true : false;
}
alert(boundary(parseInt(prompt("ESERCIZIO 2 - Scrivi una funzione chiamata 'boundary', che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.\nDammi un numero possibilmente compreso tra 20 e 100 oppure uguale 400"))));
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {
    let inverted = ""
    for (let i = str.length; i >= 0; i--) {
        inverted += str.charAt(i);
    }
    return `Il testo invertito è ${inverted}`;
}
alert(reverseString(prompt("ESERCIZIO 3 - Scrivi una funzione chiamata 'reverseString', che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).\nDammi del testo")));
/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str) {
    let upFirst = "";
    for (let i = 0; i < str.length; i++) {
        i === 0 || str.charAt(i - 1) === " " ? upFirst += str.charAt(i).toUpperCase() : upFirst += str.charAt(i);
    }
    return `La tua stringa con ogni iniziale maiuscola diventa\n${upFirst}`;
}
alert(upperFirst(prompt("ESERCIZIO 4 - Scrivi una funzione chiamata 'upperFirst', che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.\nDammi una stringa")));
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    let random = [];
    for (let i = 0; i < n; i++) {
        random.push(Math.round(Math.random() * 10) + 1);
    }
    return `I tuoi ${n} numeri casuali sono : ${random}`;
}
alert(giveMeRandom(parseInt(prompt("ESERCIZIO 5 - Scrivi una funzione chiamata 'giveMeRandom', che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.\nDimmi quanti numeri casuali devo estrarre"))));
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    return l1 === l2 ? `Ti ho chiesto base e altezza di un rettangolo, non di un quadrato` : `L'area del rettangolo è ${l1 * l2} `
}
alert(area(parseInt(prompt("ESERCIZIO EXTRA 1 - Scrivi una funzione chiamata 'area' che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.\nDammi la base del rettangolo")), parseInt(prompt("ESERCIZIO EXTRA 1\nDammi l'altezza del rettangolo"))));
/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
    return (num - 19) > 19 ? `La differenza tra ${num} e 19 è di ${num - 19} che moltiplicato per 3 ci restituisce ${(num - 19) * 3}` : `La differenza tra ${num} e 19 è di ${num - 19}`
}
alert(crazyDiff(parseInt(prompt("ESERCIZIO EXTRA 2 - Scrivi una funzione chiamata 'crazyDiff' che calcola la differenza assoluta tra un numero fornito e 19. Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.\nDammi un numero da cui calcolare la differenza con 19"))));
/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(str) {
    return str.startsWith("code") ? str : `code${str}`
}
alert(codify(prompt("ESERCIZIO EXTRA 3 - Scrivi una funzione chiamata 'codify' che accetta una stringa come parametro. La funzione deve aggiungere la parola 'code' all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con 'code' allora deve ritornarla senza modifiche.\nDammi una stringa")));
/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(num) {
    return num % 3 === 0 || num % 7 === 0 ? true : false;
  }
  alert(check3and7(parseInt(prompt("ESERCIZIO EXTRA 4 - Scrivi una funzione chiamata 'check3and7' la quale accetta un numero intero positivo come parametro. La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false. SUGGERIMENTO: operatore modulo\nDammi un mumero divisibile per 3 o 7"))));
/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str) {
    return str.slice(1, -1);
  }
  alert(cutString(prompt("ESERCIZIO EXTRA 5 - Scrivi una funzione chiamata 'cutString', che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.\nDammi del testo")));