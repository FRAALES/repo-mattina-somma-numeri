//Crea un array composto da 10 automobili
//Ogni oggetto/automobile avrà le seguenti Proprietà--> marca, modello, alimentazione (benzina, diesel, gpl, metano, elettrico)

const automobili = [
    {Marca: 'Opel', Modello: 'Agila', alimentazione: 'benzina'},
    {Marca: 'Opel', Modello: 'Mokka', alimentazione: 'gpl'},
    {Marca: 'Fiat', Modello: 'Panda', alimentazione: 'metano'},
    {Marca: 'Tesla', Modello: 'Turbo', alimentazione: 'elettrico'},
    {Marca: 'Mercedes', Modello: 'Classe A', alimentazione: 'diesel'},
    {Marca: 'Fiat', Modello: 'Multipla', alimentazione: 'benzina'},
    {Marca: 'Mercedes', Modello: 'GLA', alimentazione: 'benzina'},
    {Marca: 'Alfa Romeo', Modello: 'GT', alimentazione: 'diesel'},
    {Marca: 'Nissan', Modello: 'Qasqai', alimentazione: 'diesel'},
    {Marca: 'Citroen', Modello: 'C3', alimentazione: 'benzina'},
];


//Dividi le auto in 3 array separati:
//Nel primo array solo le auto a benzina

const benzina = automobili.filter(automobili => automobili.alimentazione==="benzina");

console.log(benzina);



//Nel secondo solo le auto diesel

const diesel = automobili.filter(automobili => automobili.alimentazione === "diesel");

console.log(diesel);


//Nel terzo tutte le altre auto
const altre = automobili.filter(automobili => (automobili.alimentazione !== "diesel") && (automobili.alimentazione !== "benzina"));

console.log(altre);

//Stampa in console i 3 array





// Crea un array di oggetti che rappresentino delle persone
//ogni persona ha un nome, cognome, età

const persone = [
    {Nome: 'Simone', cognome: 'Icardi', età: 40},
    {Nome: 'Alessandro', cognome: 'Franco', età: 30},
    {Nome: 'Arianna', cognome: 'Santus', età: 26},
    {Nome: 'Adele', cognome: 'Gandelli', età: 50},
    {Nome: 'Felice', cognome: 'Santus', età: 55},
    {Nome: 'Ludovico', cognome: 'Pieralli', età: 7},
    {Nome: 'Pietro', cognome: 'Santin', età: 3},
    {Nome: 'Germano', cognome: 'Tedesco', età: 17},
];


// Crea per ogni persona un nuovo array che dica se la persona può guidare o no (inserendo nome e cognome e se può guidare in base all'età). Esempio 'Mario Rossi non può guidare perché ha 10 anni'; 'Simone Icardi può guidare perché ha 40 anni'.

const guidatori = persone.map ((individuo) =>{
{
    if (individuo.età >= 18)
    return `${individuo.Nome} ${individuo.cognome} può guidare` ;
} 
return `${individuo.Nome} ${individuo.cognome} non può guidare` ;
});
console.log(guidatori);

