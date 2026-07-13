// Highlight the sidebar link the visitor clicks.
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelector(".is-active")?.classList.remove("is-active");
        link.classList.add("is-active");
    });
});

// Keep the copyright year current.
document.querySelector("#current-year").textContent = new Date().getFullYear();
