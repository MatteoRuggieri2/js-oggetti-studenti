// CONSEGNA

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// --Creare un array di oggetti di studenti.
// --Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
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


console.log('-----------------')



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
            console.log(key + ': ' + singleStudent[key]);
        }
    }

}

// Chiedo se vuole aggiungere uno studente
const addStudentChoice = prompt(
`
    Vuoi aggiungere uno studente?

    Se vuoi aggiungerlo digita 'si', altrimenti 'no'.
    Clicca il tasto 'ok' per continuare.
`)

// Se vuole aggiungere uno studente chiedo nome, cognome e età
if (addStudentChoice === 'si') {
    const addStudentName = prompt('Qual è il suo nome?');
    const addStudentSurname = prompt('Qual è il suo cognome?');
    const addStudentAge = parseInt(prompt('Qual è la sua età?'));

    // Inserisco le info del nuovo studente in un oggetto
    let newStudent = createObject(addStudentName, addStudentSurname, addStudentAge);

    // Inserisco l'oggetto nell'array
    studentsArray.push(newStudent)

    alert(`
    Lo studente è stato registrato con successo!

    Recap info studente:
    Nome: ${addStudentName}
    Cognome: ${addStudentSurname}
    Età: ${addStudentAge}
    `)

    // Stampo la lista aggiornata degli studenti
    console.log('Lista aggiornata degli studenti: ', studentsArray)


}



// FUNCTION
// Funzione per creare studenti con 3 info.

// firstElement --> Nome
// secondElement --> Cognome
// thirdElement --> Età

// return: Ritorna un oggetto completo di informazioni sullo studente

function createObject (firstElement, secondElement, thirdElement) {
    
    let object = {
        nome: firstElement,
        cognome: secondElement,
        eta: thirdElement
    }

    return object;
}