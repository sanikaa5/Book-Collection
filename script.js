document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('book-form');
    const bookList = document.getElementById('books');
    let booksArray = []; // Array to store books

    // Fetch existing books from the database when the page loads
    fetch('get_books.php')
        .then(response => response.json())
        .then(data => {
            booksArray = data;
            booksArray.sort((a, b) => a.title.localeCompare(b.title)); // Sort books alphabetically by title
            displayBooks();
        });

    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const description = document.getElementById('description').value;

        const book = {
            title,
            author,
            description
        };

        // Send book data to PHP script to save in the database
        fetch('save_book.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&description=${encodeURIComponent(description)}`
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Optional: log the response from save_book.php

            booksArray.push(book);
            booksArray.sort((a, b) => a.title.localeCompare(b.title)); // Sort books alphabetically by title
            displayBooks();

            bookForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    function displayBooks() {
        bookList.innerHTML = '';

        booksArray.forEach((book) => {
            const li = document.createElement('li');
            const bookTitle = document.createElement('strong');
            bookTitle.textContent = book.title;
            bookTitle.classList.add('book-title');
            bookTitle.addEventListener('click', () => {
                window.open(`book.html?title=${encodeURIComponent(book.title)}&author=${encodeURIComponent(book.author)}&description=${encodeURIComponent(book.description)}`, '_blank');
            });

            const bookAuthor = document.createElement('em');
            bookAuthor.textContent = book.author;
            bookAuthor.classList.add('book-author');
            bookAuthor.addEventListener('click', () => {
                window.open(`https://www.google.com/search?q=${encodeURIComponent(book.author)}`, '_blank');
            });

            li.appendChild(bookTitle);
            li.appendChild(bookAuthor);
            bookList.appendChild(li);
        });
    }
});


