using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sonorous.API.ViewModels
{
    public class CategoryViewModel
    {
        public string Name { get; set; }

        public string DisplayName { get; set; }

        public int ParentId { get; set; }

        public bool HasChildren { get; set; }
    }
}
