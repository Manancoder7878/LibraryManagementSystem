namespace LibraryBackend.Model
{
    public class Borrow
    {
        public int BorrowId { get; set; }
        public int UserId { get; set; }
        public int BookId { get; set; }
        public DateTime BorrowDate { get; set; } = DateTime.UtcNow;
        public DateTime DueDate { get; set; }
        public DateTime? ReturnedDate { get; set; }

        public User User { get; set; }
        public Book Book { get; set; }
    }   
}
