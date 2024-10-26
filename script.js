// Smooth scroll and fade-in animation on scroll
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll and fade-in effect
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

    // Text content for typing effect
    const nameText = "Azmi Adan";
    const descriptionText = "Your Ghostwriter for Engaging, Insightful, and Mysterious Content";

    // Typing effect function
    function typeWriter(element, text, delay, callback) {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, delay);
    }

    // Get elements for typing effect
    const nameElement = document.getElementById("name");
    const descriptionElement = document.getElementById("description");

    // Start typing effect with delays
    setTimeout(() => {
        nameElement.classList.add("typing");
        typeWriter(nameElement, nameText, 150, () => {
            // Blink cursor effect after typing name
            const cursor = document.createElement("span");
            cursor.className = "cursor";
            cursor.textContent = "|";
            nameElement.appendChild(cursor);
            setInterval(() => {
                cursor.style.opacity = cursor.style.opacity === "1" ? "0" : "1";
            }, 500);
        });
    }, 500); // Delay before typing the name

    setTimeout(() => {
        typeWriter(descriptionElement, descriptionText, 100);
    }, 4000); // Delay before typing the description
});
