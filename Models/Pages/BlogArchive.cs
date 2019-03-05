using Piranha.AttributeBuilder;
using Piranha.Models;

namespace nidam_sites.Models
{
    [PageType(Title = "Blog archive", UseBlocks = false)]
    public class BlogArchive : ArchivePage<BlogArchive>
    {
        /// <summary>
        /// Gets/sets the archive heading.
        /// </summary>
        [Region]
        public Regions.Heading Heading { get; set; }
    }
}