// photo filenames
const photos = [
   /* {src: "photos/bellagio-view.jpeg", date: "2026/01/05" },*/
    {src: "photos/video-poker.jpeg", date: "2026/01/05" },
    {src: "photos/caesars-palace.jpeg", date: "2026/01/04" },
    {src: "photos/santa-barbara.jpeg", date: "2025/12/30" },
    {src: "photos/venice-beach.jpeg", date: "2025/12/28" },
    {src: "photos/art-market-cat.jpeg", date: "2025/12/24" },
    {src: "photos/mexico-city-coyoacan.jpeg", date: "2025/12/24" },
    {src: "photos/gingerbread.jpeg", date: "2025/12/17" },
    {src: "photos/pismo-beach.jpeg", date: "2025/11/29" },
    { src: "photos/veronica-and-i.jpeg", date: "2025/11/16" },
    { src: "photos/neighbors-car.jpeg", date: "2025/11/08" },
    {src: "photos/orange-peels.jpeg", date: "2025/10/11" },
    { src: "photos/simba-at-beach.jpeg", date: "2025/06/20"},
    {src: "photos/park-with-friends.jpeg", date: "2025/02/28" },
    {src: "photos/montara.jpeg", date: "2024/06/14" },
    { src: "photos/grandCanyonJul092017.jpg", date: "2017/07/09" },
    { src: "photos/02.jpg", date: "2017/07/13" },
    { src: "photos/me-with-camera.jpeg", date: "2010/12/08" },

];

// preload so image flip is instant
function preloadImages() {
    photos.forEach((photo) => {
        const img = new Image();
        img.src = photo.src;
    });
}
preloadImages();


let index = 0;
const dateText = document.getElementById("dateText");
const screenPhoto = document.getElementById("screenPhoto");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function render() {
    screenPhoto.src = photos[index].src;
    dateText.textContent = photos[index].date;
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
})


// function to hide the instruction when user interacts
function clearInstruction() {
    const text = document.getElementById('instruction-text');
    if (text) {
        text.classList.add('fade-out');
        // remove after amount of time for fade out
        setTimeout(() => text.remove(), 600);
    }
}

// update existing functions to call clearInstruction()
function next() {
    index = (index + 1) % photos.length;
    render();
    clearInstruction(); 
}

function prev() {
    index = (index - 1 + photos.length) % photos.length;
    render();
    clearInstruction();
}

// also clear it if they use keyboard arrows
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        clearInstruction();
    }
});

// start
render();
