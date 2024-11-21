let agent = [
    
    {
        src:"./assets/jpg/Denya-contadora.jpg",
        agentName:"Denya Contadora",
        agentPost:"Real estate investment specialist",
    },
    {
        src:"./assets/jpg/Encarna-homie.jpg",
        agentName:"Encarna Homie",
        agentPost:"Commercial property agent",
    },
    {
        src:"./assets/jpg/Agustín-trabajo.jpg",
        agentName:"Agustín trabajo",
        agentPost:"Lead property advisor",
    },
    {
        src:"./assets/jpg/fardin-Sayyad.jpg",
        agentName:"Fardin Sayyad",
        agentPost:"Luxury property expert",
    },
    {
        src:"./assets/jpg/Alday-banamex.jpg",
        agentName:"Alday Banamex",
        agentPost:"Residential sales consultant",
    },
    {
        src:"./assets/jpg/Valerie-ahorro.jpg",
        agentName:"Valerie Ahorro",
        agentPost:"Listing agent",
    }, 
    {
        src:"./assets/jpg/Cristela-estilista.jpg",
        agentName:"Cristela Estilista",
        agentPost:"Luxury property expert",
    },
    {
        src:"./assets/jpg/Maestra-yazmin.jpg",
        agentName:"Maestra Yazmin",
        agentPost:"Investment property consultant",
    },
    {
        src:"./assets/jpg/Uziel-renta.jpg",
        agentName:"Uziel Renta",
        agentPost:"Senior real estate consultant",
    },
    {
        src:"./assets/jpg/Bryce-jones.jpg.jpg",
        agentName:"Bryce Jones",
        agentPost:"Client relations manager",
    },

];

let agentCount= document.getElementById("agent-count")


for (let i = 0; i < agent.length; i++) {
    const element = agent[i];


    let agentCard = document.createElement("div");    
    agentCard.classList.add("agent-card");
    agentCard.classList.add(`agc${[i]}`);
    agentCount.appendChild(agentCard);
    agentCard.innerHTML = `
    
                        <a href="#">
                            <img src="${element.src}" alt="${element.agentName}">
                        </a>
                        <div class="agent-info">
                            <a href="#"><h3>${element.agentName}</h3></a>
                            <p>${element.agentPost}.</p>
                        </div>
    
    `
    



}

   





