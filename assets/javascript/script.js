const card = [{
    name: 'Dracula',
    image: `<img src="assets/images/Test_Img2.png" alt="" srcset="">`,
    kpower: 85,
    ffactor: 75,
    hrating: 96,
    pstrength: 85,
},
{
    name: 'Michael Myers',
    image: `<img src="assets/images/Test_Img2.png" alt="" srcset="">`,
    kpower: 75,
    ffactor: 90,
    hrating: 90,
    pstrength: 90,
}
];

function myFunction (event) {
    
  }

console.log(card[0].kpower);

let myButton = document.getElementById('next-card');
myButton.addEventListener('click', myFunction);