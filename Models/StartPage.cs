using System.Collections.Generic;
using Piranha.AttributeBuilder;
using Piranha.Models;

namespace nidam_corp.Models
{
    [PageType(Title = "Start page")]
    [PageTypeRoute(Title = "Default", Route = "/start")]
    public class StartPage : Page<StartPage>
    {
        /// <summary>
        /// Default constructor.
        /// </summary>
        public StartPage()
        {
            Teasers = new List<Regions.Teaser>();
        }

        /// <summary>
        /// Gets/sets the page heading.
        /// </summary>
        [Region]
        public Regions.Heading Heading { get; set; }

        /// <summary>
        /// Gets/sets the available teasers.
        /// </summary>
        [Region(ListTitle = "Title")]
        public IList<Regions.Teaser> Teasers { get; set; }
    }
}