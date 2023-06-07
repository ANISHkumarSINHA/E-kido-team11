const questionCard = document.getElementById('question-card');
const nextButton = document.getElementById('next-btn');

nextButton.addEventListener('click', () => {
  questionCard.classList.add('previous');
  setTimeout(() => {
    questionCard.classList.remove('previous');
    questionCard.classList.add('current');
    updateQuestion(); // Call function to update the question and options
  }, 500);
});

function updateQuestion() {
  // Add code to update the question text and options for each question
}

// Call the updateQuestion() function initially to load the first question
updateQuestion();
