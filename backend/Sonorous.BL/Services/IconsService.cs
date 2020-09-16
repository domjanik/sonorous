using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;

namespace Sonorous.BL.Services
{
    public class IconsService
    {
        public MemoryStream GetCategoryIcon(string name, string fileType)
        {
            return GetIcon(name, fileType, "Icons");
        }

        private MemoryStream GetIcon(string name, string fileType, string folderName)
        {
            var exePath = Environment.CurrentDirectory;
            var appRoot = exePath;
            string baseLocalization = Path.Combine(appRoot, "Properties");
            var path = @$"{baseLocalization}\{folderName}\{name}Icon.{fileType}";
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
