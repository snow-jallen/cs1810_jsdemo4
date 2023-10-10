import { books } from "./books.js";

// Function to display books in the left pane
function displayBooks() {
  //implement this
  const bookList = document.getElementById("book-list");
  books.forEach((book, index) => {
    const bookdraggable = document.createElement('div')
    bookdraggable.setAttribute("id", index)
    bookdraggable.classList.add('book')
    bookdraggable.classList.add('draggable')
    bookdraggable.innerHTML = getLeftBookTemplate(book, index)
    bookList.appendChild(bookdraggable);
  })
}

const getLeftBookTemplate = (book, index) => {
  return `
        <img draggable="false" src=https://picsum.photos/seed/${index + 1
    }/150/150 style="margin-right: 1em;" >
        <div>
            <h3>${book.title}</h3>
            <p>Description: ${book.description}</p>
            <p>Rating: ${renderStars(book.rating)}</p>
        </div>
    `;
};


function renderStars(rating) {
    if (isNaN(rating) || rating < 0 || rating > 5) {
      return ""; // Invalid rating
    }
  
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const emptyStars = totalStars - fullStars;
  
    let starsHTML = "";
  
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<span class="star">★</span>'; // Full star (★)
    }
  
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += '<span class="star">☆</span>'; // Empty star (☆)
    }
  
    return starsHTML;
  }
