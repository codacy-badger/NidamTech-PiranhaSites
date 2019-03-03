using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;

namespace nidam_corp.Models.Regions.SiteRegions
{
    public class SiteFooter
    {
        [Field] public StringField Title { get; set; }
        [Field] public StringField TwitterLink { get; set; }
        [Field] public StringField FacebookLink { get; set; }

        /*TODO: Move to SiteInfo*/
        [Field] public StringField SiteOwnerName { get; set; }
    }
}