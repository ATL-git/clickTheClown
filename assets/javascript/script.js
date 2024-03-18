let clown = document.querySelector("#clown")
let x = 0
let y = 0
let score = 0
let bestScore = 0
let timer = 0
let loop;
let chrno;
const fenetre = document.querySelector("#ecranFin")
const phraseFin = document.querySelector("#phraseFin")
const music = new Audio('./assets/son/sound.mp3');

function chronometre() {
    let timer = 2
    chrno = setInterval(() => {

        timer--
        document.querySelector("#tim").innerHTML = ` temps restants : ${timer} s`

        if (timer == 0) {
            bScore()
            clearInterval(loop)
            clearInterval(chrno)
            fenetre.classList.remove('hidden')
            phraseFin.innerHTML = `score  : ${score} <br> cliquer ici et choisissez votre niveau pour recommencer`
            
            
        }

    }, 1000);
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bScore() {

    if (score > bestScore) {
        bestScore = score
        document.querySelector("#bestScore").innerHTML = ` bestScore  : ${bestScore}`
    }

}

function scor() {
   
    if (document.querySelector("#tim").innerHTML == ` temps restants : 0 s`) {
        document.querySelector("#score").innerHTML = ` score  : ${score}`

    }else{
        music.play();
        score++
        document.querySelector("#score").innerHTML = ` score  : ${score}`
    }
}


function reiScore() {
    clearInterval(chrno)
    document.querySelector("#tim").innerHTML = ` temps restants : 50 s`

    score = 0
    document.querySelector("#score").innerHTML = ` score  : 0`
    clearInterval(loop)
}

function fenetr(){
    fenetre.classList.add('hidden')
 }


function level(value) {
    clearInterval(chrno)
    document.querySelector("#tim").innerHTML = ` temps restants : 0 s`
    clearInterval(loop)
    chronometre()
    document.querySelector("#score").innerHTML = ` score  : 0`
    score = 0
    loop = setInterval(() => {

        x = random(20, 80)
        y = random(20, 80)
        clown.style.transition = `bottom ${value}ms ease, left ${value}ms ease`;
        clown.style.bottom = x + "%"
        clown.style.left = y + "%"

    }, value);

}

