using Piranha.AttributeBuilder;
using Piranha.Models;

namespace NidamTech.RazorWeb.Models.Pages
{
    [PageType(Title = "Standard page")]
    [PageTypeRoute(Title = "Narrow", Route = "/page")]
    public class StandardPage : Page<StandardPage>
    {
    }
}