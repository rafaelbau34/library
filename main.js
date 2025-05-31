function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const myLibrary = [];

function addBookToLibrary() {
  const list = document.getElementById("book-list");
  list.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const div = document.createElement("div");
    div.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Read: ${book.read}`;
    list.appendChild(div);
  });
}

const popUpForm = document.getElementById("popUpForm");
const button = document.getElementById("addBook");
const closeButton = document.getElementById("closeBtn");

button.addEventListener("click", function () {
  document.getElementById("popUpForm").style.display = "flex";
});

closeButton.addEventListener("click", function () {
  document.getElementById("popUpForm").style.display = "none";
});

document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const author = e.target.author.value;
  const title = e.target.title.value;
  const pages = e.target.pages.value;
  const read = e.target.option.value;

  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
  addBookToLibrary();

  e.target.reset();
});
