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
document.addEventListener('DOMContentLoaded', function() {
    displayImage('1955'); // Display the image of 1955 by default
});

function displayImage(year) {
    var imageContainer = document.getElementById('imageContainer');
    var img = document.createElement('img');
    img.src = 'yearimg.png'; // Use the same image for all years

    // Clear the image container and add the new image
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
}

