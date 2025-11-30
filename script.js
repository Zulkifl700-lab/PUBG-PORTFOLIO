// --- 1. PAGE NAVIGATION ---
function switchPage(pageId) {
    // Remove active class from current page
    document.querySelector('.page.active').classList.remove('active');
    
    // Add active class to new page after small delay
    setTimeout(() => {
        document.getElementById(pageId).classList.add('active');
    }, 300);
}

// --- 2. 3D TILT EFFECT (PC ONLY) ---
const card = document.getElementById('card');
const container = document.querySelector('.container-3d');

if (window.innerWidth > 768) {
    container.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    container.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
}

// --- 3. GALLERY DATA & MODAL LOGIC ---

// 🛑 REPLACE URLS BELOW WITH YOUR OWN IMAGE PATHS IF YOU HAVE THEM 🛑
const data = {
    maps: [
        { name: "ERANGEL", img: "images/map-erangel.jpg" },
        { name: "MIRAMAR", img: "images/map-miramar.jpg" },
        { name: "SANHOK", img: "images/map-sanhok.jpg" },
        { name: "VIKENDI", img: "images/map-vikendi.jpg" }
    ],
    arsenal: [
        { name: "M416", img: "images/m416.png" },
        { name: "AKM", img: "images/akm.png" },
        { name: "AWM", img: "images/awm.png" },
        { name: "KAR98K", img: "images/kar98.png" }
    ],
    vehicles: [
        { name: "UAZ", img: "images/uaz.webp" },
        { name: "DACIA", img: "images/dacia.webp" },
        { name: "BUGGY", img: "images/buggy.webp" }
    ]
};

function openGallery(category) {
    const modal = document.getElementById('gallery-modal');
    const grid = document.getElementById('gallery-grid');
    const title = document.getElementById('modal-title');
    
    grid.innerHTML = ''; // Clear old content
    title.innerText = category.toUpperCase();

    data[category].forEach(item => {
        const div = document.createElement('div');
        div.className = 'g-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h4>${item.name}</h4>
        `;
        grid.appendChild(div);
    });

    modal.classList.add('active');
}

function closeGallery() {
    document.getElementById('gallery-modal').classList.remove('active');
}

// Close if clicking outside box
document.getElementById('gallery-modal').addEventListener('click', (e) => {
    if(e.target.id === 'gallery-modal') closeGallery();
});

// --- 4. COPY UID FUNCTION ---
function copyUID() {
    const txt = document.getElementById('uid-text').innerText;
    navigator.clipboard.writeText(txt);
    
    const btn = document.querySelector('.copy-btn');
    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
    btn.style.color = '#F2A900';
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
        btn.style.color = 'white';
    }, 1500);
}

// --- 5. PARTICLES GENERATOR ---
const particleContainer = document.getElementById('bg-particles');
for(let i=0; i<40; i++){
    let p = document.createElement('div');
    p.style.position = 'absolute';
    p.style.background = '#F2A900';
    p.style.width = Math.random() * 3 + 'px';
    p.style.height = p.style.width;
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = Math.random() * 100 + 'vh';
    p.style.opacity = Math.random() * 0.5;
    p.style.borderRadius = '50%';
    p.style.animation = `float ${Math.random() * 5 + 5}s infinite linear`;
    particleContainer.appendChild(p);
}

const styleSheet = document.createElement("style");
styleSheet.innerText = `@keyframes float { 0%{transform:translateY(0); opacity:0;} 50%{opacity:1;} 100%{transform:translateY(-100vh); opacity:0;} }`;
document.head.appendChild(styleSheet);