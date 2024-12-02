class Title {  
  constructor(title) {
    this.title = title;
  }
}

const footTitle1 = new Title("Pages");
const footTitle2 = new Title("CMS");
const footTitle3 = new Title("Utility");
const footTitle4 = new Title("Social");

let footLinksTitle = document.getElementsByClassName("f-l-title");

footLinksTitle[0].innerHTML = `
<h2>${footTitle1.title}</h2>

`;
footLinksTitle[1].innerHTML = `
<h2>${footTitle2.title}</h2>

`;
footLinksTitle[2].innerHTML = `
<h2>${footTitle3.title}</h2>

`;
footLinksTitle[3].innerHTML = `
<h2>${footTitle4.title}</h2>

`;

function Links(link1, link2, link3, link4, link5, link6) {
  this.link1 = link1;
  this.link2 = link2;
  this.link3 = link3;
  this.link4 = link4;
  this.link5 = link5;
  this.link6 = link6;
}

let fLink1 = new Links(
  "Home",
  "About",
  "Services",
  "Contact",
  "Realtor",
  "Privacy Policy"
);
let fLink2 = new Links(
  "Properties",
  "Properties Single",
  "Blog",
  "Blog Single",
  "Agents",
  "Agents Single"
);
let fLink3 = new Links(
  "Style guide",
  "404 Page",
  "Password protected",
  "Licenses",
  "Changelog",
  "Terms & conditions"
);
let fLink4 = new Links(
  "Facebook",
  "Instagram",
  "Twitter",
  "Linkedin",
  "YouTube",
  "Threads"
);

let footLink = document.getElementsByClassName("foot-links");

footLink[0].innerHTML = `

<a href="#">${fLink1.link1}</a>
<a href="#">${fLink1.link2}</a>
<a href="#">${fLink1.link3}</a>
<a href="#">${fLink1.link4}</a>
<a href="#">${fLink1.link5}</a>
<a href="#">${fLink1.link6}</a>

`;
footLink[1].innerHTML = `

<a href="#">${fLink2.link1}</a>
<a href="#">${fLink2.link2}</a>
<a href="#">${fLink2.link3}</a>
<a href="#">${fLink2.link4}</a>
<a href="#">${fLink2.link5}</a>
<a href="#">${fLink2.link6}</a>

`;
footLink[2].innerHTML = `

<a href="#">${fLink3.link1}</a>
<a href="#">${fLink3.link2}</a>
<a href="#">${fLink3.link3}</a>
<a href="#">${fLink3.link4}</a>
<a href="#">${fLink3.link5}</a>
<a href="#">${fLink3.link6}</a>

`;
footLink[3].innerHTML = `

<a href="#">${fLink4.link1}</a>
<a href="#">${fLink4.link2}</a>
<a href="#">${fLink4.link3}</a>
<a href="#">${fLink4.link4}</a>
<a href="#">${fLink4.link5}</a>
<a href="#">${fLink4.link6}</a>

`;
