using Microsoft.EntityFrameworkCore;
using Sonorous.Data.Context;
using Sonorous.Data.DomainModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace Sonorous.BL.Services
{
    public class ItemsService
    {
        private readonly SonorousContext context;

        public ItemsService(SonorousContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<MainCategory>> GetMainCategoriesAsync()
        {
            return await context.MainCategories.ToListAsync();
        }

        public async Task<MainCategory> GetMainCategoryByIdAsync(int id)
        {
            return await context.MainCategories.FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<IEnumerable<Category>> GetCategoriesByParentIdAsync(int id)
        {
            var categories = await context.Categories.ToListAsync();
            return categories.FindAll(c => c.MainCategoryId == id);
        }

        public async Task<IEnumerable<Category>> GetCategoriesByParentAsync(MainCategory mainCategory)
        {
            var categories = await context.Categories.Include(m => m.MainCategory).ToListAsync();
            return categories.FindAll(c => c.MainCategory == mainCategory);
        }

        public async Task<Category> GetChildCategoryByIdAsync(int id)
        {
            return await context.Categories.Include(m => m.MainCategory).FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<int> CreateMainCategoryAsync(MainCategory newMainCategory)
        {
            context.MainCategories.Add(newMainCategory);
            return await context.SaveChangesAsync();
        }

        public async Task<int> CreateCategoryAsync(Category newCategory)
        {
            context.Categories.Add(newCategory);
            return await context.SaveChangesAsync();
        }
    }
}
