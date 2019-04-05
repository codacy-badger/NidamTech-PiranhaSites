using Piranha.Extend;
using Piranha.Extend.Fields;

namespace Web.Models.Blocks
{
    [BlockType(Name = "Hero", Category = "Media Components", Icon = "fas fa-image")]
    public class HeroBlock : Block
    {
        public ImageField BackgroundImage { get; set; }
        public NumberField SizeInPercentage { get; set; }
        public StringField Title { get; set; }
        public StringField Subtitle { get; set; }
    }
}