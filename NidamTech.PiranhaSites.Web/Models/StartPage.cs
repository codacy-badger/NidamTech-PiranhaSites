using NidamTech.PiranhaSites.Web.Models.Regions;
using Piranha.AttributeBuilder;
using Piranha.Models;

namespace NidamTech.PiranhaSites.Web.Models
{
    [PageType(Title = "Start page")]
    [PageTypeRoute(Title = "Default", Route = "/startpage")]
    public class StartPage : Page<StartPage>
    {
        [Region] public Heading Heading { get; set; }
    }
}