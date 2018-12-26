using Piranha.AttributeBuilder;
using Piranha.Models;
using sundhedmedalette.Models.Regions;

namespace sundhedmedalette.Models
{
    [PostType(Title = "Blog post")]
    public class BlogPost : Post<BlogPost>
    {
        /// <summary>
        ///     Gets/sets the post heading.
        /// </summary>
        [Region]
        public Heading Heading { get; set; }
    }
}