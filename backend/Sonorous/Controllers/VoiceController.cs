using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Sonorous.BL.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sonorous.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class VoiceController : ControllerBase
    {
        private readonly VoicesService voicesServices;

        public VoiceController()
        {
            voicesServices = new VoicesService();
        }

        [HttpGet("{name}")]
        public FileStreamResult GetVoice(string name)
        {
            var memoryString = voicesServices.GetRecording(name);
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
            var res = new FileStreamResult(memoryString, "audio/wav");

            return res;
        }
    }
}
