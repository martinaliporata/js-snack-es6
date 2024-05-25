// SNACK 1
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
// Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:
// nome del tavolo (tableName),
// nome dell'ospite (guestName),
// posto occupato (place),
// Generiamo e stampiamo in console la lista per i segnaposto.

// Creiamo un array di oggetti dal nome "Tavolo Vip" contenente i nomi dei partecipanti 
// Stampiamo in console l'array

// const tableName = "Tavolo Vip" 

// const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

// const placeholder=[]

// for (let index = 0; index <guests.length; index++) {
//     const guestPlaceholder = {
//         tableName: tableName,
//         guestName: guests[index],
//         place: index+1,
//     }
// }

// placeholder.push(guestPlaceholder)

// console.log(placeholder)


// correzione
const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

const beautifiedGuests = guests.map((guest, index) => {
    const guestObj = {
        tableName: 'Tavolo Vip',
        name: guest,
        place: index
    }
    return guestObj
})

console.log(beautifiedGuests)