using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Sonorous.API.ViewModels;
using Sonorous.BL.Services;

namespace Sonorous.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class IconsController : ControllerBase
    {
        private readonly IconsService iconsServices;

        public IconsController()
        {
            iconsServices = new IconsService();
        }

        [HttpGet("{itemName}")]
        public FileStreamResult GetCategoryIcon(string itemName)
        {
            var memoryString = iconsServices.GetCategoryIcon(itemName, "svg");
            if (memoryString == null)
            {
                var s = "error memory string is null";
                var stream = new MemoryStream();
                var writer = new StreamWriter(stream);
                writer.Write(s);
                writer.Flush();
                stream.Position = 0;

                return new FileStreamResult(stream, "plain/text");
            }
            var res = new FileStreamResult(memoryString, "image/svg+xml");

            return res;
        }
    }
}
