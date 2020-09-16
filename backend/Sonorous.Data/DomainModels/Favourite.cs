using Sonorous.Shared;
using System;
using System.Collections.Generic;
using System.Text;

namespace Sonorous.Data.DomainModels
{
    public class FavouriteFields
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Value { get; set; }

        public SonorousEnums.FieldType Type { get; set; }
    }

    public class Favourite
    {
        public int Id { get; set; }

        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        public IEnumerable<FavouriteFields> Fields { get; set; }
    }
}
