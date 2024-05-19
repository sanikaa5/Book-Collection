# **Book Collection Website**

This is a simple website that allows users to display and manage their book collection. Users can add new books to the collection, view a list of existing books, and click on individual books and their authors to view detailed information.

**Files**

- **index.html**: The main landing page of the website where users can add new books and view the list of existing books.
- **book.html**: The page that displays image and detailed information about a specific book when clicked from the list of books. 
- **styles.css**: The CSS file containing styles for the website, including layout, colors, and typography.
- **script.js**: The JavaScript file containing functionality for adding new books, displaying book details, and handling user interactions.
- **save_book.php**: The PHP file saving a new book entry into the MySQL database (`books`) table (`books_table`).
- **get_books.php**: The PHP file retrieving saved book entries from MySQL database (`books`) each time index.html is accessed.

**Features**

- **Add New Books**: Users can use the form on the main page (`index.html`) to add new books to their collection.
- **View Book List**: The main page displays a list of all added books, including their titles and authors.
- **View Book Details**: Clicking on a book title in the list opens a new page (`book.html`) with detailed information about the selected book, including the title, author, description, and an image fetched from the Google Books API.
- **View Author Information**: Clicking on author's name directs you to the author's google page.
- **Interactive Interface**: The website provides a user-friendly interface with hover effects, clickable book titles and author names, and dynamic content.

**Usage**

1. Open `index.html` in your web browser.
2. Use the form to add new books to your collection.
3. Click on a book title in the list to view detailed information about the selected book.
4. Click on author's name in the list to view the google page of the author.
**Note:** Create a Google Books API key and insert it in (`book.html`) in place of `YOUR-API-KEY`. This is essential for displaying the book image.

**Working of MySQL database using XAMPP and PHPMyAdmin**:

1. Start XAMPP: Ensure that the XAMPP control panel is running and both the Apache and MySQL modules are started.
2. Access PHPMyAdmin: Open a web browser and navigate to http://localhost/phpmyadmin. This will take you to the PHPMyAdmin login page.
3. Login to PHPMyAdmin: By default, PHPMyAdmin does not require a username and password. You can simply click on the "Go" button to log in.
4. Create a New Database: Create database (`books`).
5. Manage Database Tables: After creating a database, you can manage its tables by clicking on its name in the left sidebar. Create table (`books_table`).
6. Execute SQL Queries:
   (`CREATE TABLE books_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT
   `)
7. Place Your files in the htdocs directory of your XAMPP installation.
8. Open your browser and go to http://localhost/your_directory/index.html to acess project.
9. View Data in MySQL: Open phpMyAdmin (http://localhost/phpmyadmin/).
                       Select the bookstore database.
                       Click on the books table to view the inserted records.

 
Contributions are welcome! 

**License**

This project is licensed under the [MIT License](LICENSE).
