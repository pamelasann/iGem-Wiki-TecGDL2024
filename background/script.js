document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById("text");
    const cursor = document.querySelector(".input-cursor");
    const textContent = text.textContent;
    let index = 0;

    function typeText() {
        text.textContent = textContent.slice(0, index);
        index++;
        if (index <= textContent.length) {
            setTimeout(typeText, 50); // Adjust the typing speed here (milliseconds)
        } else {
            cursor.style.display = "none"; // Hide cursor when typing is finished
        }
    }

    // Start typing when the user scrolls down
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            typeText();
            window.removeEventListener("scroll", arguments.callee);
        }
    });
});