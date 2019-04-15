using NidamTech.RazorWeb.Models.Data;
using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;
using Piranha.Models;

namespace NidamTech.RazorWeb.Models.Regions.SiteRegions
{
    public class SiteAppearance
    {
        [Field(Placeholder = "Darkmode On/Off", Options = FieldOption.HalfWidth)]
        public CheckBoxField DarkMode { get; set; }

        [Field(Title = "Selected Theme", Options = FieldOption.HalfWidth)]
        public SelectField<ThemeEnum> SelectedTheme { get; set; }

        [Field(Title = "Logo")] public ImageField Logo { get; set; }
    }
}