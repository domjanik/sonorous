using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Sonorous.BL.Services
{
    public class VoicesService
    {
        public MemoryStream GetRecording(string name)
        {
            var exePath = Environment.CurrentDirectory;
            var appRoot = exePath;
            string baseLocalization = Path.Combine(appRoot, "Properties");
            var path = @$"{baseLocalization}\Voices\{name}.wav";
            var fileExists = File.Exists(path);
            if (!fileExists)
            {
                throw new Exception($"File doesn't exist. File localtion: {path}.\n Current directory: {appRoot}");
            }

            var fileDataBytes = File.ReadAllBytes(path);
            return new MemoryStream(fileDataBytes);
        }
    }
}
