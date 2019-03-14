using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;
using Piranha.Models;

namespace Web.Models.Regions.SiteRegions
{
    public class SiteInfo
    {
        [Field(Title = "Site Owners Name", Options = FieldOption.HalfWidth)]
        public StringField SiteOwnerName { get; set; }

        [Field(Title = "Site Owners Phone Number", Options = FieldOption.HalfWidth)]
        public StringField SiteOwnerPhoneNumber { get; set; }
    }
}