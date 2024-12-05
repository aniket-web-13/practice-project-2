/*let testimonial = [
  {
    src: "../assets/jpg/David-martinez.jpg",
    heading:
      "Their attention to detail market expertise made all the difference.",
    para: "Their dedication and commitment to finding the right property were evident throughout. I highly recommend their services to anyone looking to buy or sell. I’m thrilled with my new investment this new property!",
    ownerName: "David Martinez",
    add: "San Jose, South Dakota",
  },
  {
    src: "../assets/jpg/James-thompson.jpg",
    heading: "An exceptional experience from start to finish!",
    para: "From the first meeting to the closing, knowledgeable, and always available to answer our questions. I couldn’t be happier with my new home! They listened to what I was looking for and showed me properties needs perfectly.",
    ownerName: "James Thompson",
    add: "Dallas, Texas",
  },
  {
    src: "../assets/jpg/Olivia-carter.jpg",
    heading: "Exceptional service and outstanding results.",
    para: "The team’s my expectations. buy or sell. I’m thrilled with my highly recommend their I couldn’t be more pleased with the outcome. I never felt rushed or pressured, and they were always willing to go the extra mile to find properties that matched my vision",
    ownerName: "Olivia Carter",
    add: "Boston, Florida",
  },
];

let homeOwnerbox = document.getElementById("testimonialMainBox");

for (let i = 0; i < testimonial.length; i++) {
  const element = testimonial[i];

  let testimonialCard = document.createElement("div");
  testimonialCard.classList.add("testimonial-card");
  homeOwnerbox.appendChild(testimonialCard);
 

  testimonialCard.innerHTML = `
    
     <div class="test-in-info">
        <div class="test-l-info">
            <div class="tl-info-top">
                <h2>${element.heading}</h2>
                <p>${element.para}</p>
            </div> 
            <div class="tl-info-bottom">
                <h3>${element.ownerName}</h3>
                <p>${element.add}</p>
            </div>                                  
        </div>
        <div class="test-r-img">
            <img src="${element.src}" alt="">
        </div>
    </div>                       
        
    `
}

let j = 0;
let testCard = document.getElementsByClassName("testimonial-card");


for (let i = 0; i < testCard.length; i++) {
  testCard[i].style.display = "none";
}


function displayTestimonial() {
  for (let i = 0; i < testCard.length; i++) {
    testCard[i].style.display = "none"; 
  }
  testCard[j].style.display = "block";
}

if (testCard.length > 0) {
  displayTestimonial();
}

let prevBtn = document.getElementById("back-test-btn");
let nextBtn = document.getElementById("next-test-btn");

nextBtn.addEventListener("click", () => {
  j = (j + 1) % testCard.length; 
  displayTestimonial();
});

prevBtn.addEventListener("click", () => {
  j = (j - 1 + testCard.length) % testCard.length; 
  displayTestimonial();
});


let testimonialSec = document.getElementById("testimonialSec");
testimonialSec.innerHTML = `

 <div class="padding-section">
      <div class="section-spacing">
          <div class="container">
              <div class="agents-p-head">
                  <div class="sub-head-co">
                      <p>Testimonials</p>
                  </div>
                  <div class="p-cat-heading">
                      <h2>Real stories from happy homeowners</h2>
                  </div>
              </div>  
              <div class="card-show">
                  <div class="testmo-count">
                      <div class="home-owner-box" id="testimonialMainBox"></div>
                  </div>
                  <div class="home-card-btn">
                      <div class="btn-sec">
                          <button class="ho-btn" id="back-test-btn"><i class="fa-solid fa-arrow-left"></i></button>
                          <button class="ho-btn" id="next-test-btn"><i class="fa-solid fa-arrow-right"></i></button>
                      </div> 
                  </div>
              </div>                  
          </div>                    
      </div>                            
  </div>

`*/





let testimonial = [
  {
    src: "../assets/jpg/David-martinez.jpg",
    heading: "Their attention to detail market expertise made all the difference.",
    para: "Their dedication and commitment to finding the right property were evident throughout. I highly recommend their services to anyone looking to buy or sell. I’m thrilled with my new investment this new property!",
    ownerName: "David Martinez",
    add: "San Jose, South Dakota",
  },
  {
    src: "../assets/jpg/James-thompson.jpg",
    heading: "An exceptional experience from start to finish!",
    para: "From the first meeting to the closing, knowledgeable, and always available to answer our questions. I couldn’t be happier with my new home! They listened to what I was looking for and showed me properties needs perfectly.",
    ownerName: "James Thompson",
    add: "Dallas, Texas",
  },
  {
    src: "../assets/jpg/Olivia-carter.jpg",
    heading: "Exceptional service and outstanding results.",
    para: "The team’s my expectations. buy or sell. I’m thrilled with my highly recommend their I couldn’t be more pleased with the outcome. I never felt rushed or pressured, and they were always willing to go the extra mile to find properties that matched my vision",
    ownerName: "Olivia Carter",
    add: "Boston, Florida",
  },
];

let homeOwnerbox = document.getElementById("testimonialMainBox");

for (let i = 0; i < testimonial.length; i++) {
  const element = testimonial[i];

  let testimonialCard = document.createElement("div");
  testimonialCard.classList.add("testimonial-card");
  homeOwnerbox.appendChild(testimonialCard);
  testimonialCard.innerHTML = `
     <div class="test-in-info">
        <div class="test-l-info">
            <div class="tl-info-top">
                <h2>${element.heading}</h2>
                <p>${element.para}</p>
            </div> 
            <div class="tl-info-bottom">
                <h3>${element.ownerName}</h3>
                <p>${element.add}</p>
            </div>                                  
        </div>
        <div class="test-r-img">
            <img src="${element.src}" alt="">
        </div>
    </div>                       
  `;
}


let j = 0;
let testCard = document.getElementsByClassName("testimonial-card");

for (let i = 0; i < testCard.length; i++) {
  testCard[i].style.display = "none";
}


function displayTestimonial() {
  
  for (let i = 0; i < testCard.length; i++) {
    testCard[i].style.display = "none"; 
  }
  
  
  testCard[j].style.display = "block";
}


if (testCard.length > 0) {
  displayTestimonial();
}

let prevBtn = document.getElementById("back-test-btn");
let nextBtn = document.getElementById("next-test-btn");

nextBtn.addEventListener("click", () => {
  j = (j + 1) % testCard.length;
  displayTestimonial();
});

prevBtn.addEventListener("click", () => {
  j = (j - 1 + testCard.length) % testCard.length; 
  displayTestimonial();
});




