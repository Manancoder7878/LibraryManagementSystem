#  Library Management System

A full-stack web application that allows users to borrow and return books, manage book records, and handle user roles (Admin and User). Built with modern web technologies and follows a modular architecture for frontend and backend separation.

---

## Features

### User Management
- User registration with name, email, and password
- Secure login and logout functionality
- Role-based access:
  - **Admin**: Can manage books and users
  - **User**: Can search, borrow, and return books
- Input validation and error handling

### Book Management (Admin Only)
- Add new books (title, author, genre, availability)
- Update book details (genre, availability status)
- Remove books from the system
- Prevent duplicate book entries

### Borrowing & Returning Books
- Search books by title, author, or genre
- View real-time availability status
- Borrow books if available
- Prevent borrowing of already borrowed books
- Return books with due date tracking

---

##  Tech Stack

- **Frontend**:  Angular
- **Backend**: .Net
- **Database**: SQL Server
- **Authentication**: JWT / Sessions / Bcrypt

---



