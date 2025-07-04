using System.ComponentModel.DataAnnotations;

namespace LibraryBackend.Model
{

    public enum Role { Admin, User }

    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        [EmailAddress] 
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public Role Role { get; set; }
    }

}
