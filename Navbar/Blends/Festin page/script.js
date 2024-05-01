// script.js
document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        container.addEventListener('mouseover', function() {
            this.querySelector('.description').style.display = 'block';
        });

        container.addEventListener('mouseout', function() {
            this.querySelector('.description').style.display = 'none';
        });
    });
});
