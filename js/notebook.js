const notebook = document.getElementById("notebook");

let currentSongsPage = 1;

const songsPerPage = 10;

const gardenScenes = document.querySelectorAll(".scene");

const notebookPage = document.querySelector(".notebook-page");


notebook.addEventListener("click", () => {

    gardenScenes.forEach(scene => {

        scene.style.display = "none";

    });

    notebookPage.style.display = "flex";

    localStorage.setItem("notebookOpen", "true");

    openPage("home");

});



const returnLeaf = document.getElementById("return-leaf");


returnLeaf.addEventListener("mouseenter", () => {

    returnLeaf.src = "assets/ui/leaf-return-glow.png";

});


returnLeaf.addEventListener("mouseleave", () => {

    returnLeaf.src = "assets/ui/leaf-return.png";

});


returnLeaf.addEventListener("click", () => {

    localStorage.removeItem("notebookOpen");

    localStorage.removeItem("currentPage");

    localStorage.removeItem("songsPage");

    notebookPage.style.display = "none";

    
    const currentScene = localStorage.getItem("currentScene") || "1";

    document
        .querySelector(`.scene-${currentScene}`)
        .style.display = "block";

});



async function openPage(pageName) {

    const container = document.getElementById("notebook-container");

    try {

            let path = `pages/${pageName}.html`;


            if (pageName === "songs") {

                path = "pages/songs/songs.html";

            }

            if (pageName === "track") {

                path = "pages/tracks/track.html";

            }


            const response = await fetch(path);


            if (!response.ok) {
                throw new Error("Nie znaleziono strony.");
            }


            container.innerHTML = await response.text();

            if (pageName === "track") {
                returnLeaf.style.display = "none";
            }
            else {
                returnLeaf.style.display = "block";
            }


            if (pageName === "songs") {

                localStorage.setItem("currentPage", "songs");

                loadSongs();

            }

            if (pageName === "track") {

                localStorage.setItem("currentPage", "track");

                loadTrack();

            }

                        if (pageName === "home") {

                localStorage.setItem("currentPage", "home");

            }
            

        }
    
    

    catch (error) {

        console.error(error);

        container.innerHTML = `
            <div class="page-error">
                Nie udało się otworzyć tej strony.
            </div>
        `;

    }

}

const notebookNavigationType = performance.getEntriesByType("navigation")[0].type;


if (notebookNavigationType === "navigate") {
    sessionStorage.removeItem("visited");
    localStorage.removeItem("notebookOpen");
    localStorage.removeItem("currentPage");
    localStorage.removeItem("songsPage");
}


const savedPage = localStorage.getItem("currentPage");

const notebookOpen = localStorage.getItem("notebookOpen");


if (notebookOpen === "true" && savedPage)  {

    gardenScenes.forEach(scene => {
        scene.style.display = "none";
    });

    notebookPage.style.display = "flex";

    openPage(savedPage);


} else {
    const currentScene = localStorage.getItem("currentScene") || "1";

    document
        .querySelector(`.scene-${currentScene}`)
        .style.display = "block";

    notebookPage.style.display = "none";
}



async function loadSongs() {
    const savedSongsPage = localStorage.getItem("songsPage");

    if (savedSongsPage) {
        currentSongsPage = Number(savedSongsPage);
    }

    const response = await fetch("data/songs.json");

    const songs = await response.json();

    const totalPages = Math.ceil(songs.length / songsPerPage);

    const list = document.querySelector(".songs-list");

    if (!list) return;

    const nextLeaf = document.getElementById("songs-next-leaf");

    const prevLeaf = document.getElementById("songs-prev-leaf");


    if (nextLeaf) {

        if (currentSongsPage >= totalPages) {

            nextLeaf.style.display = "none";

        } else {

            nextLeaf.style.display = "block";

        }

    }


    list.innerHTML = "";


    const start = (currentSongsPage - 1) * songsPerPage;

    const end = start + songsPerPage;

    const songsToShow = songs.slice(start, end);


    songsToShow.forEach(song => {

        const item = document.createElement("div");

        item.className = "song-item";

        item.textContent = song.title;

        item.addEventListener("click", () => {

            localStorage.setItem("currentTrack", song.id);

            openPage("track");

        });

        list.appendChild(item);

    });

    setSongsPageImage();

}

function setSongsPageImage() {

    const image = document.getElementById("songs-page-image");

    if (!image) return;


    image.src = `assets/images/songs/songs-page-${currentSongsPage}.png`;

}


document.addEventListener("click", (event) => {

    if (event.target.id === "track-return-leaf") {
        openPage("songs");
    }

});


document.addEventListener("mouseover", (event) => {

    if (event.target.id === "track-return-leaf") {

        event.target.src = "assets/ui/leaf-prev.png";

    }

});


document.addEventListener("mouseout", (event) => {

    if (event.target.id === "track-return-leaf") {

        event.target.src = "assets/ui/leaf-return.png";

    }

});


async function loadTrack() {

    const id = localStorage.getItem("currentTrack");

    const response = await fetch("data/songs.json");

    const songs = await response.json();


    const track = songs.find(song => song.id === id);


    if (!track) return;

    document.getElementById("track-title").textContent = track.title;

    document.getElementById("track-youtube").src = track.youtube;

    document.querySelector(".track-description").textContent = track.description;
    
    console.log(track);

}


document.addEventListener("mouseover", (event) => {

    if (event.target.id === "songs-prev-leaf") {

        event.target.src = "assets/ui/leaf-prev-glow.png";

    }

    if (event.target.id === "songs-next-leaf") {

        event.target.src = "assets/ui/leaf-next-glow.png";

    }

});



document.addEventListener("mouseover", (event) => {

    if (event.target.id === "songs-prev-leaf") {

        event.target.src = "assets/ui/leaf-prev.png";

    }

    if (event.target.id === "songs-next-leaf") {

        event.target.src = "assets/ui/leaf-next.png";

    }

});

document.addEventListener("mouseout", (event) => {

    if (event.target.id === "songs-prev-leaf") {

        event.target.src = "assets/ui/leaf-return.png";

    }

    if (event.target.id === "songs-next-leaf") {

        event.target.src = "assets/ui/leaf-return.png";

    }

});

document.addEventListener("click", (event) => {

    if (event.target.id !== "songs-prev-leaf") return;


    if (currentSongsPage === 1) {

        openPage("home");

    } else {

        currentSongsPage--;

        localStorage.setItem("songsPage", currentSongsPage);

        loadSongs();

        }

});

document.addEventListener("click", (event) => {

    if (event.target.id === "songs-next-leaf") {

    currentSongsPage++;

    localStorage.setItem("songsPage", currentSongsPage);

    loadSongs();

}

});

