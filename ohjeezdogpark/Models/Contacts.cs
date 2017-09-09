using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ohjeezdogpark.Models
{
    public class Contacts
    {
        [Key]
        public int Id { get; set; }
        public string DogName { get; set; }
        public string OwnerFirstName { get; set; }
        public string OwnerLastName { get; set; }
        public int PhoneNumber { get; set; }
    }
}