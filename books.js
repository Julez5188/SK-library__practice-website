// https://stephen-king-api.onrender.com/api/books //

async function main() {
  const books = await fetch("https://stephen-king-api.onrender.com/api/books");
  const booksData = (await books.json()).data;
  const bookListEl = document.querySelector(".data-list");

  bookListEl.innerHTML = booksData
  .map(
      (book) => `<div class="book">
              <figure class="book__img--wrapper">
                <img src="./assets/carrie-img.jpg">
              </figure>
              <div class="book__title">
                Carrie
              </div>
              <div class="book__ratings">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <div class="book__price">
                <span class="book__price">$19.95</span>
              </div>
            </div>`
          )
          .join("");
}
          
main();