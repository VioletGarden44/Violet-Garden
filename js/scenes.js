const navigationType = performance.getEntriesByType("navigation")[0].type;

if (navigationType === "navigate") {

    localStorage.removeItem("currentScene");

    localStorage.removeItem("notebookOpen");

    localStorage.removeItem("currentPage");

}

function changeScene(sceneNumber) {

    sceneNumber = Number(sceneNumber);

    const scenes = document.querySelectorAll(".scene");

    scenes.forEach(scene => {

        scene.style.display = "none";

    });


    const activeScene = document.querySelector(`.scene-${sceneNumber}`);

    if (activeScene) {

        activeScene.style.display = "block";

    }

    localStorage.setItem("currentScene", sceneNumber);

    if (sceneNumber === 2) {
        startFoxScene2();
    }

}

const savedScene = localStorage.getItem("currentScene");


if (savedScene) {
    changeScene(savedScene);
} else {
    changeScene(1);
}


document.addEventListener("click", (event) => {
    if (event.target.id === "scene-next-leaf") {
        changeScene(2);
    }

});

document.addEventListener("click", (event) => {
    if (event.target.id === "scene-prev-leaf") {
        changeScene(1);
    }

});

document.addEventListener("click", (event) => {
    if (event.target.id === "scene-prev-leaf-2") {
        changeScene(2);
    }

});

document.addEventListener("click", (event) => {
    if (event.target.id === "scene-next-leaf-2") {
        changeScene(3);
    }

});


document.addEventListener("click", (event) => {
    if (event.target.id === "gazebo") {
        changeScene(3);
    }

});

document.addEventListener("click", (event) => {

    if (event.target.id === "scene4-prev-leaf") {
        changeScene(1);
    }

});

document.addEventListener("click", (event) => {

    if (event.target.id === "scene4-object") {
        changeScene(5);
    }

});

document.addEventListener("click", (event) => {

    if (event.target.id === "scene5-prev-leaf") {
        changeScene(4);
    }

});

/*przejscie z 5 do 4 sceny*/
document.addEventListener("click", (event) => {

    if (event.target.id === "scene5-return-object") {
        changeScene(4);
    }
});

/*przejscie z 5 do 4 sceny*/
document.addEventListener("click", (event) => {
    if (event.target.id === "scene4-return-object") {
        changeScene(1);
    }
});

/*przejscie z 3 do 2 sceny*/
document.addEventListener("click", (event) => {
    if (event.target.id === "scene3-next-object") {
        changeScene(2);
    }
});

/*przejscie z 2 do 1 sceny*/
document.addEventListener("click", (event) => {
    if (event.target.id === "scene2-return-object") {
        changeScene(1);
    }
});

/*przejscie z 1 do 2 sceny*/
document.addEventListener("click", (event) => {
    if (event.target.id === "scene1-next-object") {
        changeScene(2);
    }
});

/*przejscie z 1 do 4 sceny*/
document.addEventListener("click", (event) => {
    if (event.target.id === "scene1-2-next-object") {
        changeScene(4);
    }
});

/* przejście ze sceny 2 do sceny 6 - gra Velvet */
document.addEventListener("click", (event) => {

    if (event.target.id === "scene2-game-object") {
        changeScene(6);
    }

});

/*przejscie z 6 do 2 sceny*/
document.addEventListener("click", (event) => {

    if (event.target.id === "scene6-return-object") {
        changeScene(2);
    }
});

const params = new URLSearchParams(window.location.search);

const startScene = params.get("scene");


if(startScene === "6"){

    document.querySelectorAll(".scene")
    .forEach(scene=>{
        scene.style.display="none";
    });


    document.querySelector(".scene-6")
    .style.display="block";

}
