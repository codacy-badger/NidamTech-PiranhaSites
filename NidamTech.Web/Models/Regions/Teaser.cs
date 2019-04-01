using Piranha.AttributeBuilder;
using Piranha.Extend.Fields;
using Piranha.Models;

namespace Web.Models.Regions
{
    /// <summary>
    /// Simple region for a teaser.
    /// </summary>
    public class Teaser
    {
        public Teaser()
        {
            PageLink = new PageField();
            PostLink = new PostField();
        }

        [Field(Options = FieldOption.HalfWidth)]
        public StringField Title { get; set; }

        [Field(Options = FieldOption.HalfWidth)]
        public StringField SubTitle { get; set; }

        [Field(Title = "Optional Page link")] public PageField PageLink { get; set; }

        [Field(Title = "Optional Post link")] public PostField PostLink { get; set; }

        [Field] public HtmlField Body { get; set; }
    }
}