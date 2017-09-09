using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ohjeezdogpark.Models
{
    public class Favorites
    {
        [Key]
        public int Id { get; set; }
        public int PlaceId { get; set; }
        public string Title { get; set; }
    }
}