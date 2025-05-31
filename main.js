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
    div.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Read: ${bbook.read}`;
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
