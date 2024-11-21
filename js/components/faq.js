let questions = [
  {
    question: "How long does it take to buy a home?",
  },
  {
    question: "How much should I save for a down payment?",
  },
  {
    question: "Do I need a real estate agent to sell my home?",
  },
  {
    question: "What should I look for during a home inspection?",
  },
  {
    question: "What is the first step in buying a home?",
  },
];

let questionConatiner = document.getElementById("questionConatiner");

for (let i = 0; i < questions.length; i++) {
  const element = questions[i];

  let faqBox = document.createElement('div');
  faqBox.classList.add("faq-quest");
  questionConatiner.appendChild(faqBox)
  faqBox.innerHTML = `
  
   <div class="faq-q-top">
        <h2>${element.question}</h2>
        <div class="faq-icon">
            <i class="fa-solid fa-plus"></i>
        </div>
    </div>
    <div class="faq-bottom">
        <p>The home-buying process typically takes 30 to 60 days from the time an offer is accepted, depending on factors like financing, inspections, and the closing process.</p>
    </div>            
    
  `;
}

let faqQuestionBtn = document.getElementsByClassName("faq-q-top")
let faqAnswer = document.getElementsByClassName("faq-bottom");

faqQuestionBtn.addEventListener("click", () => {
    
})




console.log(faqQuestionBtn);
console.log(faqAnswer);





