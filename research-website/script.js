const questions = [
  {
    question: "What does MIL stand for?",
    answer: "Media and Information Literacy"
  },
  {
    question: "How many chromosomes are in human diploid cells?",
    answer: "46"
  },
  {
    question: "Ano ang pangunahing layunin ng PR2?",
    answer: "Research methodology and application"
  }
];

function startQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${index+1}. ${q.question}</p>
                     <input type="text" id="q${index}" placeholder="Your answer">`;
    container.appendChild(div);
  });
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit Answers";
  submitBtn.onclick = checkAnswers;
  container.appendChild(submitBtn);
}

function checkAnswers() {
  let score = 0;
  questions.forEach((q, index) => {
    const userAns = document.getElementById(`q${index}`).value.trim();
    if(userAns.toLowerCase() === q.answer.toLowerCase()) {
      score++;
    }
  });
  alert(`You scored ${score} out of ${questions.length}`);
}
