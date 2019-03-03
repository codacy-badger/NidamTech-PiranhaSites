using nidam_corp.Models.Data;
using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;
using Piranha.Models;

namespace nidam_corp.Models.Regions.SiteRegions
{
    public class SiteAppearance
    {
        [Field(Placeholder = "Darkmode On/Off", Options = FieldOption.HalfWidth)]
        public CheckBoxField DarkMode { get; set; }

        [Field(Title = "Selected Theme", Options = FieldOption.HalfWidth)]
        public SelectField<Theme> SelectedTheme { get; set; }

        [Field(Title = "Logo")] public ImageField Logo { get; set; }
        [Field(Title = "Link to Facebook", Options = FieldOption.HalfWidth)]
        public StringField FacebookLink { get; set; }
    }
}