using Microsoft.EntityFrameworkCore;
using Sonorous.Data.DomainModels;

namespace Sonorous.Data.Context
{
    public class SonorousContext : DbContext
    {
        public SonorousContext(DbContextOptions<SonorousContext> options) : base(options)
        {

        }

        public DbSet<MainCategory> MainCategories { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Favourite> Favourites { get; set; }
    }
}
