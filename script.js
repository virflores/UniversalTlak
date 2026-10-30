// Menú móvil
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const abierto = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", abierto);
  menuBtn.textContent = abierto ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

// Carrusel de fondos del header
const slides = document.querySelectorAll(".hero-bg-slide");
let actual = 0;

if (slides.length > 1) {
  setInterval(() => {
    slides[actual].classList.remove("active");
    actual = (actual + 1) % slides.length;
    slides[actual].classList.add("active");
  }, 5000);
}

// Animación de aparición al hacer scroll
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("visible"));
}
