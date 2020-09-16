using Sonorous.Data.DomainModels;
using Sonorous.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Sonorous.Data.Context
{
    public class DbInitializer
    {
        public static void Initialize(SonorousContext context)
        {
            context.Database.EnsureCreated();

            if (!context.MainCategories.Any())
            {
                var itemsList = new List<MainCategory>();
                foreach (var category in Enum.GetValues(typeof(SonorousEnums.MainCategories)))
                {
                    itemsList.Add(new MainCategory(category.ToString(), true));
                }
                context.MainCategories.AddRange(itemsList);
                context.SaveChangesAsync();
            }

            if (!context.Categories.Any())
            {
                var parentCat = context.MainCategories.First(m => m.Name == SonorousEnums.MainCategories.PublicTransport.ToString());

                var catList = new List<Category>();
                foreach(var category in Enum.GetValues(typeof(SonorousEnums.PublicTransportCategories)))
                {
                    catList.Add(new Category(parentCat, category.ToString(), false));
                }
                context.Categories.AddRange(catList);
                context.SaveChangesAsync();
            }
        }
    }
}
