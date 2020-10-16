'use strict'

let sign = document.getElementsByName('sign');
let sign1 = document.getElementById("sign1");
let sign2 = document.getElementById("sign2");
let cell = document.getElementsByClassName('cell')
let board = document.getElementById('board')
let chSign = document.getElementById('chSign')
let restart = document.getElementById('restartButton')
let start = document.getElementById('startButton')
let userSign;
let win = false;

start.addEventListener('click', startButton)
restart.addEventListener('click', restartButton)

function restartButton() {
    win = false
    board.style.display = 'none'
    document.getElementById('msg').style.display = 'none'
    start.style.display = 'inline'
    chSign.style.display = 'block'
    restart.style.display = 'none'
    document.getElementById('msgWinner').innerHTML = ""
    board.style.pointerEvents = 'auto'
    for (let i = 0; i < cell.length; i++) {
        cell[i].style.color = 'black'
        cell[i].innerHTML = ""
    }
}

function startButton() {
    for (var i = 0; i < sign.length; i++) {
        if (sign[i].checked) {
            userSign = sign[i].value;
            //console.log("userSign" + userSign)
        }
    }

    if (userSign == null || userSign == undefined || userSign == "") {
        document.getElementById('msg').innerHTML = "Please select character"
        document.getElementById('msg').style.color = "red"
        // console.log("Please first select sign")
    } else {
        board.style.display = 'grid'
        document.getElementById('msg').style.display = 'none'
        start.style.display = 'none'
        chSign.style.display = 'none'
        restart.style.display = 'inline'
    }
}

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function () {

        if (cell[i].innerHTML == "") {
            cell[i].innerHTML = userSign;

            if (userSign == 'X') {
                userSign = 'O'
            } else {
                userSign = 'X'
            }

            if (cell[0].innerHTML == cell[1].innerHTML && cell[1].innerHTML == cell[2].innerHTML &&
                cell[0].innerHTML.trim() != "" && cell[1].innerHTML.trim() != "" && cell[2].innerHTML.trim() != "") {
                winner(0, 1, 2);
            } else if (cell[3].innerHTML == cell[4].innerHTML && cell[4].innerHTML == cell[5].innerHTML &&
                cell[3].innerHTML.trim() != "" && cell[4].innerHTML.trim() != "" && cell[5].innerHTML.trim() != "") {
                winner(3, 4, 5);
            } else if (cell[6].innerHTML == cell[7].innerHTML && cell[7].innerHTML == cell[8].innerHTML &&
                cell[6].innerHTML.trim() != "" && cell[7].innerHTML.trim() != "" && cell[8].innerHTML.trim() != "") {
                winner(6, 7, 8);
            } else if (cell[0].innerHTML == cell[3].innerHTML && cell[3].innerHTML == cell[6].innerHTM &&
                cell[0].innerHTML.trim() != "" && cell[3].innerHTML.trim() != "" && cell[6].innerHTML.trim() != "") {
                winner(0, 3, 6);
            } else if (cell[1].innerHTML == cell[4].innerHTML && cell[4].innerHTML == cell[7].innerHTML &&
                cell[1].innerHTML.trim() != "" && cell[4].innerHTML.trim() != "" && cell[7].innerHTML.trim() != "") {
                winner(1, 4, 7);
            } else if (cell[2].innerHTML == cell[5].innerHTML && cell[5].innerHTML == cell[8].innerHTML &&
                cell[2].innerHTML.trim() != "" && cell[5].innerHTML.trim() != "" && cell[8].innerHTML.trim() != "") {
                winner(2, 5, 8);
            } else if (cell[0].innerHTML == cell[4].innerHTML && cell[4].innerHTML == cell[8].innerHTML &&
                cell[0].innerHTML.trim() != "" && cell[4].innerHTML.trim() != "" && cell[8].innerHTML.trim() != "") {
                winner(0, 4, 8);
            } else if (cell[2].innerHTML == cell[4].innerHTML && cell[4].innerHTML == cell[6].innerHTML &&
                cell[2].innerHTML.trim() != "" && cell[4].innerHTML.trim() != "" && cell[6].innerHTML.trim() != "") {
                winner(2, 4, 6);
            }
        }
        if (win == false) {
            gameDraw()
        }
    })
}

function gameDraw() {
    win = false;
    if (cell[0].innerHTML.trim() != "" && cell[1].innerHTML.trim() != "" && cell[2].innerHTML.trim() != "" && cell[3].innerHTML.trim() != "" &&
        cell[4].innerHTML.trim() != "" && cell[5].innerHTML.trim() != "" && cell[6].innerHTML.trim() != "" && cell[7].innerHTML.trim() != "" &&
        cell[8].innerHTML.trim() != "") {
        document.getElementById('msgWinner').innerHTML = 'Game Draw'
        board.style.pointerEvents = 'none'
    }
}

function winner(a, b, c) {
    win = true
    cell[a].style.color = 'blue'
    cell[b].style.color = 'blue'
    cell[c].style.color = 'blue'
    if (userSign == 'X') {
        userSign = 'O'
    } else {
        userSign = 'X'
    }
    document.getElementById('msgWinner').innerHTML = userSign + ' is Winner'
    board.style.pointerEvents = 'none'
}