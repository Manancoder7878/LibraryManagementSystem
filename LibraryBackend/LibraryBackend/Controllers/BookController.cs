using LibraryBackend.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookController : ControllerBase
    {
        private readonly LibraryDbContext _context;
        public BookController(LibraryDbContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("search")]
        public IActionResult Search(string query)
        {
            var books =  _context.Books
                .Where(b => b.Title.Contains(query) || b.Author.Contains(query) || b.Genre.Contains(query))
                .ToList();

            return Ok(books);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult AddBook(Book book)
        {
            if (_context.Books.Any(b => b.Title == book.Title && b.Author == book.Author))
                return BadRequest("Book already exists.");

            _context.Books.Add(book);
            _context.SaveChanges();
            return Ok("Book added.");
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, Book book)
        {
            var existing =  _context.Books.Find(id);
            if (existing == null) return NotFound();

            existing.Title = book.Title;
            existing.Author = book.Author;
            existing.Genre = book.Genre;
            existing.IsAvailable = book.IsAvailable;
            _context.SaveChanges();

            return Ok("Book updated.");
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            var book =  _context.Books.Find(id);
            if (book == null) return NotFound();

            _context.Books.Remove(book);
            _context.SaveChanges();
            return Ok("Book removed.");
        }
    }
}
