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