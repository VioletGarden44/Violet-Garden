const scene = document.querySelector(".scene");


const SCENE_WIDTH = 2752;
const SCENE_HEIGHT = 1536;


function scaleScene(){

    const scaleX = window.innerWidth / SCENE_WIDTH;

    const scaleY = window.innerHeight / SCENE_HEIGHT;


    const scale = Math.min(scaleX, scaleY);


    scene.style.transform =
    `translate(-50%, -50%) scale(${scale})`;

}


window.addEventListener("resize", scaleScene);


scaleScene();


console.log("Melody Game Loaded");

document
.getElementById("returnGarden")
.onclick=()=>{

window.location="../../index.html?scene=6";

}

document
.getElementById("startGame")
.onclick=()=>{

alert("Tutaj za chwilę uruchomimy grę :)");

}

/*kod do nutek*/

const startButton = document.getElementById("startGame");
const velvetIntro = document.getElementById("velvet");
const velvetPlaying = document.getElementById("velvet-playing");
const dialog = document.getElementById("dialog");
const melodyDialog = document.getElementById("melody-dialog");
const musicNotesContainer = document.getElementById("music-notes");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

let musicNotes = [];
let score = 0;

let gameTime = 60;
let gameActive = false;
let noteSpawnSpeed = 4000;
let gameStartTime;



const notesTypes = [

    {
        image:"assets/notes/red.png",
        hitImage:"assets/notes/red-hit.png",
        points:1,
        chance:40
    },


    {
        image:"assets/notes/pink.png",
        hitImage:"assets/notes/pink-hit.png",
        points:3,
        chance:25
    },


    {
        image:"assets/notes/purple.png",
        hitImage:"assets/notes/purple-hit.png",
        points:5,
        chance:15
    },


    {
        image:"assets/notes/gold.png",
        hitImage:"assets/notes/gold-hit.png",
        points:10,
        chance:5
    },


    {
        image:"assets/notes/white.png",
        hitImage:"assets/notes/white-hit.png",
        points:-1,
        chance:10
    },


    {
        image:"assets/notes/black.png",
        hitImage:"assets/notes/black-hit.png",
        points:-3,
        chance:5
    }

];

function getRandomNote(){

    const random =
    Math.random()*100;


    let total = 0;


    for(let note of notesTypes){


        total += note.chance;


        if(random <= total){

            return note;

        }
    }
}



function createMusicNotes(){


    const note = document.createElement("img");

    note.className = "music-note";


    const randomType = getRandomNote();


    note.src = randomType.image;

    note.dataset.points = randomType.points;

    note.dataset.hitImage = randomType.hitImage;


    musicNotesContainer.appendChild(note);

    musicNotes.push(note);


    playMusicNote(note);



    note.addEventListener("click",()=>{

        if(!gameActive) return;

        if(note.dataset.clicked) return;

        note.dataset.clicked = "true";

        note.style.pointerEvents = "none";


        score += Number(note.dataset.points);

        scoreDisplay.innerHTML =
        "Wynik: " + score;


        note.src = note.dataset.hitImage;


        setTimeout(()=>{

            note.remove();

            musicNotes =
            musicNotes.filter(n=>n!==note);

        },800);


    });


}





startButton.onclick = ()=>{


    velvetIntro.style.display = "none";

    dialog.style.display = "none";

    velvetPlaying.style.display = "block";

    melodyDialog.style.display = "block";

    gameActive = true;

    gameStartTime = Date.now();
    startMusicGame();


    startPettingAnimation();


};





function playMusicNote(note){


    const startX =
    800 + Math.random() * 480;

    const startY =
    650 + Math.random() * 120;


    note.style.left =
    startX + "px";

    note.style.bottom =
    startY + "px";


    const wind1 =
(Math.random()*300)-150;


const wind2 =
(Math.random()*500)-250;


const wind3 =
(Math.random()*300)-150;


const wind4 =
(Math.random()*600)-300;


const wind5 =
(Math.random()*700)-350;


    note.style.setProperty(
    "--wind1",
    wind1 + "px"
    );


    note.style.setProperty(
    "--wind2",
    wind2 + "px"
    );


    note.style.setProperty(
    "--wind3",
    wind3 + "px"
    );

    note.style.setProperty("--wind4", wind4 + "px");
    note.style.setProperty("--wind5", wind5 + "px");


    const noteSpeed =
4 + Math.random() * 4;

    setTimeout(()=>{

    note.style.animation =
    `noteFloat ${noteSpeed}s cubic-bezier(.42,0,.58,1) forwards`;

},50);

        }





function startMusicGame(){


    gameStartTime = Date.now();


    let timeLeft = 60;

    timerDisplay.innerHTML = timeLeft;

    const timer = setInterval(()=>{


        timeLeft--;

        timerDisplay.innerHTML = timeLeft;

        if(timeLeft <= 0){


            clearInterval(timer);

            gameActive = false;
            endGame();


        }

    },1000);
    spawnNextNote();

}

function spawnNextNote(){
    if(!gameActive) return;
    createMusicNotes();

    const elapsed =
    (Date.now() - gameStartTime) / 1000;
    let spawnTime =
    3000 - (elapsed * 35);

    if(spawnTime < 1000){
        spawnTime = 1000;

    }

    setTimeout(()=>{
        spawnNextNote();
    },spawnTime);
}

function endGame(){
    alert(
        "Koniec melodii!\n\nTwój wynik: " + score
    );
}

/*glaskanie liska*/
function startPettingAnimation(){
    let frame = 1;

    setInterval(()=>{

        if(frame === 1){
            velvetPlaying.src =
            "assets/velvet-playing-2.png";
            frame = 2;

        }else{
            velvetPlaying.src =
            "assets/velvet-playing-1.png";

            frame = 1;
        }
    },500);


    setInterval(()=>{

    playMusicNote();

},4000);

}

