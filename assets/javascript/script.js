const card = [{
    name: 'Dracula',
    image: `<img src="assets/images/Test_Img1.png" alt="" srcset="">`,
    kpower: 84,
    ffactor: 77,
    hrating: 97,
    pstrength: 85,
},
{
    name: 'Michael Myers',
    image: `<img src="assets/images/Test_Img2.png" alt="" srcset="">`,
    kpower: 76,
    ffactor: 88,
    hrating: 92,
    pstrength: 93,
},
{
    name: 'Freddy Krueger',
    image: `<img src="assets/images/Test_Img1.png" alt="" srcset="">`,
    kpower: 94,
    ffactor: 87,
    hrating: 70,
    pstrength: 75,
},
{
    name: 'Jason Vorhees',
    image: `<img src="assets/images/Test_Img2.png" alt="" srcset="">`,
    kpower: 82,
    ffactor: 82,
    hrating: 83,
    pstrength: 98,
},
{
    name: 'Pinhead',
    image: `<img src="assets/images/Test_Img1.png" alt="" srcset="">`,
    kpower: 68,
    ffactor: 90,
    hrating: 92,
    pstrength: 74,
},
{
    name: 'Romero Zombie',
    image: `<img src="assets/images/Test_Img2.png" alt="" srcset="">`,
    kpower: 63,
    ffactor: 83,
    hrating: 93,
    pstrength: 83,
},
];

const playerWins = [];
const computerWins =[];

/**
 * Below is some rudimentary code to create two arrays based on a randomised shuffle or the main arrary 
 * link to splice method
 * https://thewebdev.info/2022/06/26/how-to-split-array-into-two-arrays-with-javascript/#:~:text=To%20split%20array%20into%20two%20arrays%20with%20JavaScript%2C%20we%20can,indexToSplit)%3B%20const%20second%20%3D%20arr.
 * links to randomiser
 * https://javascript.info/task/shuffle (shuffle array)
 */

 function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
};

shuffle(card);  

let playerDeck = card.slice(0, 3)
let computerDeck = card.slice(3, 6)

function playCards (event) {
    let activePlayerCard = playerDeck[0];
    let activeComputerCard = computerDeck[0];

    if (playerDeck.length === 0) {
        console.log('game over');
        document.getElementById('name1').innerText = null;
        document.getElementById('card-area1').children[3].outerHTML = null;
        document.getElementById('kpower1').innerText = null;
        document.getElementById('ffactor1').innerText = null;
        document.getElementById('hrating1').innerText = null;
        document.getElementById('pstrength1').innerText = null;

        document.getElementById('name2').innerText = null;
        document.getElementById('card-area2').children[3].outerHTML = null;
        document.getElementById('kpower2').innerText = null;
        document.getElementById('ffactor2').innerText = null;
        document.getElementById('hrating2').innerText = null;
        document.getElementById('pstrength2').innerText = null;
    } else {

        document.getElementById('name1').innerText = activePlayerCard.name;
        document.getElementById('card-area1').children[3].outerHTML = activePlayerCard.image;
        document.getElementById('kpower1').innerText = activePlayerCard.kpower;
        document.getElementById('ffactor1').innerText = activePlayerCard.ffactor;
        document.getElementById('hrating1').innerText = activePlayerCard.hrating;
        document.getElementById('pstrength1').innerText = activePlayerCard.pstrength;
    
        document.getElementById('name2').innerText = activeComputerCard.name;
        document.getElementById('card-area2').children[3].outerHTML = activeComputerCard.image;
        document.getElementById('kpower2').innerText = activeComputerCard.kpower;
        document.getElementById('ffactor2').innerText = activeComputerCard.ffactor;
        document.getElementById('hrating2').innerText = activeComputerCard.hrating;
        document.getElementById('pstrength2').innerText = activeComputerCard.pstrength;
    
    }

};

playCards();

let fieldP 
let fieldC

let fieldP1 = document.getElementById('kpower1');
let fieldC1 = document.getElementById('kpower2');

let fieldP2 = document.getElementById('ffactor1');
let fieldC2 = document.getElementById('ffactor2');

let fieldP3 = document.getElementById('hrating1');
let fieldC3 = document.getElementById('hrating2');

let fieldP4 = document.getElementById('pstrength1');
let fieldC4 = document.getElementById('pstrength2');

function setKpowerField() {
    fieldP = fieldP1.innerHTML;
    fieldC = fieldC1.innerHTML;
    battle();
};

function setFfactorField() {
    fieldP = fieldP2.innerHTML;
    fieldC = fieldC2.innerHTML;
    battle();
};

function setHratingField() {
    fieldP = fieldP3.innerHTML;
    fieldC = fieldC3.innerHTML;
    battle();
};

function setPstrengthField() {
    fieldP = fieldP4.innerHTML;
    fieldC = fieldC4.innerHTML;
    battle();
};

function battle() {
    if (playerDeck.length === 0) {
        console.log('game over');
    } else {
        if (fieldP > fieldC) {
        console.log('win')
        playerWins.push(playerDeck[0]);
        playerWins.push(computerDeck[0]);
        playerDeck.shift();
        computerDeck.shift();
        playCards();
        document.getElementById('pscore').textContent = playerWins.length;
    } else if(fieldP < fieldC) {
        console.log('lose')
        computerWins.push(playerDeck[0]);
        computerWins.push(computerDeck[0]);
        playerDeck.shift();
        computerDeck.shift();
        playCards();   
        document.getElementById('cscore').textContent = computerWins.length;    
    }

}};

//battle function listener
fieldP1.addEventListener('click', setKpowerField);
fieldP2.addEventListener('click', setFfactorField);
fieldP3.addEventListener('click', setHratingField);
fieldP4.addEventListener('click', setPstrengthField);


//next game button reloads the page
function nextGame(event) {
    if (playerDeck.length === 0) {
        location.reload();
    } else {
        alert('finish this game first!')
    }
}

let myButton = document.getElementById('next-game');
myButton.addEventListener('click', nextGame);



