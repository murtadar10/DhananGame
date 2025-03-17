let questions = [
    { question: "ما ناتج 5 × 5؟", answer: "25" },
    { question: "ما الجذر التربيعي لـ 64؟", answer: "8" },
    { question: "كم يساوي 7 + 3 × 2؟", answer: "13" },
    { question: "ما هو العدد الأولي التالي بعد 7؟", answer: "11" },
    { question: "ما حاصل قسمة 81 ÷ 9؟", answer: "9" },
    { question: "ماهو مربع العدد 11؟", answer: "121" },
    { question: "ما مجموع زوايا المثلث؟", answer: "180" },
    { question: "ما هو العدد العشري لـ 1/2؟", answer: "0.5" },
    { question: "ما عدد الأصفار في المليون؟", answer: "6" },
    { question: "من هي افضل تدريسية بالعالم ", answer: "د حنان" }
  ];
  
  let currentQuestion = 0;
  let correctAnswers = 0;
  const totalQuestions = questions.length;
  
  let randomPieces = [
    document.getElementById("piece0"),
    document.getElementById("piece1"),
    document.getElementById("piece3"),
    document.getElementById("piece4"),
    document.getElementById("piece5"),
    document.getElementById("piece6"),
    document.getElementById("piece8"),
    document.getElementById("piece9")
  ];
  
  randomPieces = randomPieces.sort(() => Math.random() - 0.5);
  randomPieces.push(document.getElementById("piece7"));
  randomPieces.push(document.getElementById("piece2"));
  
  document.getElementById("question").innerText = questions[currentQuestion].question;
  
  document.getElementById("answerInput").focus();
  
  function checkAnswer() {
    const input = document.getElementById("answerInput").value.trim();
    if (input === questions[currentQuestion].answer) {
      document.getElementById("message").innerText = "إجابة صحيحة!";
      
      if (correctAnswers < randomPieces.length) {
        randomPieces[correctAnswers].style.opacity = "0";
      }
  
      correctAnswers++;
      currentQuestion++;
  
      if (currentQuestion < totalQuestions) {
        document.getElementById("question").innerText = questions[currentQuestion].question;
      } else {
        document.getElementById("message").innerText = "تهانينا! لقد كشفت الصورة بالكامل!";
      }
    } else {
      document.getElementById("message").innerText = "إجابة خاطئة! حاول مرة أخرى.";
    }
  
    document.getElementById("answerInput").value = "";
    document.getElementById("answerInput").focus();
  }
  
  document.getElementById("answerInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });
  