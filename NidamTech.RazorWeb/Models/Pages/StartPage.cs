using Piranha.AttributeBuilder;
using Piranha.Models;

namespace NidamTech.RazorWeb.Models.Pages
{
    [PageType(Title = "Start page")]
    [PageTypeRoute(Title = "Default", Route = "/start")]
    public class StartPage : Page<StartPage>
    {
        [Region]
        public Regions.Heading Heading { get; set; }
    }
}