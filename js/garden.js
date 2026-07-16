const scenes = document.querySelectorAll(".scene");

const notebookArea = document.querySelector(".open-notebook-area");

const SCENE_WIDTH = 2752;
const SCENE_HEIGHT = 1536;

const NOTEBOOK_WIDTH = 1000;
const NOTEBOOK_HEIGHT = 710;

function scaleScene() {

    const scaleX = window.innerWidth / SCENE_WIDTH;
    const scaleY = window.innerHeight / SCENE_HEIGHT;

    const scale = Math.min(scaleX, scaleY);


    scenes.forEach(scene => {

        scene.style.transform =
            `translate(-50%, -50%) scale(${scale})`;

    });
    

}


window.addEventListener("resize", scaleScene);

scaleScene();
scaleNotebook();

function scaleNotebook() {

    const notebook = document.querySelector(".open-notebook-area");

    if (!notebook) return;


    const scaleX = window.innerWidth / NOTEBOOK_WIDTH;
    const scaleY = window.innerHeight / NOTEBOOK_HEIGHT;


    const scale = Math.min(scaleX, scaleY);


    notebook.style.transform =
        `scale(${scale})`;

}

/* velvet scena 1 */
const velvet = document.getElementById("velvet");

const velvetDialog = document.getElementById("velvet-dialog");

let velvetHover = false;

velvet.addEventListener("mouseenter", () => {
    velvetHover = true;
    velvet.src = "assets/images/characters/velvet-hover.png";
    velvetDialog.style.display = "block";
});

velvet.addEventListener("mouseleave", () => {
    velvetHover = false;
    velvet.src = "assets/images/characters/velvet.png";
    velvetDialog.style.display = "none";
});

function velvetBlinkAnimation() {

    if (!velvetHover) {
        velvet.src = "assets/images/characters/velvet-blink.png";

        const blinkTime = Math.random() * 100 + 150;

        setTimeout(() => {

            if (!velvetHover) {
                velvet.src = "assets/images/characters/velvet.png";
            }
        }, blinkTime);
    }

    const nextBlink = Math.random() * 4000 + 3000;

    setTimeout(velvetBlinkAnimation, nextBlink);
}

velvetBlinkAnimation();

/* velvet scena 2 */
const velvet2 = document.getElementById("velvet-scene2");

const velvetDialog2 = document.getElementById("velvet-dialog-2");

let velvet2Hover = false;

velvet2.addEventListener("mouseenter", () => {
    velvet2Hover = true;
    velvet2.src = "assets/images/characters/velvet-scene2-hover.png";
    velvetDialog2.style.display = "block";
});

velvet2.addEventListener("mouseleave", () => {
    velvet2Hover = false;
    velvet2.src = "assets/images/characters/velvet-scene2.png";
    velvetDialog2.style.display = "none";
});

function velvet2BlinkAnimation() {

    if (!velvet2Hover) {
        velvet2.src = "assets/images/characters/velvet-scene2-blink.png";

        const blinkTime = Math.random() * 100 + 150;

        setTimeout(() => {

            if (!velvet2Hover) {
                velvet2.src = "assets/images/characters/velvet-scene2.png";
            }
        }, blinkTime);
    }

    const nextBlink = Math.random() * 5000 + 4000;

    setTimeout(velvet2BlinkAnimation, nextBlink);
}

velvet2BlinkAnimation();


/* velvet scena 3 */
const velvet3 = document.getElementById("velvet-scene3");

const velvetDialog3 = document.getElementById("velvet-dialog-3");

let velvet3Hover = false;

velvet3.addEventListener("mouseenter", () => {
    velvet3Hover = true;
    velvet3.src = "assets/images/characters/velvet-scene3-hover.png";
    velvetDialog3.style.display = "block";
});


velvet3.addEventListener("mouseleave", () => {
    velvet3Hover = false;
    velvet3.src = "assets/images/characters/velvet-scene3.png";
    velvetDialog3.style.display = "none";
});

function velvet3BlinkAnimation() {

    if (!velvet3Hover) {
        velvet3.src = "assets/images/characters/velvet-scene3-blink.png";

        const blinkTime = Math.random() * 100 + 150;

        setTimeout(() => {

            if (!velvet3Hover) {
                velvet3.src = "assets/images/characters/velvet-scene3.png";
            }
        }, blinkTime);
    }

    const nextBlink = Math.random() * 5000 + 4000;

    setTimeout(velvet3BlinkAnimation, nextBlink);
}


