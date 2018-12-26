using System.Collections.Generic;
using Piranha.AttributeBuilder;
using Piranha.Models;
using sundhedmedalette.Models.Regions;

namespace sundhedmedalette.Models
{
    [PageType(Title = "Start page")]
    [PageTypeRoute(Title = "Default", Route = "/start")]
    public class StartPage : Page<StartPage>
    {
        /// <summary>
        ///     Default constructor.
        /// </summary>
        public StartPage()
        {
            Teasers = new List<Teaser>();
        }

        /// <summary>
        ///     Gets/sets the page heading.
        /// </summary>
        [Region]
        public Heading Heading { get; set; }

        /// <summary>
        ///     Gets/sets the available teasers.
        /// </summary>
        [Region(ListTitle = "Title")]
        public IList<Teaser> Teasers { get; set; }
    }
}