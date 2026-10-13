// Initialize the count variable at 0
let count = 0;

// Function to handle increment
function increment() {
    count++;
    updateDisplay();
}

// Function to handle decrement
function decrement() {
    count--;
    updateDisplay();
}

// Function to handle reset
function reset() {
    count = 0;
    updateDisplay();
}

// Helper function to update the h1 tag text
function updateDisplay() {
    let refElem = document.getElementById("counterDisplay");
    refElem.innerText = count;
}