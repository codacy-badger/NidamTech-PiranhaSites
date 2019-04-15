using NidamTech.RazorWeb.Models.Regions;
using Piranha.AttributeBuilder;
using Piranha.Models;

namespace NidamTech.RazorWeb.Models
{
    [PageType(Title = "Start page")]
    [PageTypeRoute(Title = "Default", Route = "/start")]
    public class StartPage : Page<StartPage>
    {
        [Region] public Heading Heading { get; set; }
    }
}