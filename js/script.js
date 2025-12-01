/*Chiedere il kilometraggio da percorrere in treno all'utente (userKm)
 Moltiplicare il kilometraggio per la tariffa fissa per avere il prezzo pieno del biglietto
costoBiglietto:(userKm * 0.21 Euro)

 Scontistiche
SE l'user ha meno di 18 anni (costoBiglietto -20%)
 userAge<=18 
ALTRIMENTI SE  l'user ha più di 60 anni (costoBiglietto -40%)
 userAge=> 65
ALTRIMENTI il prezzo resta invariato
*/


//setup

const costoKm = 0.21;

console.log(costoKm);

let costoBiglietto = 0;

let kmViaggio = 0;

let etaUser = 0;


//richiesta dati

kmViaggio = prompt("quanti km farai con il biglietto acquistato?")

console.log(kmViaggio);

etaUser = prompt("Quanti anni hai?")

console.log(etaUser);

// calcolo costo biglietto

costoBiglietto = kmViaggio * costoKm;

if (etaUser < 18) {

    costoBiglietto = (costoBiglietto * 0.8)

    console.log(costoBiglietto.toFixed(2));

} else if (etaUser > 65) {
    costoBiglietto = (costoBiglietto * 0.6)

    console.log(costoBiglietto.toFixed(2));
} else 


console.log(costoBiglietto.toFixed(2));

    


