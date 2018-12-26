using System;
using Piranha.Extend;
using Piranha.Extend.Fields;

namespace sundhedmedalette.Models.Blocks
{
    [BlockType(Name = "HeroImage", Category = "Content", Icon = "fas fa-image")]
    public class HeroImageBlock : Block
    {
        public ImageField BackgroundImage { get; set; }
        public CheckBoxField IsFullscreen { get; set; }
        public StringField Title { get; set; }
        public StringField SubTitle { get; set; }

        public StringField ButtonText { get; set; }
    }
}