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

  let faqBox = document.createElement("div");
  faqBox.classList.add("faq-quest");
  questionConatiner.appendChild(faqBox);
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
/*
let faqQuestionBtn = document.getElementsByClassName("faq-q-top");
let faqAnswer = document.getElementsByClassName("faq-bottom");
// let hide = "hide"
// let show = document.getElementsByClassName("show")
// console.log(show);
let a = 0;

for (let i = 0; i < faqAnswer.length; i++) {
  faqAnswer[i].style.display = "none";
}

function toggle() {
  for (let i = 0; i < faqQuestionBtn.length; i++) {
    faqAnswer[i].style.display = "none";
  }

  faqAnswer[a].style.display = "block";
}

if (faqAnswer.length > 0) {
  toggle();
}
console.log(toggle());

faqQuestionBtn[0].addEventListener("click", () => {
  faqAnswer[0].classList.add = ("show")
});

console.log(faqQuestionBtn);
console.log(faqAnswer);*/

let faqQuestionBtn = document.getElementsByClassName("faq-q-top");
let faqAnswer = document.getElementsByClassName("faq-bottom");
let icon = document.getElementsByClassName("icon");
console.log(icon);

console.log(faqQuestionBtn);
console.log(faqAnswer);

// for (let i = 0; i < faqAnswer.length; i++) {
//   faqAnswer[i].style.display = "none";
// }
// faqAnswer[i].style.display = "none";

// function toggleFaq(a) {
//   for (let i = 0; i < faqAnswer.length; i++) {
//     if (i === a) {
//       faqAnswer[i].style.display = "block";

//     } else {
//       faqAnswer[i].style.display = "none";
//     }
//   }
// }
// let a = 0;

// for (let i = 0; i < faqQuestionBtn.length; i++) {
//   faqQuestionBtn[i].addEventListener("click", () => {
//     toggleFaq(i);
//   });
// }
// console.log(toggleFaq);

// faqQuestionBtn[0].addEventListener("click", () => {
//   faqAnswer[0].classList.toggle("show");
// });

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
