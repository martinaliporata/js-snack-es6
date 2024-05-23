// SNACK 2
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


// Creiamo un array di oggetti, ognuno dei quali avrà un id, un name (scritto in minuscolo) e un grade
// Con filter creiamo una lista degli studenti con media voti >70
// Con un altro filter creiamo una lista degli studenti con media voti >70 e un id >120

const studentiIdentificati = [
    {
        id: 213,
        nome: 'Giuseppina della Rovere',
        grades: 78,
    },
    {
        id: 110,
        nome: 'Paola Cortellessa',
        grades: 96,
    },
    {
        id: 250,
        nome: 'Andrea Mantegna',
        grades: 48,
    },
    {
        id: 145,
        nome: 'Gaia Borromini',
        grades: 74,
    },
    {
        id: 196,
        nome: 'Luigi Grimaldello',
        grades: 68,
    },
    {
        id: 102,
        nome: 'Piero della Francesca',
        grades: 50,
    },
    {
        id: 120,
        nome: 'Francesca da Polenta',
        grades: 84,
    },
]


const mediaOver70 = studentiIdentificati.filter((singleStudent) => {
    if(singleStudent.grades > 70)
        return true
})
console.log(mediaOver70)

const mediaOver70AndIdOver120 = studentiIdentificati.filter((singleStudent) => {
    if(singleStudent.grades > 70 && singleStudent.id > 120)
        return true
})
console.log(mediaOver70AndIdOver120)