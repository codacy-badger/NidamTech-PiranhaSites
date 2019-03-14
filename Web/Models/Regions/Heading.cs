using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;

namespace Web.Models.Regions
{
    public class Heading
    {
        [Field(Title = "Primary image")] public ImageField PrimaryImage { get; set; }

        [Field] public NumberField SizeInPercentage { get; set; }

        [Field] public StringField Title { get; set; }

        [Field] public StringField Subtitle { get; set; }
    }
}