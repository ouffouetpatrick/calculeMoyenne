
const coef = 2;
const coefTotal = 5;

let moyenneCoef1 = document.querySelector('#afficheMoyenne1');
let moyenneCoef2 = document.querySelector('#afficheMoyenne2');
let moyenneCoef3 = document.querySelector('#afficheMoyenne3');
let afficheMoyCoef = document.querySelectorAll('.afficheMoyenne');
let trimestre1 = document.querySelector('#moyenne1');
let trimestre2 = document.querySelector('#moyenne2');
let trimestre3 = document.querySelector('#moyenne3');
let moyenneGenerale = document.querySelector('.mga');
let button = document.querySelector('#calcule');

button.addEventListener('click', () => {
    let moy1 = trimestre1.value;
    let moy2 = trimestre2.value;
    let moy3 = trimestre3.value;
    
    let calMoy1 = moy1 * 1;
    let calMoy2 = moy2 * coef;
    let calMoy3 = moy3 * coef;
    
    moyenneCoef1.innerText = calMoy1;
    moyenneCoef2.innerText = calMoy2;
    moyenneCoef3.innerText = calMoy3;

    let sum = 0;
    for (let i = 0; i < afficheMoyCoef.length; i++) {
        sum += parseInt(afficheMoyCoef[i].innerText);
        console.log(sum);
    }

    moyenneGenerale.innerText = sum / 5;
   
})