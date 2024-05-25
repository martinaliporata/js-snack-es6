// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

// Creo un array di oggetti che hanno come proprietà nome e peso 
// Utilizzando il destructuring (quindi dichiarando una variabile con all'interno tante chiavi
// quante le proprietà che vogliamo estrapolare) e il backtick, stampiamo in console

const arrayBici = [
    {
        nome: 'bici1',
        peso: 6
    },
    {
        nome: 'bici2',
        peso: 7
    },
    {
        nome: 'bici3',
        peso: 8
    },
    {
        nome: 'bici4',
        peso: 9
    },
    {
        nome: 'bici5',
        peso: 10
    },
    {
        nome: 'bici6',
        peso: 11
    }
]

const {peso} = arrayBici
console.log(peso)