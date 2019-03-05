using Piranha.Extend;
using Piranha.Extend.Fields;

namespace nidam_sites.Models.Blocks
{
    [BlockType(Name = "HeroImage", Category = "Content", Icon = "fas fa-image")]
    public class HeroBlock : Block
    {
        public ImageField BackgroundImage { get; set; }
        public NumberField SizeInPercentage { get; set; }
        public StringField Title { get; set; }
        public StringField Subtitle { get; set; }
    }
}