using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;
using Piranha.Models;

namespace Web.Models.Regions.SiteRegions
{
    public class SiteFooter
    {
        [Field(Title = "Title", Options = FieldOption.HalfWidth)]
        public StringField Title { get; set; }

        [Field(Title = "Link to Twitter", Options = FieldOption.HalfWidth)]
        public StringField TwitterLink { get; set; }

        [Field(Title = "Link to Facebook", Options = FieldOption.HalfWidth)]
        public StringField FacebookLink { get; set; }
    }
}