/*let questions = [
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

let questionContainer = document.getElementById("questionContainer");

for (let i = 0; i < questions.length; i++) {
  const element = questions[i];

  let faqBox = document.createElement("div");
  faqBox.classList.add("faq-quest");
  questionContainer.appendChild(faqBox);
  faqBox.innerHTML = `  
  
   <div class="faq-q-top">
        <h2>${element.question}</h2>
        <div class="faq-icon">
            <i class="fa-solid fa-plus icon"></i>
        </div>
    </div>
    <div class="faq-bottom">
        <p>The home-buying process typically takes 30 to 60 days from the time an offer is accepted, depending on factors like financing, inspections, and the closing process.</p>
    </div>            
    
  `;
}

let faqQuestionBtn = document.getElementsByClassName("faq-q-top");
let faqAnswer = document.getElementsByClassName("faq-bottom");
let icon = document.getElementsByClassName("icon");


for (let i = 0; i < faqQuestionBtn.length; i++) {
  faqQuestionBtn[i].addEventListener("click", () => {
    console.log(faqAnswer[i].style.height, faqAnswer[i].scrollHeight);

    if (parseInt(faqAnswer[i].style.height) != faqAnswer[i].scrollHeight) {
      faqAnswer[i].style.height = faqAnswer[i].scrollHeight + "px";
      icon[i].style.transition = "all 0.5s";
      icon[i].classList.remove("fa-plus");
      icon[i].classList.add("fa-minus");
    } else {
      faqAnswer[i].style.height = "0px";
      icon[i].style.transition = "all ease 0.5s";
      icon[i].classList.remove("fa-minus");
      icon[i].classList.add("fa-plus");
    }
  });
}

let faqSec = document.getElementById("faqSec");
faqSec.innerHTML = `

  <div class="padding-section">
      <div class="section-spacing">
          <div class="container ">
              <div class="faq-main-count">
                  <div class="faq-left">
                      <div class="sticky-position">
                          <div class="faq-heading">
                              <div class="ns-title">
                                  <p class="sub-head-co">FAQ</p>
                              </div>
                              <div class="ns-text">
                                  <div>
                                      <h2>Frequently Asked Questions</h2>
                                  </div>
                              </div>
                          </div>
                      </div>                                
                  </div>
                  <div class="faq-right">
                      <div class="question-count" id="questionContainer">   
                                                     
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>


`*/


// Questions data
let questions = [
  {
    question: "How long does it take to buy a home?",
    answer: "The home-buying process typically takes 30 to 60 days from the time an offer is accepted, depending on factors like financing, inspections, and the closing process."
  },
  {
    question: "How much should I save for a down payment?",
    answer: "The typical down payment ranges from 5% to 20% of the purchase price, but it can vary based on the loan type and your financial situation."
  },
  {
    question: "Do I need a real estate agent to sell my home?",
    answer: "While it's not required to use a real estate agent, they can help with pricing, marketing, and negotiating to get the best deal."
  },
  {
    question: "What should I look for during a home inspection?",
    answer: "Make sure to check the foundation, roof, plumbing, and electrical systems. Also, look for signs of pests, water damage, and structural issues."
  },
  {
    question: "What is the first step in buying a home?",
    answer: "The first step is to assess your financial situation, including determining how much you can afford and getting pre-approved for a mortgage."
  },
];

// Render the FAQ section structure (This will not be overwritten)
let faqSec = document.getElementById("faqSec");
faqSec.innerHTML = `
  <div class="padding-section">
      <div class="section-spacing">
          <div class="container">
              <div class="faq-main-count">
                  <div class="faq-left">
                      <div class="sticky-position">
                          <div class="faq-heading">
                              <div class="ns-title">
                                  <p class="sub-head-co">FAQ</p>
                              </div>
                              <div class="ns-text">
                                  <h2>Frequently Asked Questions</h2>
                              </div>
                          </div>
                      </div>                                
                  </div>
                  <div class="faq-right">
                      <div class="question-count" id="questionContainer">   
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
`;

// Get the container where FAQ items will be added
let questionContainer = document.getElementById("questionContainer");

// Loop through the questions and add them dynamically
questions.forEach((element, i) => {
  let faqBox = document.createElement("div");
  faqBox.classList.add("faq-quest");
  questionContainer.appendChild(faqBox);

  faqBox.innerHTML = `
    <div class="faq-q-top">
        <h2>${element.question}</h2>
        <div class="faq-icon">
            <i class="fa-solid fa-plus icon"></i>
        </div>
    </div>
    <div class="faq-bottom" style="height: 0px; overflow: hidden;">
        <p>${element.answer}</p>
    </div>            
  `;
});

// Handle FAQ interactions (open/close answer)
let faqQuestionBtn = document.getElementsByClassName("faq-q-top");
let faqAnswer = document.getElementsByClassName("faq-bottom");
let icon = document.getElementsByClassName("icon");

for (let i = 0; i < faqQuestionBtn.length; i++) {
  faqQuestionBtn[i].addEventListener("click", () => {
    const currentFaqAnswer = faqAnswer[i];
    const currentIcon = icon[i];

    // Check the current height and toggle it
    if (parseInt(currentFaqAnswer.style.height) !== currentFaqAnswer.scrollHeight) {
      currentFaqAnswer.style.height = currentFaqAnswer.scrollHeight + "px";
      currentIcon.classList.remove("fa-plus");
      currentIcon.classList.add("fa-minus");
    } else {
      currentFaqAnswer.style.height = "0px";
      currentIcon.classList.remove("fa-minus");
      currentIcon.classList.add("fa-plus");
    }
  });
}
