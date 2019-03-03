using nidam_corp.Models.Data;
using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;

namespace nidam_corp.Models.Regions.SiteRegions
{
    public class SiteAppearance
    {
        [Field(Placeholder = "Darkmode On/Off")]
        public CheckBoxField DarkMode { get; set; }

        [Field(Title = "Selected Theme")] public SelectField<Theme> SelectedTheme { get; set; }
    }
}