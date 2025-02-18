document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");

    envelope.addEventListener("click", function () {
        envelope.classList.add("open");
        setTimeout(() => {
            letter.style.opacity = "1";
            letter.style.transform = "translateX(-50%) translateY(0)";
        }, 800); 
    });
});
