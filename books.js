// https://stephen-king-api.onrender.com/api/books //
const bookExtras = {
  "Carrie": {
    image: "./assets/carrie-img.jpg",
    price: "$19.95"
  },
  "Salem's Lot": {
    image: "./assets/salems-lot-jpg.jpg",
    price: "$29.95"
  },
  "The Shining": {
    image: "./assets/the-shining-jpg.jpg",
    price: "$59.95"
  },
  "Rage": {
    image: "./assets/rage-img-jpg.jpg",
    price: "$9.99"
  },
  "The Stand": {
    image: "./assets/the-stand-jpg.jpg",
    price: "$29.95"
  },
  "The Long Walk": {
    image: "./assets/the-long-walk-jpg.jpg",
    price: "$9.99"
  },
  "The Dead Zone": {
    image: "./assets/the-dead-zone.jpg",
    price: "$19.95"
  },
  "Firestarter": {
    image: "./assets/firestarter-img.jpg",
    price: "$34.95"
  },
  "Roadwork": {
    image: "./assets/road-work.jpg",
    price: "$45.99"
  },
  "Cujo": {
    image: "./assets/cujo.jpg",
    price: "$29.99"
  },
  "Christine": {
    image: "./assets/christine-img.jpg",
    price: "$15.95"
  },
  "Pet Sematary": {
    image: "./assets/pet-sematary.jpg",
    price: "$45.99"
  }

}

async function main() {
  const books = await fetch("https://stephen-king-api.onrender.com/api/books");
  const response = (await books.json()).data;
  const bookListEl = document.querySelector(".books");
  

  bookListEl.innerHTML = response
  .map(
      (book) => {
        const extras = bookExtras[book.Title] || {
          image: "./assets/default.jpg",
          price: "N/A"
        }
      return `<div class="book">
              <figure class="book__img--wrapper">
                <img src="${extras.image}" alt="">
              </figure>
              <div class="book__title">
                ${book.Title}
              </div>
              <div class="book__year">
                ${book.Year}
              </div>
              <div class="book__price">
                <span class="book__price">${extras.price}</span>
              </div>
            </div>`}
          )
          .join("");
}
          
main();

