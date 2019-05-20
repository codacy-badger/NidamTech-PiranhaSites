using NidamTech.PiranhaSites.Web.Models.Data;
using Piranha.Extend;
using Piranha.Extend.Fields;

namespace NidamTech.PiranhaSites.Web.Models.Blocks
{
    [BlockGroupType(Name = "Two Column", Category = "Content", Icon = "fas fa-images")]
    [BlockItemType(Type = typeof(MarkdownTextBlock))]
    public class TwoColumnBlockGroup : BlockGroup
    {
        public SelectField<BootstrapBreakpointEnum> BootstrapBreakpoint { get; set; }
    }
}