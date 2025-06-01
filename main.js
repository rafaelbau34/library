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
    const card = document.createElement("div");
    card.classList.add("book-card");

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    const read = document.createElement("p");
    read.textContent = `Read: ${book.read}`;

    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.style.gap = "10px";

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Read";
    toggleButton.addEventListener("click", () => {
      book.read = book.read === "yes" ? "no" : "yes";
      addBookToLibrary();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      addBookToLibrary();
    });

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    btnContainer.appendChild(toggleButton);
    btnContainer.appendChild(delBtn);

    card.appendChild(btnContainer);

    list.appendChild(card);
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
  popUpForm.style.display = "none";
  addBookToLibrary();

  e.target.reset();
});
