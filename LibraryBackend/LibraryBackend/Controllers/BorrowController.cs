using LibraryBackend.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BorrowController : ControllerBase
    {
       private readonly LibraryDbContext _context;
       public BorrowController(LibraryDbContext context)
        {
            _context = context;
        }

        [HttpPost("borrow")]
        public IActionResult BorrowBook(int userId, int bookId)
        {
            var book =  _context.Books.Find(bookId);
            if (book == null || !book.IsAvailable) return BadRequest("Book not available.");

            var borrow = new Borrow
            {
                UserId = userId,
                BookId = bookId,
                DueDate = DateTime.UtcNow.AddDays(14)
            };

            book.IsAvailable = false;
            _context.Borrows.Add(borrow);
            _context.SaveChanges();

            return Ok("Book borrowed.");
        }

        [HttpPost("return")]
        public IActionResult ReturnBook(int borrowId)
        {
            var borrow =  _context.Borrows.Include(b => b.Book).FirstOrDefault(b => b.BorrowId == borrowId);
            if (borrow == null || borrow.ReturnedDate != null) return BadRequest("Invalid return.");

            borrow.ReturnedDate = DateTime.UtcNow;
            borrow.Book.IsAvailable = true;
             _context.SaveChanges();

            return Ok("Book returned.");
        }
    }
}
