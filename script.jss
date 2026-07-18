// Keep the active sidebar link in sync with the section the visitor selects.
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelector(".is-active")?.classList.remove("is-active");
        link.classList.add("is-active");
    });
});

// Update the footer year automatically.
document.querySelector("#current-year").textContent = new Date().getFullYear();
