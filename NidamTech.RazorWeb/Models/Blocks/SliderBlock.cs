using Piranha.Extend;
using Piranha.Extend.Fields;

namespace NidamTech.RazorWeb.Models.Blocks
{
    [BlockType(Name = "Slider", Category = "Media", Icon = "fas fa-image")]
    public class SliderBlock : BlockGroup
    {
        public NumberField SizeInPercentage { get; set; }
        public StringField Title { get; set; }
        public StringField Subtitle { get; set; }
    }
}