var total = 0; // Variable to store the total
var countdown = 50; // Countdown variable for counting down from 50 to 0

// Function called when the button is clicked
function playGame() {
  var randomNumber = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
  
  if (total === 0) {
    document.getElementById("box1").innerHTML = "First box: " + randomNumber;
  } else if (total === 1) {
    document.getElementById("box2").innerHTML = "Second box: " + randomNumber;
  } else if (total === 2) {
    document.getElementById("box3").innerHTML = "Third box: " + randomNumber;
    calculateTotal(); // Call the function to calculate the total after placing the third number
    displayResult(); // Call the function to display the result
  }
  
  total++;
}

// Function to calculate the total
function calculateTotal() {
  var box1Value = parseInt(document.getElementById("box1").innerHTML.split(": ")[1]);
  var box2Value = parseInt(document.getElementById("box2").innerHTML.split(": ")[1]);
  var box3Value = parseInt(document.getElementById("box3").innerHTML.split(": ")[1]);
  
  total = box1Value + box2Value + box3Value;
}

// Function to display the result
function displayResult() {
  var result = document.getElementById("result");
  
  if (total % 2 === 0) {
    result.innerHTML = "<span class='flash'>You Win!</span>";
  } else {
    result.innerHTML = "You lose.";
  }
}

// Function to start the countdown
function startCountdown() {
  var countdownDisplay = document.getElementById("countdown");
  countdownDisplay.innerHTML = countdown; // Initial countdown display
  
  var countdownInterval = setInterval(function() {
    countdown--; // Decrease countdown by 1
    countdownDisplay.innerHTML = countdown; // Update countdown display
    
    if (countdown === 25) {
      countdownDisplay.style.color = "red"; // Change countdown color to red
      countdownDisplay.innerHTML += " - Warning!";
    }
    
    if (countdown === 0) {
      clearInterval(countdownInterval); // Stop the countdown when it reaches 0
      document.getElementById("gameButton").disabled = true; // Disable the game button
    }
  }, 1000); // Run the countdown every second
}

