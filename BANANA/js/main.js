window.addEventListener("load", () => {
  const btn = document.getElementById("startBtn");
  const mensajeBlanco = document.getElementById("mensajeBlanco");
  const music = document.getElementById("background-music");

  btn.addEventListener("click", () => {
    // Mostrar mensaje blanco
    mensajeBlanco.classList.remove("oculto");

    // Reproducir música
    music.play().catch((err) => {
      console.log("Error reproduciendo música:", err);
    });

    // Iniciar partículas
    startParticles();

    // Mostrar flores una por una
    startFlowers();
  });
});

// ----------------
// Partículas
// ----------------
function startParticles() {
  const particlesContainer = document.getElementById("particles");
  let spawnRate = 300;
  setInterval(() => {
    createParticle(particlesContainer);
  }, spawnRate);
}

function createParticle(container) {
  const particle = document.createElement("div");
  particle.className = "particle";

  const size = Math.random() * 4 + 2;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  particle.style.left = Math.random() * 100 + "vw";
  particle.style.top = "-10px";
  particle.style.animationDuration = (Math.random() * 2 + 3) + "s";

  container.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 5000);
}

// ----------------
// Flores
// ----------------
function startFlowers() {
  const flowers = document.getElementById("flowers");
  flowers.innerHTML = "";  // limpio antes

  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const flower = document.createElement("div");
      flower.className = "flower";

      // tallo
      const stem = document.createElement("div");
      stem.className = "stem";
      flower.appendChild(stem);

      // centro amarillo
      const center = document.createElement("div");
      center.className = "center";
      flower.appendChild(center);

      // pétalos blancos
      for (let j = 0; j < 8; j++) {
        const petal = document.createElement("div");
        petal.className = "petal";
        const angle = (j * 360) / 8;
        const rad = angle * (Math.PI / 180);
        const x = Math.cos(rad) * 35;
        const y = Math.sin(rad) * 35;
        petal.style.left = 25 + x + "px";
        petal.style.top = 5 + y + "px";
        flower.appendChild(petal);
      }

      flowers.appendChild(flower);
    }, i * 1000);
  }
}
