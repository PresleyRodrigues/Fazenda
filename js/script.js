document.addEventListener("DOMContentLoaded", function() {
    const shareButtons = document.querySelectorAll(".share-btn");

    shareButtons.forEach(button => {
        button.addEventListener("click", function() {
            const text = this.getAttribute("data-text");
            const url = this.getAttribute("data-url");
            const shareURL = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
            window.open(shareURL, "_blank");
        });
    });
});