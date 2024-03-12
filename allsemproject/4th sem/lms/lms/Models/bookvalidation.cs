using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace lms.Models
{
    [MetadataType(typeof(bookMetaData))]
    public partial class book
    {
        public class bookMetaData
        {
            [DisplayName("Book Name")]
            public string bname { get; set; }

            [DisplayName("Category ID")]
            public Nullable<int> cat_id { get; set; }
            [DisplayName("Author ID")]
            public Nullable<int> auth_id { get; set; }
            [DisplayName("Publisher ID")]
            public Nullable<int> p_id { get; set; }
            [DisplayName("Content")]
            public string contents { get; set; }
            [DisplayName("Pages")]
            public Nullable<int> pages { get; set; }
            [DisplayName("Edition")]
            public string edition { get; set; }
        }
    }
}