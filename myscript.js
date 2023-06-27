let animationId; // Variable to store the requestAnimationFrame ID

// Function to move the meme image around the page
function moveMeme() {
  const memeImg = document.querySelector('img');
  const maxX = window.innerWidth - memeImg.width;
  const maxY = window.innerHeight - memeImg.height;

  // Generate random coordinates within the page bounds
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Move the meme image to the random coordinates
  memeImg.style.left = `${randomX}px`;
  memeImg.style.top = `${randomY}px`;

  // Request the next animation frame to keep moving
  animationId = requestAnimationFrame(moveMeme);
}

// Function to enable the Start button and start moving the meme image
function enableStartButton() {
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  startBtn.disabled = true;
  stopBtn.disabled = false;
  moveMeme(); // Start moving the meme image
}

// Function to enable the Stop button and stop moving the meme image
function enableStopButton() {
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  startBtn.disabled = false;
  stopBtn.disabled = true;
  cancelAnimationFrame(animationId); // Stop the animation frame
}

// Attach event listeners to the buttons
document.getElementById('startBtn').addEventListener('click', enableStartButton);
document.getElementById('stopBtn').addEventListener('click', enableStopButton);
