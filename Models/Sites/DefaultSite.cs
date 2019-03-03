using nidam_corp.Models.Regions.SiteRegions;
using Piranha.AttributeBuilder;
using Piranha.Models;

namespace nidam_corp.Models
{
    [SiteType(Title = "Default Site")]
    public class DefaultSite : SiteContent<DefaultSite>
    {
        [Region(Title = "Footer Content")] public SiteFooter Footer { get; set; }
        [Region(Title = "Site Appearance")] public SiteAppearance Appearance { get; set; }
    }
}