velvet3BlinkAnimation();


/* lisek scena 1 */
const fox = document.getElementById("garden-fox");

const foxNormal = "assets/images/characters/garden-fox.png";
const foxBlink = "assets/images/characters/garden-fox-blink.png";

function foxBlinkAnimation() {

    fox.src = foxBlink;

    const blinkTime = Math.random() * 100 + 150;

    setTimeout(() => {
        fox.src = foxNormal;
    }, blinkTime);

    const nextBlink = Math.random() * 5000 + 4000;

    setTimeout(foxBlinkAnimation, nextBlink);
}

foxBlinkAnimation();

/*wizi scena 5*/
const wizi = document.getElementById("wizi");

const wiziDialog = document.getElementById("wizi-dialog");

wizi.addEventListener("mouseenter", () => {
    wiziHover = true;
    wizi.src = "assets/images/characters/wizi-hover.png";
    wiziDialog.style.display = "block";
    velvetScene5.src = "assets/images/characters/velvet-scene5-reaction.png";
    velvetScene5Dialog.style.display = "block";
    velvetScene5Dialog.innerHTML = "Heeeeej...";
});

wizi.addEventListener("mouseleave", () => {
    wiziHover = false;
    wizi.src = "assets/images/characters/wizi.png";
    wiziDialog.style.display = "none";
    velvetScene5.src = "assets/images/characters/velvet-scene5.png";
    velvetScene5Dialog.style.display = "none";
    velvetScene5Dialog.innerHTML = "To jest Wizi mój...<br>Partner... przy tworzeniu strony...";
});

let wiziHover = false;

function blinkWizi() {

    if (!wiziHover) {

        wizi.src = "assets/images/characters/wizi-blink.png";

        setTimeout(() => {

            if (!wiziHover) {
                wizi.src = "assets/images/characters/wizi.png";
            }
        }, 120);
    }

    const nextBlink = 2500 + Math.random() * 4500;

    setTimeout(blinkWizi, nextBlink);
}

blinkWizi();


/* velvet scena 5*/
const velvetScene5 = document.getElementById("velvet-scene5");

const velvetScene5Dialog = document.getElementById("velvet-dialog-5");


velvetScene5.addEventListener("mouseenter", () => {
    velvetScene5Hover = true;
    velvetScene5.src = "assets/images/characters/velvet-scene5-hover.png";
    velvetScene5Dialog.style.display = "block";

});


velvetScene5.addEventListener("mouseleave", () => {
    velvetScene5Hover = false;
    velvetScene5.src = "assets/images/characters/velvet-scene5.png";
    velvetScene5Dialog.style.display = "none";

});

let velvetScene5Hover = false;

function blinkVelvetScene5() {

    if (!velvetScene5Hover && !wiziHover) {
        velvetScene5.src = "assets/images/characters/velvet-scene5-blink.png";

        setTimeout(() => {
            if (!velvetScene5Hover && !wiziHover) {
                velvetScene5.src = "assets/images/characters/velvet-scene5.png";
            }
        }, 120);
    }

    const nextBlink = 2500 + Math.random() * 4500;

    setTimeout(blinkVelvetScene5, nextBlink);
}

blinkVelvetScene5();

/*velvet scena 4*/
const velvetScene4 = document.getElementById("velvet-scene4");

const velvetScene4Dialog = document.getElementById("velvet-dialog-4");

velvetScene4.addEventListener("mouseenter", () => {
    velvetScene4Hover = true;
    velvetScene4.src = "assets/images/characters/velvet-scene4-hover.png";
    velvetScene4Dialog.style.display = "block";
});


velvetScene4.addEventListener("mouseleave", () => {
    velvetScene4Hover = false;
    velvetScene4.src = "assets/images/characters/velvet-scene4.png";
    velvetScene4Dialog.style.display = "none";
});

let velvetScene4Hover = false;

function blinkVelvetScene4() {
    if (!velvetScene4Hover) {
        velvetScene4.src = "assets/images/characters/velvet-scene4-blink.png";

        setTimeout(() => {
            if (!velvetScene4Hover) {
                velvetScene4.src = "assets/images/characters/velvet-scene4.png";
            }
        }, 120);
    }
    const nextBlink = 2500 + Math.random() * 4500;

    setTimeout(blinkVelvetScene4, nextBlink);
}
blinkVelvetScene4();

