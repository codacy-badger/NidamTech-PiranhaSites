using NidamTech.RazorWeb.Models.Data;
using Piranha.Extend;
using Piranha.Extend.Fields;

namespace NidamTech.RazorWeb.Models.Blocks
{
    [BlockGroupType(Name = "Two Column", Category = "Content", Icon = "fas fa-images")]
    [BlockItemType(Type = typeof(MarkdownTextBlock))]
    public class TwoColumnBlockGroup : BlockGroup
    {
        public SelectField<BootstrapBreakpointEnum> BootstrapBreakpoint { get; set; }
    }
}