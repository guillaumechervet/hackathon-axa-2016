using Microsoft.AspNet.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNet5TypescriptProductionGrunt.Model
{
    public class FileDescriptionShort
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public string Name { get; set; }

        public ICollection<IFormFile> File { get; set; }
    }
}
