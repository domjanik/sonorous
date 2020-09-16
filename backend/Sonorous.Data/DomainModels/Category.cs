using Sonorous.Shared;
using System;
using System.Collections.Generic;
using System.Text;

namespace Sonorous.Data.DomainModels
{
    public class Category
    {
        public int MainCategoryId { get; set; }

        public MainCategory MainCategory { get; set; }

        public string Name { get; set; }

        public string DisplayName { get; set; }

        public int Id { get; set; }

        public bool HasChildren { get; set; }

        public bool IsFavourite { get; set; }

        public Category(int mainCategoryId, string name, bool hasChildren, string displayName = null)
        {
            MainCategoryId = mainCategoryId;
            Name = name;
            DisplayName = displayName;
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

        public Category(MainCategory mainCategory, string name, bool hasChildren, string displayName = null)
        {
            MainCategory = mainCategory;
            Name = name;
            DisplayName = displayName;
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
