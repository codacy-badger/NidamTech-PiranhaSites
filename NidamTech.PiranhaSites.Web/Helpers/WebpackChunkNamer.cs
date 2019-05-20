using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Hosting.Internal;

namespace NidamTech.PiranhaSites.Web.Helpers
{
    public class WebpackChunkNamer
    {
        private static Dictionary<string, string> Tags { get; } = new Dictionary<string, string>();
        private readonly IHostingEnvironment HostingEnvironment;

        public WebpackChunkNamer(IHostingEnvironment hostingEnvironment)
        {
            HostingEnvironment = hostingEnvironment;
        }

        public void Init()
        {
            var path = HostingEnvironment.WebRootPath + "/stats-assets.json";
            using (var fs = File.OpenRead(path))
            using (var sr = new StreamReader(fs))
            using (var reader = new JsonTextReader(sr))
            {
                JObject obj = JObject.Load(reader);

                var chunks = obj["assetsByChunkName"];
                foreach (var chunk in chunks)
                {
                    JProperty prop = (JProperty) chunk;
                    Tags.Add(prop.Name, (string) prop.Value);
                }
            }
        }

        public static string GetJsFile(string filename)
        {
            return Tags[filename];
        }
    }
}