/* lisek scena 2 */
const foxScene2 = document.getElementById("scene2-fox");

function showFoxScene2() {

    if (!foxScene2) return;
    foxScene2.classList.add("show");
    setTimeout(blinkFoxScene2, 800);
    setTimeout(blinkFoxScene2, 1700);
    setTimeout(() => {
        foxScene2.classList.remove("show");
    }, 2300);
}

function blinkFoxScene2() {

    if (!foxScene2.classList.contains("show")) return;

    foxScene2.src = "assets/images/characters/scene2-fox-blink.png";

    setTimeout(() => {
        foxScene2.src = "assets/images/characters/scene2-fox.png";
    }, 120);
}


// pierwsze pojawienie po wejściu na scenę
let foxScene2Timer;
let foxScene2StartTimer;

function startFoxScene2() {

    clearInterval(foxScene2Timer);
    clearTimeout(foxScene2StartTimer);

    foxScene2StartTimer = setTimeout(() => {

        showFoxScene2();

        foxScene2Timer = setInterval(() => {

            showFoxScene2();

        }, 12000);

    }, 2000);

}

/*glaskanie liska*/
const gardenFox = document.getElementById("garden-fox");
const foxPetting = document.getElementById("fox-petting");

let pettingAnimation;


gardenFox.addEventListener("click", () => {
    // chowamy normalne postacie
    gardenFox.style.display = "none";
    velvet.style.display = "none";

    // pokazujemy scenę głaskania
    foxPetting.style.display = "block";

    let frame = 1;

    pettingAnimation = setInterval(() => {

        if (frame === 1) {
            foxPetting.src = "assets/images/characters/fox-petting-2.png";
            frame = 2;
        } else {
            foxPetting.src = "assets/images/characters/fox-petting-1.png";
            frame = 1;
        }
    }, 300);

    setTimeout(() => {

        clearInterval(pettingAnimation);
        foxPetting.style.display = "none";

        gardenFox.style.display = "block";
        velvet.style.display = "block";
    }, 3000);

});


/* velvet scena 6 */

const velvetScene6 = document.getElementById("velvet-scene6");
const velvetScene6Dialog = document.getElementById("velvet-dialog-6");

const scene6Yes = document.getElementById("scene6-yes");
const scene6No = document.getElementById("scene6-no");
const scene6Area = document.getElementById("scene6-area");

let scene6Hover = false;
let scene6Active = false;

function blinkScene6() {

    if (!scene6Hover) {

        velvetScene6.src =
        "assets/images/characters/velvet-scene6-blink.png";

        setTimeout(() => {

            if (!scene6Hover) {

                velvetScene6.src =
                "assets/images/characters/velvet-scene6.png";

            }

        },120);

    }

    const nextBlink = 2500 + Math.random() * 4500;

    setTimeout(blinkScene6,nextBlink);

}

blinkScene6();

scene6Area.addEventListener("mouseenter", () => {

    scene6Hover = true;
    scene6Active = true;

    velvetScene6.src =
    "assets/images/characters/velvet-scene6-hover.png";

    velvetScene6Dialog.style.display = "block";

    scene6Yes.style.display = "block";
    scene6No.style.display = "block";

});


scene6Area.addEventListener("mouseleave", () => {

    scene6Hover = false;
    scene6Active = false;

    velvetScene6.src =
    "assets/images/characters/velvet-scene6.png";

    velvetScene6Dialog.style.display = "none";

    scene6Yes.style.display = "none";
    scene6No.style.display = "none";

});

document.addEventListener("mousemove", () => {

    if (!scene6Active) {

        scene6Yes.style.display = "none";
        scene6No.style.display = "none";

        velvetScene6Dialog.style.display = "none";

        velvetScene6.src =
        "assets/images/characters/velvet-scene6.png";

    }

});

scene6No.addEventListener("click", () => {

    scene6Yes.style.display = "none";
    scene6No.style.display = "none";

    velvetScene6Dialog.style.display = "none";

    velvetScene6.src =
    "assets/images/characters/velvet-scene6.png";

});

scene6Yes.addEventListener("click", () => {

    window.location.href = "games/melody/index.html";

});


