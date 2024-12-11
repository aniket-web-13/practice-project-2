let navbar = document.getElementById("navbar");
navbar.innerHTML = `
   <div class="nav-section">
       <div class="container">
           <div class="nav-layout">
               <div class="nav-left">
                   <a href="#">
                       <img src="https://cdn.prod.website-files.com/670010141e02b62e6f054e13/672b0cbffbb01b1ebb84e214_Realfy.svg"
                           alt="">
                   </a>
               </div>
               <div class="nav-middle">
                   <ul>
                       <li><a href="../index.html">Home</a></li>
                       <li><a href="../pages/aboutUs.html">About Us</a></li>
                       <li id="nlp-position">Pages&nbsp;<span class="page-icon"><i class="fa-solid fa-chevron-down"></i></span>
                         <div class="n-pages-box">
                           <ul>
                             <li><div class="np-l-div"><a href="./pages/agentsPage.html">Agents</a></div></li>
                             <li><div class="np-l-div"><a href="./pages/servicesPage.html">Services</a></div></li>
                             <li><div class="np-l-div"><a href="./pages/realtorPage.html">Realtor</a></div></li>
                             <li><div class="np-l-div"><a href="#">Contact</a></div></li>
                             <li><div class="np-l-div"><a href="#">Licenses</a></div></li>
                             <li><div class="np-l-div"><a href="#">404 Page</a></div></li>
                             <li><div class="np-l-div"><a href="#">Privacy policy</a></div></li>
                             <li><div class="np-l-div"><a href="#">Terms & conditions</a></div></li>
                           </ul>                             
                         </div>
                       </li>
                       <li><a href="#">Blog</a></li>
                       <li><a href="#">Cart</a></li>
                   </ul>                      
               </div>                  
               <div class="nav-right">
                   <a href="#"><button class="nav-btn">Explore All</button></a>
               </div>
               <div class="hamSec">
                   <ul>
                       <li><span>Cart(0)</span></li>
                       <li> <button class="hamBtn"><i class="fa-solid fa-bars"></i></button></li>
                   </ul>                            
               </div>
           </div>
       </div>
   </div>
`;



let navPages = document.getElementById("nlp-position");


let navPagesLinkBox = document.getElementsByClassName("n-pages-box");
navPagesLinkBox[0].style.display = "none";


let pageIcon = document.getElementsByClassName("page-icon")[0];

navPages.addEventListener("mouseover", function () {
  navPagesLinkBox[0].style.display = "block";
  pageIcon.style.transform = "rotate(-180deg)";
});

navPages.addEventListener("mouseout", function () {
  navPagesLinkBox[0].style.display = "none";
  pageIcon.style.transform = "rotate(0deg)";
});
