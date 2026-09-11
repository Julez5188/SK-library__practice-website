// https://stephen-king-api.onrender.com/api/books //
const bookImages = {
  "Carrie": "./assets"
}

async function main() {
  const books = await fetch("https://stephen-king-api.onrender.com/api/books");
  const booksData = (await books.json()).data;
  const bookListEl = document.querySelector(".books");
  

  bookListEl.innerHTML = booksData
  .map(
      (book) => `<div class="book">
              <figure class="book__img--wrapper">
                <img src="$">
              </figure>
              <div class="book__title">
                ${book.Title}
              </div>
              <div class="book__year">
                ${book.Year}
              </div>
              <div class="book__price">
                <span class="book__price">${book.Price}</span>
              </div>
            </div>`
          )
          .join("");
}
          
main();

