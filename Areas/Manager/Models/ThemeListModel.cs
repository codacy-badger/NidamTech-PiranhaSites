using System;
using System.Collections.Generic;
using System.Linq;
using Piranha;

namespace nidam_corp.Areas.Manager.Models
{
    public class ThemeListModel
    {
        public class SiteInfo
        {
            public string Id { get; set; }
            public string Title { get; set; }
            public bool IsDefault { get; set; }
        }

        public IList<Piranha.Models.PageType> PageTypes { get; set; } = new List<Piranha.Models.PageType>();

        public IList<Piranha.Models.SitemapItem> Sitemap { get; set; } = new List<Piranha.Models.SitemapItem>();

        public IList<SiteInfo> Sites { get; set; } = new List<SiteInfo>();

        public string SiteId { get; set; }

        public string SiteTitle { get; set; }

        public bool HasSiteContent { get; set; }

        public Guid SiteContentId { get; set; }

        public string PageId { get; set; }

        public int ExpandedLevels { get; set; }
        public static ThemeListModel Get(IApi api, Guid? siteId, string pageId = null)
        {
            var model = new ThemeListModel();

            var site = siteId.HasValue ?
                api.Sites.GetById(siteId.Value) : api.Sites.GetDefault();
            var defaultSite = api.Sites.GetDefault();

            if (site == null)
            {
                site = defaultSite;
            }

            model.SiteId = site.Id == defaultSite.Id ? "" : site.Id.ToString();
            model.SiteTitle = site.Title;
            model.HasSiteContent = !string.IsNullOrWhiteSpace(site.SiteTypeId);
            model.SiteContentId = site.Id;
            model.PageId = pageId;
            model.PageTypes = api.PageTypes.GetAll().ToList();
            model.Sitemap = api.Sites.GetSitemap(site.Id, onlyPublished: false);
            model.Sites = api.Sites.GetAll().Select(s => new SiteInfo
            {
                Id = s.Id.ToString(),
                Title = s.Title,
                IsDefault = s.IsDefault
            }).ToList();

            using (var config = new Config(api))
            {
                model.ExpandedLevels = config.ManagerExpandedSitemapLevels;
            }
            return model;
        }
    }
}