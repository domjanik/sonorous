using Sonorous.Shared;
using System;
using System.Collections.Generic;
using System.Resources;

namespace Sonorous.Data.DomainModels
{
    public class MainCategory
    {
        public string Name { get; set; }

        public string DisplayName { get; set; }

        public int Id { get; set; }

        public bool HasChildren { get; set; }

        public MainCategory(string name, bool hasChildren, string displayName = null)
        {
            Name = name;
            HasChildren = hasChildren;
            if (String.IsNullOrEmpty(displayName))
            {
                Constants.CategoriesNames.CategoriesPL.TryGetValue(name, out string fullName);
                DisplayName = fullName;
            }
            else
            {
                DisplayName = displayName;
            }
        }
    }
}
