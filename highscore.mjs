import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogsteGetal;
let laagsteGetal;
let gemiddelde = 0;
let getal;

getal = parseFloat(await userInput.question("Geef een getal in (1/5):"));

gemiddelde += getal;
hoogsteGetal = getal;
laagsteGetal = getal;


console.log(hoogsteGetal + ' is het hoogste getal')

console.log(laagsteGetal + ' is het laagste getal')


getal = parseFloat(await userInput.question("Geef een getal in (2/5):"));

gemiddelde += getal;

if(hoogsteGetal < getal){
    hoogsteGetal = getal

} if(laagsteGetal > getal){
    laagsteGetal = getal;
}

console.log(hoogsteGetal + ' is het hoogste getal')
console.log(laagsteGetal + ' is het laagste getal')

getal = parseFloat(await userInput.question("Geef een getal in (3/5):"));

gemiddelde += getal;

if(hoogsteGetal < getal){
    hoogsteGetal = getal

} if(laagsteGetal > getal){
    laagsteGetal = getal;
}

console.log(hoogsteGetal + ' is het hoogste getal')
console.log(laagsteGetal + ' is het laagste getal')

getal = parseFloat(await userInput.question("Geef een getal in (4/5):"));

gemiddelde += getal;

if(hoogsteGetal < getal){
    hoogsteGetal = getal

} if(laagsteGetal > getal){
    laagsteGetal = getal;
}

console.log(hoogsteGetal + ' is het hoogste getal')
console.log(laagsteGetal + ' is het laagste getal')


getal = parseFloat(await userInput.question("Geef een getal in (5/5):"));

gemiddelde += getal;

if(hoogsteGetal < getal){
    hoogsteGetal = getal

} if(laagsteGetal > getal){
    laagsteGetal = getal;
}

console.log(hoogsteGetal + ' is het hoogste getal')
console.log(laagsteGetal + ' is het laagste getal')

console.log("Het gemiddelde is " + gemiddelde / 5)

process.exit()