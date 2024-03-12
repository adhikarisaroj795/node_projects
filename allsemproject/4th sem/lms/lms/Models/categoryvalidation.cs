using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace lms.Models
{
    [MetadataType(typeof(categoryMetaData))]
    public partial class category
    {
        
        public class categoryMetaData
        {
            [DisplayName("Book Category")]
            public string catname { get; set; }

            [DisplayName("Status")]
            public string status { get; set; }

        }
    }
}