using Piranha.Extend;
using Piranha.Extend.Fields;

namespace nidam_sites.Models.Blocks
{
    public class MarkdownTextBlock : Block
    {
        public MarkdownField MarkdownText { get; set; }
    }
}