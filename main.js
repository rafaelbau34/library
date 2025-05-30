function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const book1 = new Book("George Orwell", "1984", "340", false);

function addBookToLibrary() {}

function showForm() {}

const popUpForm = document.getElementById("popUpForm");
const button = document.getElementById("addBook");

button.addEventListener("click", function () {
  document.getElementById("popUpForm").style.display = "flex";
});
