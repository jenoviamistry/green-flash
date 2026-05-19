const photos = [
    { src: "photos/drakes-brunch.jpeg",      date: "2026/05/17"},
    { src: "photos/house.jpeg",              date: "2026/01/28" },
    { src: "photos/video-poker.jpeg",        date: "2026/01/05" },
    { src: "photos/caesars-palace.jpeg",     date: "2026/01/04" },
    { src: "photos/santa-barbara-edit.jpeg", date: "2025/12/30" },
    { src: "photos/venice-beach.jpeg",       date: "2025/12/28" },
    { src: "photos/art-market-cat.jpeg",     date: "2025/12/24" },
    { src: "photos/mexico-city-coyoacan.jpeg", date: "2025/12/24" },
    { src: "photos/gingerbread.jpeg",        date: "2025/12/17" },
    { src: "photos/pismo-beach.jpeg",        date: "2025/11/29" },
    { src: "photos/veronica-and-i.jpeg",     date: "2025/11/16" },
    { src: "photos/neighbors-car.jpeg",      date: "2025/11/08" },
    { src: "photos/pink-golgi.jpeg",         date: "2025/10/14" },
    { src: "photos/orange-peels.jpeg",       date: "2025/10/11" },
    { src: "photos/simba-at-beach.jpeg",     date: "2025/06/20" },
    { src: "photos/empty-house.jpeg",        date: "2025/06/09" },
    { src: "photos/zoo.jpeg",                date: "2025/06/06" },
    { src: "photos/neighbor.jpeg",           date: "2025/03/19" },
    { src: "photos/golgi-sleepy.jpeg",       date: "2025/03/15" },
    { src: "photos/park-with-friends.jpeg",  date: "2025/02/28" },
    { src: "photos/montara.jpeg",            date: "2024/06/14" },
    { src: "photos/grand-canyon-2.jpeg",     date: "2017/07/13" },
    { src: "photos/grand-canyon.jpeg",       date: "2017/07/09" },
    { src: "photos/me-with-camera.jpeg",     date: "2010/12/08" },
];

// preload so flipping is instant
photos.forEach(({ src }) => {
    const img = new Image();
    img.src = src;
});

let index = 0;
const dateText   = document.getElementById("dateText");
const screenPhoto = document.getElementById("screenPhoto");
const prevBtn    = document.getElementById("prevBtn");
const nextBtn    = document.getElementById("nextBtn");

function render() {
    screenPhoto.src = photos[index].src;
    dateText.textContent = photos[index].date;
}

function clearInstruction() {
    const el = document.getElementById("instruction-text");
    if (el) {
        el.classList.add("fade-out");
        setTimeout(() => el.remove(), 600);
    }
}

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

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

// keyboard nav
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { next(); }
    if (e.key === "ArrowLeft")  { prev(); }
});

// touch swipe for mobile
let touchStartX = 0;

window.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
}, { passive: true });

window.addEventListener("touchend", (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 40) {
        delta < 0 ? next() : prev();
        clearInstruction();
    }
});

render();