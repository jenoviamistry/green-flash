// photo filenames
const photos = [
    "photos/01.jpg",
    "photos/02.jpg",
    "photos/grandCanyonJul092017.JPG",
];

let index = 0;

const screenPhoto = document.getElementById("screenPhoto");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function render() {
    screenPhoto.src = photos[index];
}

function next() {
    index = (index + 1) % photos.length;
    render();
}

function prev() {
    index = (index - 1 + photos.length) % photos.length;
    render();
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

// keyboard support optional
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
});

// start
render();
