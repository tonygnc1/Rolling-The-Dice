const button = document.querySelector('button');
const palyer1 = document.querySelector('#player1');
const player2 = document.querySelector('#computer');
const output = document.querySelector('#output');
let score = document.querySelector('.score');
button.addEventListener('click', function () {

    let rolls = [roll(6), roll(6)]; // Max number 6 
    if (rolls[0] == rolls[1]) { temp = "It's a draw"; }
    else if (rolls[0] > rolls[1]) { temp = "Player 1 Wins"; }
    else { temp = 'Computer Wins'; }
    output.innerHTML = temp;
    palyer1.innerHTML = rolls[0];
    computer.innerHTML = rolls[1];

    score.innerHTML = 'Player 1[' + rolls[0] + ']' + ' -- ' + 'Computer [' + rolls[1] + ']';


    console.log(rolls);

})




function roll(num) {
    let rNumber = Math.floor(Math.random() * num) + 1; // Need up to 6 numbers
    let n = 9855 + rNumber
    let char = '&#' + n + ';';
    return rNumber + ' ' + char;
}

