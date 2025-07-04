using Microsoft.EntityFrameworkCore;

namespace LibraryBackend.Model
{
    public class LibraryDbContext:DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Borrow> Borrows { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=LibraryDb;Trusted_Connection=True;");
        }
    }
}
