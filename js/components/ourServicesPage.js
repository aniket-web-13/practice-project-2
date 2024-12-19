"use strict";


class Services {
  constructor(src, title, para) {
    this.src = src;
    this.title = title;
    this.para = para;
  }
}

let servicesInfo = [];
servicesInfo.push(
  new Services(
    `https://cdn.prod.website-files.com/670010141e02b62e6f054e13/6702975b37e52c66c08a67cf_service-icon-1.svg`,
    "Property buying assistance",
    "Helping clients find and purchase their dream home or investment property with personalized guidance throughout the process."
  )
);
servicesInfo.push(
  new Services(
    `https://cdn.prod.website-files.com/670010141e02b62e6f054e13/6702975a2759a79b03bab0b2_service-icon-2.svg`,
    "Property selling services",
    "Expert marketing and sales strategies to help homeowners sell their properties quickly and for the best price."
  )
);
servicesInfo.push(
  new Services(
    `https://cdn.prod.website-files.com/670010141e02b62e6f054e13/6702975a1cd620f266132f6f_service-icon-3.svg`,
    "Real estate consultation",
    "Professional advice on market trends, property values, and investment opportunities tailored to individual client needs."
  )
);
servicesInfo.push(
  new Services(
    `https://cdn.prod.website-files.com/670010141e02b62e6f054e13/6702975a7d583a0d54a393f6_service-icon-4.svg`,
    "Property management",
    "Comprehensive management services to maintain and maximize the value of rental properties, including tenant management."
  )
);
servicesInfo.push(
  new Services(
    `https://cdn.prod.website-files.com/670010141e02b62e6f054e13/6702975bab354a1ef77bc500_service-icon-5.svg`,
    "Rental and leasing services",
    "Helping clients find ideal rental homes or leasing opportunities with a focus on flexibility and long-term value."
  )
);
servicesInfo.push(
  new Services(
    `https://cdn.prod.website-files.com/670010141e02b62e6f054e13/6702975b20af6933119c0c87_service-icon-6.svg`,
    "Home staging and preparation",
    "Preparing properties for sale with professional staging, repairs, and improvements to attract buyers and maximize value."
  )
);

let servicesCount = document.getElementById("servicesCount"); 

servicesInfo.map((info, index) => {
  let serviceCard = document.createElement("div");
  serviceCard.classList.add("servicCard"); 
  servicesCount.appendChild(serviceCard);
  serviceCard.innerHTML = `
     <div class="value-b-icon">
      <img src="${info.src}" alt="">
     </div>
     <div class="value-info">
      <div class="value-title">
        <h2>${info.title}</h2>
      </div>
      <div class="value-text">
        <p>${info.para}</p>
      </div>
     </div>
  `;
});
