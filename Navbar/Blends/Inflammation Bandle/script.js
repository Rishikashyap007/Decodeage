
// Get the counter element and buttons
const countElement = document.getElementById("count");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;

// Update the count element with the current count value
function updateCount() {
  countElement.textContent = count;
}

// Event listener for the decrease button
decreaseBtn.addEventListener("click", function () {
  count--;
  updateCount();
});

// Event listener for the increase button
increaseBtn.addEventListener("click", function () {
  count++;
  updateCount();
});

// Initial update of the count element
updateCount();
