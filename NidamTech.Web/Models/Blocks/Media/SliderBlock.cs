using Piranha.Extend;
using Piranha.Extend.Fields;

namespace Web.Models.Blocks
{
    public class SliderBlock : BlockGroup
    {
        public NumberField SizeInPercentage { get; set; }
        public StringField Title { get; set; }
        public StringField Subtitle { get; set; }
    }
}