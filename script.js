const burgerBtn = document.getElementById('burgerBtn');
        const navMenu = document.getElementById('navMenu');

        burgerBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            burgerBtn.setAttribute('aria-expanded', isOpen);
            burgerBtn.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        navMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                burgerBtn.setAttribute('aria-expanded', 'false');
                burgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
        
        const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
  