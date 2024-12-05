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

// footLinksTitle[0].innerHTML = ``;
// footLinksTitle[1].innerHTML = ``;
// footLinksTitle[2].innerHTML = ``;
// footLinksTitle[3].innerHTML = ``;

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

let footer = document.getElementById("footer");
footer.innerHTML = `

   <div class="foot-section">
      <div class="section-spacing">
          <div class="container ">
              <div class="foot-main-count">
                  <div class="foot-top">
                      <div class="foot-top-left">
                          <div class="foot-form">
                              <div class="ff-heading">
                                  <div class="sub-head-co">
                                      <p>Contact</p>
                                  </div>
                                  <div class="arti-heading">
                                      <h2>Want to contact with us?</h2>
                                  </div>
                              </div>
                              <div class="ftf-form">
                                  <div class="foot-name">
                                      <input type="text" class="input_outline" id="text" placeholder="Name">
                                  </div>
                                  <div class="foot-email">
                                      <input type="email" class="input_outline" id="email" placeholder="Email">
                                  </div>
                                  <a href="#" class="p-cat-btn">Book a call</a>                                               
                              </div>
                          </div>
                      </div>
                      <div class="foot-top-right">
                          <img src="../assets/png/foot-home.png" alt="">
                      </div>
                  </div>
                  <div class="foot-bottom">
                      <div class="foot-btm-left">
                              <a href="#">Realfy</a>
                         <div class="foot-para">
                              <p>Lorem ipsum dolor sit amet consectetur&period; dolor semper felis pulvinar feugiat risus adipiscing dictum&period;</p>
                         </div>
                         <div class="foot-view-m">
                              <a href="#"><button class="foot-vmt-btn">View More Templates</button></a>
                         </div>
                      </div>
                      <div class="foot-btm-right">
                          <div class="foot-l-box">
                              <div class="f-l-title">
                             <h2>${footTitle1.title}</h2>
                              </div>
                              <div class="foot-links">
                               <a href="#">${fLink1.link1}</a>
                               <a href="#">${fLink1.link2}</a>
                               <a href="#">${fLink1.link3}</a>
                               <a href="#">${fLink1.link4}</a>
                               <a href="#">${fLink1.link5}</a>
                               <a href="#">${fLink1.link6}</a>
                               </div>
                          </div>
                          <div class="foot-l-box">
                              <div class="f-l-title">
                             <h2>${footTitle2.title}</h2>
                              </div>
                              <div class="foot-links">
                               <a href="#">${fLink2.link1}</a>
                               <a href="#">${fLink2.link2}</a>
                               <a href="#">${fLink2.link3}</a>
                               <a href="#">${fLink2.link4}</a>
                               <a href="#">${fLink2.link5}</a>
                               <a href="#">${fLink2.link6}</a>
                               </div>
                          </div>
                          <div class="foot-l-box">
                              <div class="f-l-title">
                             <h2>${footTitle3.title}</h2>
                              </div>
                              <div class="foot-links">
                               <a href="#">${fLink3.link1}</a>
                               <a href="#">${fLink3.link2}</a>
                               <a href="#">${fLink3.link3}</a>
                               <a href="#">${fLink3.link4}</a>
                               <a href="#">${fLink3.link5}</a>
                               <a href="#">${fLink3.link6}</a>
                               </div>
                          </div>
                          <div class="foot-l-box">
                              <div class="f-l-title">
                              <h2>${footTitle4.title}</h2>
                              </div>
                              <div class="foot-links">
                              <a href="#">${fLink4.link1}</a>
                              <a href="#">${fLink4.link2}</a>
                              <a href="#">${fLink4.link3}</a>
                              <a href="#">${fLink4.link4}</a>
                              <a href="#">${fLink4.link5}</a>
                              <a href="#">${fLink4.link6}</a>
                              </div>
                          </div>
                      </div>                                    
                  </div>
                  <div class="foot-copyright-box">
                      <div class="copyright-line"></div>
                      <p>&copy;Realvy&period; All rights reserved&period;</p>
                  </div>
              </div>                            
          </div>
      </div>
  </div>



`;
