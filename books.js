// https://stephen-king-api.onrender.com/api/books //
const bookExtras = {
  "Carrie": {
    image: "./assets/carrie-img.jpg", 
    price: "$19.95",
  }
}

async function main() {
  const books = await fetch("https://stephen-king-api.onrender.com/api/books");
  const booksData = (await books.json()).data;
  const bookListEl = document.querySelector(".books");
  

  bookListEl.innerHTML = booksData
  .map(
      (book) => {
        const extras = bookExtras[book.Title] || {
          image: "./assets/default.jpg",
          price: "N/A",
        }
      return `<div class="book">
              <figure class="book__img--wrapper">
                ${extras.image}
              </figure>
              <div class="book__title">
                ${book.Title}
              </div>
              <div class="book__year">
                ${book.Year}
              </div>
              <div class="book__price">
                <span class="book__price">${bookExtras.price}</span>
              </div>
            </div>`}
          )
          .join("");
}
          
main();

