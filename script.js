<<<<<<< HEAD
let allQuestions = [
  { question: "من هو العالم المسلم الذي وضع اسس الجبر ", answer: "الخوارزمي" },
  { question: "إذا كان العدد فرديًا، سيكون مربعه فرديًا أم زوجيًا؟", answer: "فردي" },
  { question: "كم يساوي 7 × 2 + 3؟", answer: "17" },
  { question: "ما هو العدد الأولي التالي بعد 7؟", answer: "11" },
  { question: "من هو الذي مؤسس النظرية الإقليدية؟", answer: "اقليدس" },
  { question: "ما نتيجة 6! (عامل 6)؟", answer: "720" },
  { question: "ما مجموع زوايا المثلث؟", answer: "180" },
  { question: "ما هو العدد العشري لـ 1/2؟", answer: "0.5" },
  { question: "من صاحب نظرية الأعداد؟", answer: "كوليوس" },
  { question: "من هو الذي العالم اكتشف الجاذبية وانتقالات الأجسام؟", answer: "نيوتن" },
  { question: "من الذي اكتشف النظرية النسبية؟", answer: "اينشتاين" },
  { question: "ما ناتج 12 ÷ 4؟", answer: "3" },
  { question: "ما العدد الزوجي الأولي الوحيد؟", answer: "2" },
  { question: "ما ناتج 15 ÷ 3؟", answer: "5" },
  { question: "ما عدد الدرجات في نصف الدائرة؟", answer: "180" },
  { question: "إذا كان محيط مربع 16 سم، فما طول ضلعه؟", answer: "4" },
  { question: "كم يساوي 2 أس 5؟", answer: "32" },
  { question: "ما هو الجذر التربيعي لـ 121؟", answer: "11" },
  { question: "ما هو العدد الذي إذا ضربته في 14 كان الناتج 7؟", answer: "0.5" },
  { question: "ما هو ناتج 9 × 9؟", answer: "81" },
  { question: "كم عدد الأضلاع في المضلع السداسي؟", answer: "6" },
  { question: "ما هو المضاعف المشترك الأصغر بين 4 و 6؟", answer: "12" },
  { question: "ما هو أكبر عدد مكون من رقم واحد؟", answer: "9" },
  { question: "كم يساوي 3 أس 3؟", answer: "27" },
  { question: "ماهي قيمة e ", answer: "2.71" },
  { question: "كم عدد الأصفار في المليار؟", answer: "9" },
  { question: "كم يساوي 11 × 11؟", answer: "121" },
  { question: "ما هو مشتق ln x", answer: "1/x" },
  { question: "كم عدد الدقائق في 3 ساعات؟", answer: "180" },
  { question: "ما ناتج 2 × 50؟", answer: "100" },
  { question: "ما هو العدد الذي إذا طرحته من 10 حصلت على 5؟", answer: "5" },
  { question: "ما العدد الذي يمثل قيمة باي تقريبياً؟", answer: "3.14" },
  { question: "ما هو العدد الذي إذا قسمته على 4 حصلت على 5؟", answer: "20" },
  { question: "كم عدد الزوايا الحادة في المثلث القائم الزاوية؟", answer: "2" },
  { question: "ما هو المضاعف المشترك الأكبر بين 8 و 12؟", answer: "4" },
  { question: "كم يساوي 20% من 200؟", answer: "40" },
  { question: "ما هو مجموع زوايا الشكل الرباعي", answer: "360" },
  { question: "ما هو الجذر التربيعي لـ 144؟", answer: "12" },
  { question: "ما هي قيمة π (باي) (4 مراتب)", answer: "3.1415" }
];

// اختيار 10 أسئلة عشوائية من القائمة الكبيرة
let questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);

let currentQuestion = 0;
let correctAnswers = 0;
const totalQuestions = questions.length;

let randomPieces = [
  document.getElementById("piece0"),
  document.getElementById("piece2"),
  document.getElementById("piece7"),
  document.getElementById("piece4"),
  document.getElementById("piece5"),
  document.getElementById("piece6"),
  document.getElementById("piece8"),
  document.getElementById("piece9")
];

randomPieces = randomPieces.sort(() => Math.random() - 0.5);
randomPieces.push(document.getElementById("piece1"));
randomPieces.push(document.getElementById("piece3"));

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
=======
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
  
>>>>>>> 7165b03074b24ec73a7be74ae9197fbc2fcc0bca
