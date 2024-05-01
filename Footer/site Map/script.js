// script.js

document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('heading1');
    const content = document.getElementById('content1');

    heading.addEventListener('click', function() {
        content.classList.toggle('hidden'); // Toggle the 'hidden' class
    });
});
