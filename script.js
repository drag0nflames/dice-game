// Function to generate a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Function to update the dice images and calculate scores
  function rollDices() {
    var dice1Value = rollDice();
    var dice2Value = rollDice();
  
    // Update dice images
    document.getElementById('dice1').src = 'dice' + dice1Value + '.png';
    document.getElementById('dice2').src = 'dice' + dice2Value + '.png';
  
    // Calculate score difference
    var scoreDifference = Math.abs(dice1Value - dice2Value);
  
    // Update player scores
    var player1Score = parseInt(document.getElementById('player1Score').textContent);
    var player2Score = parseInt(document.getElementById('player2Score').textContent);
    if (dice1Value > dice2Value) {
      player1Score += scoreDifference;
      player2Score -= scoreDifference;
    } else if (dice1Value < dice2Value) {
      player1Score -= scoreDifference;
      player2Score += scoreDifference;
    }
  
    // Ensure scores are not negative
    player1Score = Math.max(player1Score, 0);
    player2Score = Math.max(player2Score, 0);
  
    // Update HTML with new scores
    document.getElementById('player1Score').textContent = player1Score;
    document.getElementById('player2Score').textContent = player2Score;
  
    // Check if any player has reached a specific number (e.g., 10) and announce winner
    var winningScore = 10; // Change this to your desired winning score
    if (player1Score >= winningScore) {
      alert('Player 1 wins!');
    } else if (player2Score >= winningScore) {
      alert('Player 2 wins!');
    }
  }
  
  // Event listener for the roll button
  document.getElementById('rollButton').addEventListener('click', rollDices);
  