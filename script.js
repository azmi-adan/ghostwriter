// Smooth scroll and fade-in animation on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function () {
      sections.forEach((section) => {
        const position = section.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          section.style.opacity = 1;
          section.style.transform = "translateY(0)";
        } else {
          section.style.opacity = 0;
          section.style.transform = "translateY(20px)";
        }
      });
    });
  });
  