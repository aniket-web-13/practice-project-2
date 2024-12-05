let agent = [
  {
    src: "../assets/jpg/Denya-contadora.jpg",
    agentName: "Denya Contadora",
    agentPost: "Real estate investment specialist",
  },
  {
    src: "../assets/jpg/Encarna-homie.jpg",
    agentName: "Encarna Homie",
    agentPost: "Commercial property agent",
  },
  {
    src: "../assets/jpg/Agustín-trabajo.jpg",
    agentName: "Agustín trabajo",
    agentPost: "Lead property advisor",
  },
  {
    src: "../assets/jpg/fardin-Sayyad.jpg",
    agentName: "Fardin Sayyad",
    agentPost: "Luxury property expert",
  },
  {
    src: "../assets/jpg/Alday-banamex.jpg",
    agentName: "Alday Banamex",
    agentPost: "Residential sales consultant",
  },
  {
    src: "../assets/jpg/Valerie-ahorro.jpg",
    agentName: "Valerie Ahorro",
    agentPost: "Listing agent",
  },
  {
    src: "../assets/jpg/Cristela-estilista.jpg",
    agentName: "Cristela Estilista",
    agentPost: "Luxury property expert",
  },
  {
    src: "../assets/jpg/Maestra-yazmin.jpg",
    agentName: "Maestra Yazmin",
    agentPost: "Investment property consultant",
  },
  {
    src: "../assets/jpg/Uziel-renta.jpg",
    agentName: "Uziel Renta",
    agentPost: "Senior real estate consultant",
  },
  {
    src: "../assets/jpg/Bryce-jones.jpg.jpg",
    agentName: "Bryce Jones",
    agentPost: "Client relations manager",
  },
];

function hpAgentCard(params) {
    let agentCount = document.getElementById("agentCount");
for (let i = 0; i < agent.length; i++) {
  const element = agent[i];

  let agentCard = document.createElement("div"); 

  agentCount.appendChild(agentCard);
  agentCard.classList.add("agent-card");
  agentCard.classList.add(`agc${[i]}`);

  agentCard.innerHTML = `
    
        <a href="#">
            <img src="${element.src}" alt="${element.agentName}">
        </a>
        <div class="agent-info">
            <a href="#"><h3>${element.agentName}</h3></a>
            <p>${element.agentPost}.</p>
        </div>
    
    `;

}
}

function aCard() {
    
let agentsMainCount = document.getElementById("agentsMainCount");
console.log(agentsMainCount);



agent.map((value, index) => {    
    let agentSecCard = document.createElement("div");
    agentsMainCount.appendChild(agentSecCard);
    agentSecCard.classList.add("agent-p-card");
    agentSecCard.classList.add("apCardImg");
    console.log(agentSecCard);
    
    agentSecCard.innerHTML = `

     <a href="#">
           <div> <img src="${value.src}" alt="${value.agentName}"></div>   
      </a>
      <div class="agent-info">
          <a href="#"><h3>${value.agentName}</h3></a>
          <p>${value.agentPost}.</p>
      </div>

    `
})

}

let apCardImg = document.getElementsByClassName("apCardImg");
console.log(apCardImg.indexof);
