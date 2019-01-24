using Piranha.AttributeBuilder;
using Piranha.Models;

namespace nidam_corp.Models
{
    [PostType(Title = "Blog post")]
    public class BlogPost : Post<BlogPost>
    {
        /// <summary>
        /// Gets/sets the post heading.
        /// </summary>
        [Region]
        public Regions.Heading Heading { get; set; }
    }
}