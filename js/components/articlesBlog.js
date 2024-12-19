
let articles = [
  {
    src: "./assets/jpg/blog-1.jpg",
  },
  {
    src: "./assets/jpg/blog-2.jpg",
  },
  {
    src: "./assets/jpg/blog-3.jpg",
  },
];

// Render the blog and article section structure
let blogAndArticle = document.getElementById("blog-article");
blogAndArticle.innerHTML = `
   <div class="padding-section">
      <div class="section-spacing">
          <div class="container ">
              <div class="article-main-box">
                  <div class="article-top-box">
                      <div class="a-top-left">
                          <div class="arti-head">
                              <div class="sub-head-co">
                                  <p>Articles</p>
                              </div>
                              <div class="arti-heading">
                                  <h2>Read our latest blogs</h2>
                              </div>
                          </div>                            
                      </div>
                      <div class="a-top-right">
                          <a href="#" class="rp-btn">Explore All</a>
                      </div>                                 
                  </div>
                  <div class="article-btm-box" id="article-card-main-box"></div>
              </div>
          </div>
      </div>
   </div>
`;

// Now add the articles to the existing 'article-card-main-box'
let articleCardBox = document.getElementById("article-card-main-box");

for (let i = 0; i < articles.length; i++) {
  const element = articles[i];

  let artiCard = document.createElement("div");
  artiCard.classList.add("article-card");
  articleCardBox.appendChild(artiCard);

  artiCard.innerHTML = `
    <div class="artcle-img">
        <a href="#"><img src="${element.src}" alt="Article Image"></a>
    </div>
    <div class="article-body">
        <a href="#" class="art-a">Here’s how to decorate your new home from scratch</a>
        <div class="art-b-dt">
            <div class="art-da">
                <svg width=" 10%" height=" 10%" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.332 2.5013H13.9987C14.1755 2.5013 14.3451 2.57154 14.4701 2.69656C14.5951 2.82159 14.6654 2.99116 14.6654 3.16797V13.8346C14.6654 14.0114 14.5951 14.181 14.4701 14.306C14.3451 14.4311 14.1755 14.5013 13.9987 14.5013H1.9987C1.82189 14.5013 1.65232 14.4311 1.52729 14.306C1.40227 14.181 1.33203 14.0114 1.33203 13.8346V3.16797C1.33203 2.99116 1.40227 2.82159 1.52729 2.69656C1.65232 2.57154 1.82189 2.5013 1.9987 2.5013H4.66536V1.16797H5.9987V2.5013H9.9987V1.16797H11.332V2.5013ZM13.332 7.83464H2.66536V13.168H13.332V7.83464ZM9.9987 3.83464H5.9987V5.16797H4.66536V3.83464H2.66536V6.5013H13.332V3.83464H11.332V5.16797H9.9987V3.83464ZM3.9987 9.16797H5.33203V10.5013H3.9987V9.16797ZM7.33203 9.16797H8.66536V10.5013H7.33203V9.16797ZM10.6654 9.16797H11.9987V10.5013H10.6654V9.16797Z" fill="currentColor"></path>
                </svg>
                <p>August 20, 2024</p>
            </div>
            <div class="art-ta">
                <svg width=" 13%" height=" 13%" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.9987 15.1654C4.3167 15.1654 1.33203 12.1807 1.33203 8.4987C1.33203 4.8167 4.3167 1.83203 7.9987 1.83203C11.6807 1.83203 14.6654 4.8167 14.6654 8.4987C14.6654 12.1807 11.6807 15.1654 7.9987 15.1654ZM7.9987 13.832C9.41319 13.832 10.7697 13.2701 11.7699 12.2699C12.7701 11.2697 13.332 9.91319 13.332 8.4987C13.332 7.08421 12.7701 5.72766 11.7699 4.72746C10.7697 3.72727 9.41319 3.16536 7.9987 3.16536C6.58421 3.16536 5.22766 3.72727 4.22746 4.72746C3.22727 5.72766 2.66536 7.08421 2.66536 8.4987C2.66536 9.91319 3.22727 11.2697 4.22746 12.2699C5.22766 13.2701 6.58421 13.832 7.9987 13.832ZM8.66536 8.4987H11.332V9.83203H7.33203V5.16536H8.66536V8.4987Z" fill="currentColor"></path>
                </svg>
                <p>14 min read</p>
            </div>
        </div>
        <a href="#" class="p-cat-btn">Read More</a>
    </div>
  `;
}
