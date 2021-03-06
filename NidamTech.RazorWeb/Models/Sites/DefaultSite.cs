using NidamTech.RazorWeb.Models.Regions.SiteRegions;
using Piranha.AttributeBuilder;
using Piranha.Models;

namespace NidamTech.RazorWeb.Models.Sites
{
    [SiteType(Title = "Default Site")]
    public class DefaultSite : SiteContent<DefaultSite>
    {
        [Region(Title = "Site Info")] public SiteInfo Info { get; set; }
        [Region(Title = "Site Footer")] public SiteFooter Footer { get; set; }
        [Region(Title = "Site Appearance")] public SiteAppearance Appearance { get; set; }
    }
}