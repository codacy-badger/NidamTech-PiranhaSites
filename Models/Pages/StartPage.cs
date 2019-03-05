using System.Collections.Generic;
using Piranha.AttributeBuilder;
using Piranha.Models;

namespace nidam_sites.Models
{
    [PageType(Title = "Start page")]
    [PageTypeRoute(Title = "Default", Route = "/start")]
    public class StartPage : Page<StartPage>
    {
        /// <summary>
        /// Gets/sets the page heading.
        /// </summary>
        [Region]
        public Regions.Heading Heading { get; set; }
    }
}