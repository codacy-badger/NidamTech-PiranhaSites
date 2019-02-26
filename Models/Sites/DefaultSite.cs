using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;
using Piranha.Models;

namespace nidam_corp.Models
{
    [SiteType(Title = "Default Site")]
    public class DefaultSite : SiteContent<DefaultSite>
    {
        public class SiteFooter
        {
            [Field] public StringField FooterText { get; set; }
            [Field] public StringField TwitterLink { get; set; }
            [Field] public StringField FacebookLink { get; set; }
            [Field] public StringField FooterSiteOwnerName { get; set; }
        }

        [Region] public SiteFooter Footer { get; set; }
    }
}