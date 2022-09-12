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
}
];

function myFunction (event) {
    let rnum = Math.round(Math.random());
    document.getElementById('name').textContent = card[rnum].name;
    document.getElementById('card-area').children[3].outerHTML = card[rnum].image;
    document.getElementById('kpower').innerText = card[rnum].kpower;
    document.getElementById('ffactor').innerText = card[rnum].ffactor;
    document.getElementById('hrating').innerText = card[rnum].hrating;
    document.getElementById('pstrength').innerText = card[rnum].pstrength;
}



let myButton = document.getElementById('next-card');
myButton.addEventListener('click', myFunction);

/**
 * Below is some rudimentary code to create two arrays based on a randomised shuffle or the main arrary 
 * link to splice method
 * https://thewebdev.info/2022/06/26/how-to-split-array-into-two-arrays-with-javascript/#:~:text=To%20split%20array%20into%20two%20arrays%20with%20JavaScript%2C%20we%20can,indexToSplit)%3B%20const%20second%20%3D%20arr.
 * links to randomiser
 * https://javascript.info/task/shuffle (shuffle array)
 */

let myTestArray = ['1', '2', '3', '4', '5', '6'];

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

shuffle(myTestArray);  
console.log(myTestArray);

let playerDeck = myTestArray.slice(0, 3)
let computerDeck = myTestArray.slice(3, 6)
console.log(playerDeck);
console.log(computerDeck);
