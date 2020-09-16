using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Sonorous.API.ViewModels;
using Sonorous.BL.Services;
using Sonorous.Data.Context;
using Sonorous.Data.DomainModels;

namespace Sonorous.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly ItemsService itemsServices;
        private readonly FavouritesService favouritesService;

        public ItemsController(SonorousContext context)
        {
            itemsServices = new ItemsService(context);
            favouritesService = new FavouritesService(context);
        }

        /// <summary>
        /// Get all main categories.
        /// </summary>
        /// <returns>List of main categories.</returns>
        [HttpGet]
        public async Task<IEnumerable<MainCategory>> GetAllMainCategories()
        {
            return await itemsServices.GetMainCategoriesAsync();
        }

        /// <summary>
        /// Get main category
        /// </summary>
        /// <param name="id">Id number of main category</param>
        /// <returns>Main category</returns>
        [HttpGet("{id}")]
        public async Task<MainCategory> GetMainCategory(int id)
        {
            return await itemsServices.GetMainCategoryByIdAsync(id);
        }

        /// <summary>
        /// Get list of child cateogries of main category
        /// </summary>
        /// <param name="id">Id number of main category</param>
        /// <returns>List of Categories</returns>
        [HttpGet("{id}")]
        public async Task<IEnumerable<Category>> GetChildCategories(int id)
        {
            return await itemsServices.GetCategoriesByParentIdAsync(id);
        }

        /// <summary>
        /// Get category
        /// </summary>
        /// <param name="id">Id number of category</param>
        /// <returns>Category</returns>
        [HttpGet("{id}")]
        public async Task<Category> GetCategory(int id)
        {
            return await itemsServices.GetChildCategoryByIdAsync(id);
        }

        [HttpPost]
        public async Task<ActionResult> Post(CategoryViewModel model)
        {
            if(model.ParentId == 0)
            {
                var newMainCategory = new MainCategory(model.Name, model.HasChildren, model.DisplayName);
                if(await itemsServices.CreateMainCategoryAsync(newMainCategory) == 1)
                {
                    return Ok();
                }

                return Conflict();
            }
            var newCategory = new Category(model.ParentId, model.Name, model.HasChildren, model.DisplayName);
            if(await itemsServices.CreateCategoryAsync(newCategory) == 1)
            {
                return Ok();
            }

            return Conflict();
        }

        /// <summary>
        /// Get list of favourites.
        /// </summary>
        /// <returns>List of favourite</returns>
        [HttpGet]
        public async Task<IEnumerable<Favourite>> GetFavourites()
        {
            return await favouritesService.GetAllAsync();
        }

        /// <summary>
        /// Add to favourite. Mark Category as favourite.
        /// </summary>
        /// <param name="model">Model to add</param>
        /// <returns>200 or 409 status code</returns>
        [HttpPost]
        public async Task<ActionResult> AddToFavourites(Favourite model)
        {
            var result = await favouritesService.AddAsync(model);
            if(result == 0)
            {
                return Conflict();
            }

            return Ok();
        }

        /// <summary>
        /// Delete from favourite. Mark Category as no more favourite.
        /// </summary>
        /// <param name="id">Id of Category added to Favourites.</param>
        /// <returns>200 or 409 status code</returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteFromFavourites(int id)
        {
            var result = await favouritesService.DeleteAsync(id);
            if(result == 0)
            {
                return Conflict();
            }

            return Ok();
        }
    }
}
