function calculateScore() {
    const answers = {
      q1: 'tortoise',
      q2: 'hare',
      q3: 'start',
      q4: 'nap',
      q5: 'tortoise'
    };
  
    let score = 0;
    let correctAnswers = "";
  
    // Check the selected answers and calculate the score
    for (let i = 1; i <= 5; i++) {
      const question = `q${i}`;
      const selectedOption = document.querySelector(`input[name=${question}]:checked`).value;
  
      if (selectedOption === answers[question]) {
        score++;
        correctAnswers += `Question ${i}: Correct<br>`;
      } else {
        correctAnswers += `Question ${i}: Incorrect<br>`;
      }
    }
  
    // Display the score and correct answers
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Score: ${score} out of 5`;
  
    const answersElement = document.getElementById("answers");
    answersElement.innerHTML = correctAnswers;
  }
  