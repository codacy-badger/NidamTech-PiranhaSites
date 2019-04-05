using Piranha.Extend;
using Piranha.Extend.Fields;

namespace Web.Models.Blocks
{
    [BlockType(Name = "Markdown Text", Category = "Text", Icon = "fab fa-markdown")]
    public class MarkdownTextBlock : Block
    {
        public MarkdownField MarkdownText { get; set; }
    }
}