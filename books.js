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
  },
  "The Running Man": {
    image: "./assets/the-running-man.jpg",
    price: "$36.50"
  }, 
  "The Dark Tower: The Gunslinger": {
    image: "./assets/the-gunslinger.jpg",
    price: "$39.95"
  },
  "Cycle of the Werewolf": {
    image: "./assets/warewolf-img.jpg",
    price: "$19.99"
  }, 
  "The Talisman": {
    image: "./assets/the-talisman.jpg",
    price: "$14.95"
  },
  "The Eyes of the Dragon": {
    image: "./assets/the-dragon.jpg",
    price: "$29.95"
  },
  "Thinner": {
    image: "./assets/thinner.img.jpg",
    price: "$9.99"
  },
  "It": {
    image: "./assets/it-img.jpg",
    price: "$49.99"
  },
  "The Dark Tower II: The Drawing of the Three": {
    image: "./assets/the-drawing.jpg",
    price: "$39.95"
  },
  "Billy Summers": {
    image: "./assets/billy-summers.jpg",
    price: "$46.95"
  },
  "Later": {
    image: "./assets/later-img.jpg",
    price: "$34.99"
  },
  "The Institute": {
    image: "./assets/the-institute.jpg",
    price: "$39.95"
  },
  "Elevation": {
    image: "./assets/elevation-img.jpg",
    price: "$34.95"
  },
  "The Outsider": {
    image: "./assets/the-outsider.jpg",
    price: "$22.95"
  },
  "Sleeping Beauties": {
    image: "./assets/sleeping-beauties.jpg",
    price: "$65.95"
  },
  "Gwendy's Button Box": {
    image: "./assets/button-box.jpg",
    price: "$15.95"
  },
  "End of Watch": {
    image: "./assets/end-of-watch.jpg",
    price: "$39.99"
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

let books;

async function renderBooks(filter) {
  const booksWrapper = document.querySelector(".books");
  
  booksWrapper
}