// script.js
document.querySelector('.toggle-heading').addEventListener('click', function() {
    const content = this.nextElementSibling;
    const arrow = this.querySelector('.arrow');
    if (content.style.display === "none") {
        content.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    } else {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    }
});
