class Values {
  constructor(src, title, para) {
    this.src = src;
    this.title = title;
    this.para = para;
  }
}

let values = [];
values.push(
  new Values(
    `https://cdn.prod.website-files.com/670010141e02b62e6f054e13/6702a0c9b3033cc9a9784d44_mission-icon-1.svg`,
    "Innovation",
    "We stay ahead of market trends and embrace new technologies effective solutions for our clients."
  )
);
values.push(
  new Values(
    `https://cdn.prod.website-files.com/670010141e02b62e6f054e13/6702a0c99eee002effb934e4_mission-icon-2.svg`,
    "Quality",
    "We are committed to exceeding expectations by delivering high-quality service, expert advice."
  )
);
values.push(
  new Values(
    `https://cdn.prod.website-files.com/670010141e02b62e6f054e13/6702a0c9af6aa8396a073afa_mission-icon-3.svg`,
    "Growth",
    "We foster long-term relationships by delivering on our promises and maintaining communication."
  )
);
values.push(
  new Values(
    `https://cdn.prod.website-files.com/670010141e02b62e6f054e13/6702a0c92759a79b03c33f9e_mission-icon-4.svg`,
    "Community",
    "We believe in giving back and making a positive impact in the communities where we work."
  )
);
values.push(
  new Values(
    `https://cdn.prod.website-files.com/670010141e02b62e6f054e13/6702a0c9131d41ce9307f21f_mission-icon-5.svg`,
    "Interaction",
    "Our clients are at the heart of our business. We listen, understand their needs, satisfaction."
  )
);
values.push(
  new Values(
    `https://cdn.prod.website-files.com/670010141e02b62e6f054e13/6702a0ca6cbbdd837f795a57_mission-icon-6.svg`,
    "Integrity",
    "We operate with honesty, and a dedication to doing what’s right in every transaction."
  )
);
// console.log(values.map());

let valueBoxRight = document.getElementById("valueBoxRight");

values.map((value, index) => {
  let valueCards = document.createElement("div");
  valueCards.classList.add("ns-card");
  valueBoxRight.appendChild(valueCards);
  valueCards.innerHTML = `
<div class="value-b-icon">
 <img src="${value.src}" alt="">
</div>
<div class="value-info">
 <div class="value-title">
   <h2>${value.title}</h2>
 </div>
 <div class="value-text">
   <p>${value.para}</p>
 </div>
</div>
`;
});
