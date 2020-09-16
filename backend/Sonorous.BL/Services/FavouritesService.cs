using Microsoft.EntityFrameworkCore;
using Sonorous.Data.Context;
using Sonorous.Data.DomainModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Sonorous.BL.Services
{
    public class FavouritesService
    {
        private readonly SonorousContext context;

        public FavouritesService(SonorousContext context)
        {
            this.context = context;
        }

        public async Task<int> AddAsync(Favourite model)
        {
            context.Favourites.Add(model);
            var category = await context.Categories.FirstOrDefaultAsync(c => c.Id == model.CategoryId);
            category.IsFavourite = true;
            return await context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Favourite>> GetAllAsync()
        {
            return await context.Favourites.Include(f => f.Fields).ToListAsync();
        }

        public async Task<int> DeleteAsync(int id)
        {
            var model = await context.Favourites.FirstAsync(f => f.CategoryId == id);
            var category = await context.Categories.FirstOrDefaultAsync(c => c.Id == model.CategoryId);
            context.Favourites.Remove(model);
            category.IsFavourite = false;

            return await context.SaveChangesAsync();
        }
    }
}
