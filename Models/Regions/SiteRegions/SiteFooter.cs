using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;
using Piranha.Models;

namespace nidam_corp.Models.Regions.SiteRegions
{
    public class SiteFooter
    {
        [Field(Title = "Title", Options = FieldOption.HalfWidth)]
        public StringField Title { get; set; }

        /*TODO: Move to SiteInfo*/
        [Field(Title = "Site Owners Name", Options = FieldOption.HalfWidth)]
        public StringField SiteOwnerName { get; set; }

        [Field(Title = "Link to Twitter", Options = FieldOption.HalfWidth)]
        public StringField TwitterLink { get; set; }

        [Field(Title = "Link to Facebook", Options = FieldOption.HalfWidth)]
        public StringField FacebookLink { get; set; }
    }
}