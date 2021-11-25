// CONSEGNA

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo 
// oggetto studente inserendo nell’ordine: nome, cognome e età.



// -- ESERCIZIO 1 --

// Creo l'oggetto che descrive uno studente
const student = {
    nome: 'Matteo',
    cognome: 'Ruggieri',
    eta: 19
}

// leggo le proprietà dell'oggetto con il ciclo for in
for (let key in student){
    console.log(student[key]);
}



// -- ESERCIZIO 2 --

// Creo un array di oggetti con dentro gli studenti
const studentsArray = 
[

    {
        nome: 'Francesco',
        cognome: 'Stecchetto',
        eta: 34
    },

    {
        nome: 'Guido',
        cognome: 'Petrini',
        eta: 22
    },

    {
        nome: 'Giovanni',
        cognome: 'Stanti',
        eta: 31
    }

];



// Stampo per ogni studente nome e cognome
// leggo l'array di studenti
for (let i = 0; i < studentsArray.length; i++) {
    const singleStudent = studentsArray[i]
    
    // Per ogni studente leggo le info
    for (let key in singleStudent) {
        
        // Se se la key è diversa da età stampo la info
        if (key !== 'eta') {
            console.log(singleStudent[key]);
        }
    }

}