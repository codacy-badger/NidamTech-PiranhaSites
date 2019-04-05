using Web.Models.Data;
using Piranha.AttributeBuilder;
using Piranha.Extend;
using Piranha.Extend.Blocks;
using Piranha.Extend.Fields;
using Piranha.Models;

namespace Web.Models.Blocks
{
    [BlockGroupType(Name = "Two Column", Category = "Layout", Icon = "fas fa-images")]
    [BlockItemType(Type = typeof(MarkdownTextBlock))]
    public class TwoColumnBlockGroup : BlockGroup
    {
        public SelectField<BootstrapBreakpointEnum> BootstrapBreakpoint { get; set; }
    }
}