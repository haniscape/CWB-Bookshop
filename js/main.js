// Fetching books onto the home page //
let allBooks = document.querySelector(".books");

window.addEventListener("DOMContentLoaded", getBooks);
function getBooks() {
  fetch("https://bookshop-api.mirkwood.dev/books/")
    .then(function (re) {
      return re.json();
    })
    .then(function (data) {
      displayBooks(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function displayBooks(data) {
  let bookDiv = "";
  data.forEach((book) => {
    let authorFullName = book.author.first_name + " " + book.author.last_name;
    let authorInUrl = authorFullName.replace(/\s+/g, "-");
    let bookInUrl = book.title.replace(/\s+/g, "-").trim();
    let title = `<a class = 'title' href= "books/book-details.html?id=${book.id}__${authorInUrl}__${bookInUrl}">${book.title}</a>  `;
    // const title = `<a class = 'title' href= "books/book-details.html?id=${book.id}_${authorInUrl}__${bookInUrl}_">  ${book.title}</a>  `;

    let author = `<div class = 'author'> ${authorFullName}</div> `;
    let bookCover = `<img class = 'book-cover' src = ${book.cover_url}>`;
    bookDiv += `<div class='book'> ${title} ${author} ${bookCover}   </div> `;
  });
  allBooks.innerHTML = bookDiv;
}
