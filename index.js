// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor(event) {
  // Implement the function to change background color
  document.body.style.backgroundColor="black";
  document.body.style.color="white";
}

const changeColorButton=document.querySelector("#changeColorButton");
changeColorButton.addEventListener("click",changeBackgroundColor)

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  document.body.style.backgroundColor="white";
  document.body.style.color="black";
}

const resetColorButton=document.querySelector("#resetColorButton");
resetColorButton.addEventListener("click",resetBackgroundColor);

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const paragraph=document.createElement("p");
  paragraph.textContent=`you have pressed:${event.key}`;
  document.body.appendChild(paragraph);
}
const keypressDisplay=document.querySelector("#keyPressDisplay");
keypressDisplay.addEventListener("keydown",displayKeyPress)


// Process Text Input

// Function to display user input in real-time
function displayUserInput(event) {
  // Implement the function to display user input
  const paragraph=document.createElement("p");
  paragraph.textContent=event.target.value;
  document.body.appendChild(paragraph)
}
const textInput=document.querySelector("#textInput");
textInput.addEventListener("input",displayUserInput);

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}