// SNACK 4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creo un array di squadre da calcio, ognuna delle quali avrà le seguenti proprietà (nome - da compilare, punti fatti e falli subiti - settati a 0).
// Al posto degli 0, generare un numero random con math.random
// Creiamo un nuovo array creando un destructuring contenente solo nome e falli subiti dalla squadra e stampiamo in console.

const arraySquadraCalcio = [
    {
        nome: '',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: '',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: '',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: '',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: '',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: '',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: '',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: '',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: '',
        puntiFatti: 0,
        falliSubiti: 0,
    },
]


let userInput = prompt("Please enter your name");
arraySquadraCalcio.push = userInput;


Object.keys(item).forEach(function(key) {
    if (item[puntiFatti] === 0 && item[falliSubiti] === 0) {
      item[key] = results[key];
    }
  })